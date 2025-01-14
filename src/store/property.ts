import api from '@/api/api'
import { defineStore } from 'pinia'
import * as toast from '@/composables/toast'

export const PropertyStore = defineStore('PropertyStore', {
    state: () => ({
        isLoading: false as boolean,
        properties: [] as Array<any>,
        // properties: {} as Record<any, any>,
    }),
    actions: {

        async fetchProperties() {
            this.isLoading = true
            try {
                const res = await api.get(`/auth/properties`)
                this.properties = res.data
                return res
            } catch (err) {
            } finally {
                this.isLoading = false
            }
        },
        async addProperty(data: any) {
            this.isLoading = true
            try {

                const formData = new FormData();

                for (const key in data) {
                    formData.append(key, data[key]);
                }


                const res = await api.post(`/auth/properties`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });

                // @ts-ignore
                return toast.success('success', res.message)
            } catch (err) {
            } finally {
                this.isLoading = false
            }
        },
        async updateProperty(data: any) {
            this.isLoading = true
            try {

                const formData = new FormData();

                for (const key in data) {
                    formData.append(key, data[key]);
                }


                const res = await api.post(`/auth/properties/${data.propertyId}`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });

                // @ts-ignore
                return toast.success('success', res.message)
            } catch (err) {
            } finally {
                this.isLoading = false
            }
        },
        async delete(propertId: Number) {
            this.isLoading = true

            try {
                const res = await api.delete(`/auth/properties/${propertId}`);

                // @ts-ignore
                toast.success('success', res.message)
            } catch (err) {
            } finally {
                this.isLoading = false
            }
        },
    },
})


