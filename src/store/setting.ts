import api from '@/api/api'
import { defineStore } from 'pinia'
import * as toast from '@/composables/toast'

export const SettingStore = defineStore('SettingStore', {
    state: () => ({
        isLoading: false as boolean,
        setting: [] as Array<any>,
        detail: {} as Record<any, any>,
    }),
    actions: {
        async fetchDetail(settingId: number) {
            this.isLoading = true
            try {
                const res = await api.get(`/auth/setting/${settingId}`)
                this.detail = res.data
                return res
            } catch (err) {
            } finally {
                this.isLoading = false
            }
        },
        async update(payload: any, settingId:number) {
            this.isLoading = true
            try {

                const formData = new FormData();

                for (const key in payload) {
                    formData.append(key, payload[key]);
                }

                const res = await api.post(`/auth/setting/${settingId}`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });

                // @ts-ignore
                return toast.success('success', res.message)
            } catch (err) {
            } finally {
                this.isLoading = false
            }
        },
    },
})


