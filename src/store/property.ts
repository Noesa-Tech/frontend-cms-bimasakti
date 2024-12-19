import api from '@/api/api'
import { defineStore } from 'pinia'

export const PropertyStore = defineStore('PropertyStore', {
    state: () => ({
        isLoading: false as boolean,
        properties: {} as Record<any, any>,
    }),
    actions: {

        async fetchProperties(serviceId: number) {
            this.isLoading = true
            try {
                const res = await api.get(`/properties/${serviceId}`)
                this.properties = res.data
                return res
            } catch (err) {
            } finally {
                this.isLoading = false
            }
        },
    },
})


