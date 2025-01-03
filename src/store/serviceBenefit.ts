import api from '@/api/api'
import { defineStore } from 'pinia'
import * as toast from '@/composables/toast'

export const ServiceBenefitStore = defineStore('ServiceBenefitStore', {
    state: () => ({
        isLoading: false as boolean,
        serviceBenefitAll: [] as Array<any>,
    }),
    actions: {
        async fetchServiceBenefit() {
            this.isLoading = true
            try {
                const res = await api.get(`/auth/services-benefit`)
                this.serviceBenefitAll= res.data
            } catch (err) {
            } finally {
                this.isLoading = false
            }
        },
        async addServiceBenefit(payload: any) {
            this.isLoading = true

            try {
                const res = await api.post(`/auth/services-benefit`, payload);        

                 // @ts-ignore
                toast.success('success', res.message)
            } catch (err) {
            } finally {
                this.isLoading = false
            }
        },
        async updateServiceBenefit(serviceBenefitId: number, payload: any) {
            this.isLoading = true
            try {
                const res = await api.post(`/auth/services-benefit/${serviceBenefitId}`, payload);        

                 // @ts-ignore
                toast.success('success', res.message)
            } catch (err) {
            } finally {
                this.isLoading = false
            }
        },
        async delete(serviceBenefitId: Number) {
            this.isLoading = true

            try {
                const res = await api.delete(`/auth/services-benefit/${serviceBenefitId}`);        

                 // @ts-ignore
                toast.success('success', res.message)
            } catch (err) {
            } finally {
                this.isLoading = false
            }
        },
    },
})
