import api from '@/api/api'
import { defineStore } from 'pinia'

export const VendorStore = defineStore('VendorStore', {
    state: () => ({
        isLoading: false as boolean,
        vendors: [] as Array<any>,
        detail:  null as any | null,
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
        async fetchDetail(vendorId: Number) {
            this.isLoading = true
            try {
                const res = await api.get(`/auth/vendor/${vendorId}`)
                this.detail = res.data
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
        async update(vendorId:Number, data:any) {
            this.isLoading = true
            try {
                await api.post(`/auth/vendor/${vendorId}`, data)
            } catch (err) {
            } finally {
                this.isLoading = false
            }
        },
    },
})
