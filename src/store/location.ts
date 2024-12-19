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
        async fetchCities(provinceId: number) {
            this.isLoadingCities = true
            try {
                const res = await api.get(`/get-city/${provinceId}`)
                this.cities = res.data
                return res
            } catch (err) {
            } finally {
                this.isLoadingCities = false
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
