import api from '@/api/api'
import { defineStore } from 'pinia'
import * as toast from '@/composables/toast'

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
        async updateCity(payload: any, provinceId: any) {
            this.isLoading = true
            try {
                const res = await api.post(`/auth/city/${provinceId}`, payload);

                // @ts-ignore
                return toast.success('success', res.message)
            } catch (err) {
            } finally {
                this.isLoading = false
            }
        },
        async deleteCity(provinceId: Number) {
            this.isLoading = true

            try {
                const res = await api.delete(`/auth/city/${provinceId}`);

                // @ts-ignore
                toast.success('success', res.message)
            } catch (err) {
            } finally {
                this.isLoading = false
            }
        },
        async fetchDistricts(cityId: number | any) {
            this.isLoadingDistrict = true
            try {
                const res = await api.get(cityId ? `/get-subdistrict/${cityId}` : `/auth/subdistrict`)
                this.districts = res.data
            } catch (err) {
            } finally {
                this.isLoadingDistrict = false
            }
        },
        async createDistrict(data: any) {
            this.isLoading = true
            try {
                const res = await api.post(`/auth/subdistrict`, data);

                // @ts-ignore
                return toast.success('success', res.message)
            } catch (err) {
            } finally {
                this.isLoading = false
            }
        },
        async updateDistrict(payload: any, cityId: any) {
            this.isLoading = true
            try {
                const res = await api.post(`/auth/subdistrict/${cityId}`, payload);

                // @ts-ignore
                return toast.success('success', res.message)
            } catch (err) {
            } finally {
                this.isLoading = false
            }
        },
        async deleteDistrict(cityId: Number) {
            this.isLoading = true

            try {
                const res = await api.delete(`/auth/subdistrict/${cityId}`);

                // @ts-ignore
                toast.success('success', res.message)
            } catch (err) {
            } finally {
                this.isLoading = false
            }
        },
        async fetchVillages(districtId: number | any) {
            this.isLoadingVillage = true
            try {
                const res = await api.get(districtId ? `/get-village/${districtId}` : `/auth/village`)
                this.villages = res.data
            } catch (err) {
            } finally {
                this.isLoadingVillage = false
            }
        },
        async createVillage(data: any) {
            this.isLoading = true
            try {
                const res = await api.post(`/auth/village`, data);

                // @ts-ignore
                return toast.success('success', res.message)
            } catch (err) {
            } finally {
                this.isLoading = false
            }
        },
        async updateVillage(payload: any, districtId: any) {
            this.isLoading = true
            try {
                const res = await api.post(`/auth/village/${districtId}`, payload);

                // @ts-ignore
                return toast.success('success', res.message)
            } catch (err) {
            } finally {
                this.isLoading = false
            }
        },
        async deleteVillage(districtId: Number) {
            this.isLoading = true

            try {
                const res = await api.delete(`/auth/village/${districtId}`);

                // @ts-ignore
                toast.success('success', res.message)
            } catch (err) {
            } finally {
                this.isLoading = false
            }
        },
    },
})
