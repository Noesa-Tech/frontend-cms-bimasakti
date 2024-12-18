import api from '@/api/api'
import { defineStore } from 'pinia'
import * as toast from '@/composables/toast'

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

                // @ts-ignore
                toast.success('success', res.message)
            } catch (err) {
            } finally {
                this.isLoading = false
            }
        },
        async update(vendorId:Number, data:any) {
            this.isLoading = true
            try {
                const res = await api.post(`/auth/vendor/${vendorId}`, data)

                 // @ts-ignore
                 toast.success('success', res.message)
            } catch (err) {
            } finally {
                this.isLoading = false
            }
        },
        async delete(vendorId:Number) {
            this.isLoading = true
            try {
                const res = await api.delete(`/auth/vendor/${vendorId}`)

                 // @ts-ignore
                toast.success('success', res.message)
            } catch (err) {
            } finally {
                this.isLoading = false
            }
        },
    },
})
