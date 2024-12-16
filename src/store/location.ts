import api from '@/api/api'
import { defineStore } from 'pinia'

export const LocationStore = defineStore('LocationStore', {
    state: () => ({
        isLoading: false as boolean,
        city: [] as Array<any>,
    }),
    actions: {
        async fetchCity(provinceId : number) {
            this.isLoading = true
            try {
                const res = await api.get(`/get-city/${provinceId}`)
                this.city= res.data
            } catch (err) {
            } finally {
                this.isLoading = false
            }
        },
    },
})
