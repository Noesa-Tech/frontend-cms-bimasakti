import api from '@/api/api'
import { defineStore } from 'pinia'
import piniaPersist from 'pinia-plugin-persistedstate'

interface Login {
    email: string,
    password: string
}

export const AuthStore = defineStore('AuthStore', {
    state: () => ({
        items: [] as Array<any>,
        isLoading: false as boolean,
        users: {} as Record<string, any>,
        isAuthenticated : false as boolean
    }),
    actions: {
        async login(data: Login) {
            this.isLoading = true
            try {
                const res = await api.post('/auth/login', data)
                this.users = res.data.user
                this.isAuthenticated = true
            } catch (err) {
            } finally {
                this.isLoading = false
            }
        },
    },
    persist: {
        paths: ['users', 'isAuthenticated'],
    },
})
