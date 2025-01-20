<script setup lang="ts">
import Select from "primevue/select";
import { LocationStore } from '@/store/location'
const $location = LocationStore()
const emit = defineEmits(["on-close", "on-save"]);
const query = reactive<any>({
    name: "",
    email: "",
    phone: null,
    selectedProvince: {},
    selectedCity: {},
    password: "",
})

const provinceList = computed(() =>
    $location.provinces.map((province: any) => ({
        id: province.id,
        name: province.nama,
    }))
);

const cityList = computed(() =>
    $location.cities.map((city: any) => ({
        id: city.id,
        name: city.nama,
    }))
);

async function fetchCity(e: any) {
    await $location.fetchCities(e.value.id)
}

onMounted(async () => {
    await $location.fetchProvinces();
});

async function onSave() {
    emit('on-save')
}
</script>

<template>
    <div class="flex flex-col gap-2 mb-4">
        <label for="name">Nama Admin</label>
        <InputText v-model="query.name" id="name" aria-describedby="name-help"
            placeholder="Masukkan nama lengkap admin" />
    </div>
    <div class="flex flex-col gap-2 mb-4">
        <label for="email">Nomor Hp Admin</label>
        <InputText v-model="query.email" id="email" aria-describedby="phone-help" placeholder="Masukkan email admin" />
    </div>
    <div class="flex flex-col gap-2 mb-4">
        <label for="phone">Nomor Hp</label>
        <InputGroup>
            <InputGroupAddon>
                +62
            </InputGroupAddon>
            <InputNumber v-model="query.phone" id="phone" inputId="withoutgrouping" :useGrouping="false" fluid
                placeholder="Masukkan no hp admin" />
        </InputGroup>
    </div>
    <div class="mb-4 flex flex-col gap-2">
        <label for="prov">Provinsi</label>
        <Select inputId="prov" v-model="query.selectedProvince" :loading="$location.isLoadingProvince"
            @change="fetchCity($event)" :disabled="provinceList.length < 1" :options="provinceList" filter
            optionLabel="name" fluid placeholder="Pilih provinsi">
        </Select>
    </div>
    <div class="mb-4 flex flex-col gap-2">
        <label for="city">Kota/Kabupaten</label>
        <Select inputId="city" v-model="query.selectedCity" :loading="$location.isLoadingCities"
            @change="fetchSubDistrict($event)" :disabled="cityList.length < 1" :options="cityList" filter
            optionLabel="name" fluid placeholder="Pilih kabupaten/kota">
        </Select>
    </div>
    <div class="mb-4 flex flex-col gap-2">
        <label for="city">Kata Sandi</label>
        <Password v-model="query.password" fluid toggleMask promptLabel="Masukkan Password" weakLabel="Kurang Kuat"
            mediumLabel="Cukup Kuat" strongLabel="Sangat kuat" />
    </div>
    <div class="flex justify-end gap-2 mt-8">
        <Button type="button" label="Batal" text severity="secondary" @click="emit('on-close')"></Button>
        <Button type="button" label="Simpan" @click="onSave()"></Button>
    </div>
</template>