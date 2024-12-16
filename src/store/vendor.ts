import api from '@/api/api'
import { defineStore } from 'pinia'

export const VendorStore = defineStore('VendorStore', {
    state: () => ({
        isLoading: false as boolean,
        vendors: [] as Array<any>,
    }),
    actions: {
        async fetchVendor() {
            this.isLoading = true
            try {
                const res = await api.get('/auth/vendor')
                this.vendors = res.data
            } catch (err) {
            } finally {
                this.isLoading = false
            }
        },
        async addVendor(data:any) {
            this.isLoading = true
            try {
                const res = await api.post('/auth/vendor', data)
            } catch (err) {
            } finally {
                this.isLoading = false
            }
        },
    },
})
