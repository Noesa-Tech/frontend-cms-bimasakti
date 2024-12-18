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
        async fetchOrder() {
            this.isLoading = true
            try {
                const res = await api.get('/auth/orders')
                this.allOrder = res.data
            } catch (err) {
            } finally {
                this.isLoading = false
            }
        },
    },
})
