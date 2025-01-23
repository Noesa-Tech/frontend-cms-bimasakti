import api from '@/api/api'
import { defineStore } from 'pinia'
import * as toast from '@/composables/toast'

export const OrderStore = defineStore('OrderStore', {
    state: () => ({
        isLoading: false as boolean,
        allOrder: [] as Array<any>,
        detail:  null as any | null,
    }),
    actions: {
        async fetchOrder(status : string) {
            this.isLoading = true
            try {
                const res = await api.get(`/auth/orders?status=${status}`)
                this.allOrder = res.data
            } catch (err) {
            } finally {
                this.isLoading = false
            }
        },
        async detailOrder(orderId : string) {
            this.isLoading = true
            try {
                const res = await api.get(`/auth/orders/${orderId}`)
                this.detail = res.data
            } catch (err) {
            } finally {
                this.isLoading = false
            }
        },
        async acceptOrder(vendorId : Number, OrderId: Number) {
            this.isLoading = true
            try {
                const res = await api.post('/auth/order/confirmation', {
                    vendor_id: vendorId,
                    order_id: OrderId
                })

                 // @ts-ignore
                toast.success('success', res.message)
            } catch (err) {
            } finally {
                this.isLoading = false
            }
        },
        async rejectOrder(vendorId : Number, OrderId: Number, reason : String) {
            this.isLoading = true
            try {
                const res = await api.post('/auth/order/reject', {
                    vendor_id: vendorId,
                    order_id: OrderId,
                    reason: reason
                })

                 // @ts-ignore
                toast.success('success', res.message)
            } catch (err) {
            } finally {
                this.isLoading = false
            }
        },
        async createOrder(data:any) {
            this.isLoading = true
            try {
                const res = await api.post('/order', data)
                return res
            } catch (err) {
            } finally {
                this.isLoading = false
            }
        },
        async updateOrder(data:any, orderId:number) {
            this.isLoading = true
            try {
                const res = await api.post(`/auth/orders/${orderId}`, data)
                return res
            } catch (err) {
            } finally {
                this.isLoading = false
            }
        },
    },
})
