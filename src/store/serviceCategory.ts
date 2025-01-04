import api from '@/api/api'
import { defineStore } from 'pinia'
import * as toast from '@/composables/toast'

export const ServiceCategoryStore = defineStore('ServiceCategoryStore', {
    state: () => ({
        isLoading: false as boolean,
        serviceCategoryAll: [] as Array<any>,
    }),
    actions: {
        async fetchServiceCategory(status: number, isCustom: number) {
            this.isLoading = true
            try {
                const res = await api.get(`/auth/services-problem?status=${status}&isCustom=${isCustom}`)
                this.serviceCategoryAll= res.data
            } catch (err) {
            } finally {
                this.isLoading = false
            }
        },
        async addServiceCategory(payload: any) {
            this.isLoading = true

            try {
                const res = await api.post(`/auth/services-problem`, payload);        

                 // @ts-ignore
                toast.success('success', res.message)
            } catch (err) {
            } finally {
                this.isLoading = false
            }
        },
        async updateServiceCategory(serviceCategoryId:number, payload: any) {
            this.isLoading = true
            try {
                const res = await api.post(`/auth/services-problem/${serviceCategoryId}`, payload);        

                 // @ts-ignore
                toast.success('success', res.message)
            } catch (err) {
            } finally {
                this.isLoading = false
            }
        },
        async delete(serviceCategoryId: Number) {
            this.isLoading = true

            try {
                const res = await api.delete(`/auth/services-problem/${serviceCategoryId}`);        

                 // @ts-ignore
                toast.success('success', res.message)
            } catch (err) {
            } finally {
                this.isLoading = false
            }
        },
    },
})
