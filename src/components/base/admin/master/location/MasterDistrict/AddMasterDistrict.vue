<script setup lang="ts">
import Select from 'primevue/select';
import { LocationStore } from '@/store/location'


async function fetchCity() {
    await $location.fetchCities(null);
}

const cityList = computed(() =>
    $location.cities.map((city: any) => ({
        id: city.id,
        name: city.nama,
    }))
);
const emit = defineEmits(["on-close", "on-save"]);

const $location = LocationStore()
const query = reactive<any>({
    nama: "",
    selectedCity: null,
})

async function onSave() {
    const payload = {
        nama: query.nama,
        id_kota: query.selectedCity.id
    }
    await $location.createDistrict(payload)
    emit('on-save')
}

onMounted(async () => {
    await fetchCity();
});

</script>

<template>
    <div class="flex flex-col gap-2 mb-4">
        <label for="code">Pilih Kota</label>
        <Select v-model="query.selectedCity" editable showClear :options="cityList" optionLabel="name"
            placeholder="Pilih kota" fluid />
    </div>
    <div class="flex flex-col gap-2">
        <label for="name">Nama Kecamatan</label>
        <InputText v-model="query.nama" id="name" placeholder="Masukkan nama kecamatan" />
    </div>

    <div class="flex justify-end gap-2 mt-8">
        <Button type="button" label="Batal" text severity="secondary" @click="emit('on-close')"></Button>
        <Button type="button" label="Simpan" :disabled="$isQueryInvalid(query)" :loading="$location.isLoading"
            @click="onSave()"></Button>
    </div>
</template>