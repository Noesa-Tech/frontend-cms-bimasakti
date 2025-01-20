import api from '@/api/api'
import { defineStore } from 'pinia'
import * as toast from '@/composables/toast'

export const UserStore = defineStore('UserStore', {
    state: () => ({
        isLoading: false as boolean,
        users: [] as Array<any>,
        detail: {} as Record<any, any>,
    }),
    actions: {
        async getAll(roleId: any = "") {
            this.isLoading = true
            try {
                const res = await api.get(`/auth/users?role_id=${roleId}`)
                this.users = res.data
                return res
            } catch (err) {
            } finally {
                this.isLoading = false
            }
        },
        async create(data: any) {
            this.isLoading = true
            try {
                const res = await api.post(`/auth/users`, data);

                // @ts-ignore
                return toast.success('success', res.message)
            } catch (err) {
            } finally {
                this.isLoading = false
            }
        },
        async update(payload: any, userId:any) {
            this.isLoading = true
            try {
                const res = await api.post(`/auth/users/${userId}`, payload);

                // @ts-ignore
                return toast.success('success', res.message)
            } catch (err) {
            } finally {
                this.isLoading = false
            }
        },
        async delete(userId: Number) {
            this.isLoading = true

            try {
                const res = await api.delete(`/auth/users/${userId}`);

                // @ts-ignore
                toast.success('success', res.message)
            } catch (err) {
            } finally {
                this.isLoading = false
            }
        },
    },
})


