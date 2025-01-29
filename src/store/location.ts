import api from '@/api/api'
import { defineStore } from 'pinia'

export const LocationStore = defineStore('LocationStore', {
    state: () => ({
        isLoading: false as boolean,
        isLoadingProvince: false as boolean,
        isLoadingCities: false as boolean,
        isLoadingDistrict: false as boolean,
        isLoadingVillage: false as boolean,
        city: [] as Array<any>,
        provinces: [] as any[],
        cities: [] as any[],
        districts: [] as any[],
        villages: [] as any[],
    }),
    actions: {
        async fetchCity(provinceId: number) {
            this.isLoading = true
            try {
                const res = await api.get(`/get-city/${provinceId}`)
                this.city = res.data
            } catch (err) {
            } finally {
                this.isLoading = false
            }
        },
        async fetchProvinces() {
            this.isLoadingProvince = true
            try {
                const res = await api.get('/get-province')
                this.provinces = res.data
            } catch (err) {
            } finally {
                this.isLoadingProvince = false
            }
        },
        async createProvince(data: any) {
            this.isLoading = true
            try {
                const res = await api.post(`/auth/province`, data);

                // @ts-ignore
                return toast.success('success', res.message)
            } catch (err) {
            } finally {
                this.isLoading = false
            }
        },
        async updateProvince(payload: any, provinceId: any) {
            this.isLoading = true
            try {
                const res = await api.post(`/auth/province/${provinceId}`, payload);

                // @ts-ignore
                return toast.success('success', res.message)
            } catch (err) {
            } finally {
                this.isLoading = false
            }
        },
        async deleteProvince(provinceId: Number) {
            this.isLoading = true

            try {
                const res = await api.delete(`/auth/province/${provinceId}`);

                // @ts-ignore
                toast.success('success', res.message)
            } catch (err) {
            } finally {
                this.isLoading = false
            }
        },
        async fetchCities(provinceId: number | any) {
            this.isLoadingCities = true
            try {
                const res = await api.get(provinceId ? `/get-city/${provinceId}` : `/auth/city`)
                this.cities = res.data
                return res
            } catch (err) {
            } finally {
                this.isLoadingCities = false
            }
        },
        async createCity(data: any) {
            this.isLoading = true
            try {
                const res = await api.post(`/auth/city`, data);

                // @ts-ignore
                return toast.success('success', res.message)
            } catch (err) {
            } finally {
                this.isLoading = false
            }
        },
        async updateCity(payload: any, cityId: any) {
            this.isLoading = true
            try {
                const res = await api.post(`/auth/city/${cityId}`, payload);

                // @ts-ignore
                return toast.success('success', res.message)
            } catch (err) {
            } finally {
                this.isLoading = false
            }
        },
        async deleteCity(cityId: Number) {
            this.isLoading = true

            try {
                const res = await api.delete(`/auth/city/${cityId}`);

                // @ts-ignore
                toast.success('success', res.message)
            } catch (err) {
            } finally {
                this.isLoading = false
            }
        },
        async fetchDistricts(cityId: number) {
            this.isLoadingDistrict = true
            try {
                const res = await api.get(`/get-subdistrict/${cityId}`)
                this.districts = res.data
            } catch (err) {
            } finally {
                this.isLoadingDistrict = false
            }
        },
        async fetchVillages(districtId: number) {
            this.isLoadingVillage = true
            try {
                const res = await api.get(`/get-village/${districtId}`)
                this.villages = res.data
            } catch (err) {
            } finally {
                this.isLoadingVillage = false
            }
        },
    },
})
