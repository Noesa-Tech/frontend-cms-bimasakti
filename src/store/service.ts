import api from '@/api/api'
import { defineStore } from 'pinia'
import * as toast from '@/composables/toast'

export const ServiceStore = defineStore('ServiceStore', {
    state: () => ({
        isLoading: false as boolean,
        serviceAll: [] as Array<any>,
    }),
    actions: {
        async fetchService() {
            this.isLoading = true
            try {
                const res = await api.get(`/auth/services`)
                this.serviceAll= res.data
            } catch (err) {
            } finally {
                this.isLoading = false
            }
        },
        async addService(payload: any) {
            this.isLoading = true

            const formData = new FormData();

            for (const key in payload) {
                formData.append(key, payload[key]);
            }

            try {
                const res = await api.post(`/auth/services`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });        

                 // @ts-ignore
                toast.success('success', res.message)
            } catch (err) {
            } finally {
                this.isLoading = false
            }
        },
        async updateServcice(serviceId: number, payload: any) {
            this.isLoading = true

            const formData = new FormData();

            for (const key in payload) {
                formData.append(key, payload[key]);
            }

            try {
                const res = await api.post(`/auth/services/${serviceId}`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });        

                 // @ts-ignore
                toast.success('success', res.message)
            } catch (err) {
            } finally {
                this.isLoading = false
            }
        },
        async delete(serviceId: Number) {
            this.isLoading = true

            try {
                const res = await api.delete(`/auth/services/${serviceId}`);        

                 // @ts-ignore
                toast.success('success', res.message)
            } catch (err) {
            } finally {
                this.isLoading = false
            }
        },
    },
})
