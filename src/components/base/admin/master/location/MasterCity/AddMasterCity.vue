<script setup lang="ts">
import Select from 'primevue/select';
import { LocationStore } from '@/store/location'


async function fetchProvince() {
    await $location.fetchProvinces();
}

const provinceList = computed(() =>
    $location.provinces.map((province: any) => ({
        id: province.id,
        name: province.nama,
    }))
);
const emit = defineEmits(["on-close", "on-save"]);

const $location = LocationStore()
const query = reactive<any>({
    nama: "",
    selectedProvince: null,
})

async function onSave() {
    const payload = {
        nama: query.nama,
        id_provinsi: query.selectedProvince.id
    }
    await $location.createCity(payload)
    emit('on-save')
}

onMounted(async () => {
    await fetchProvince();
});

</script>

<template>
    <div class="flex flex-col gap-2 mb-4">
        <label for="code">Pilih Provinsi</label>
        <Select v-model="query.selectedProvince" editable showClear :options="provinceList" optionLabel="name"
            placeholder="Pilih provinsi" fluid />
    </div>
    <div class="flex flex-col gap-2">
        <label for="name">Nama Kabupaten/Kota</label>
        <InputText v-model="query.nama" id="name" placeholder="Masukkan nama kabupaten atau kota" />
    </div>

    <div class="flex justify-end gap-2 mt-8">
        <Button type="button" label="Batal" text severity="secondary" @click="emit('on-close')"></Button>
        <Button type="button" label="Simpan" :disabled="$isQueryInvalid(query)" :loading="$location.isLoading"
            @click="onSave()"></Button>
    </div>
</template>