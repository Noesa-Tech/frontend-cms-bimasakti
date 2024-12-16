import api from '@/api/api'
import { defineStore } from 'pinia'

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
    },
})
