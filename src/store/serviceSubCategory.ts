import api from '@/api/api'
import { defineStore } from 'pinia'
import * as toast from '@/composables/toast'

export const ServiceSubCategorytStore = defineStore('ServiceSubCategory', {
    state: () => ({
        isLoading: false as boolean,
        serviceSubCategory: [] as Array<any>,
    }),
    actions: {
        async getServiceSubCategory() {
            this.isLoading = true
            try {
                const res = await api.get(`/auth/services-sub-problem`)
                this.serviceSubCategory= res.data
            } catch (err) {
            } finally {
                this.isLoading = false
            }
        },
        async createServiceSubCategory(payload: any) {
            this.isLoading = true

            try {
                const res = await api.post(`/auth/services-sub-problem`, payload);        

                 // @ts-ignore
                toast.success('success', res.message)
            } catch (err) {
            } finally {
                this.isLoading = false
            }
        },
        async updateServiceSubCategory(serviceSubCategoryId:number, payload: any) {
            this.isLoading = true
            try {
                const res = await api.post(`/auth/services-sub-problem/${serviceSubCategoryId}`, payload);        

                 // @ts-ignore
                toast.success('success', res.message)
            } catch (err) {
            } finally {
                this.isLoading = false
            }
        },
        async delete(serviceSubCategoryId: Number) {
            this.isLoading = true

            try {
                const res = await api.delete(`/auth/services-sub-problem/${serviceSubCategoryId}`);        

                 // @ts-ignore
                toast.success('success', res.message)
            } catch (err) {
            } finally {
                this.isLoading = false
            }
        },
    },
})
