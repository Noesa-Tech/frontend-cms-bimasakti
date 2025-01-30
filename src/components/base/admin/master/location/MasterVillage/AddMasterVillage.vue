<script setup lang="ts">
import Select from 'primevue/select';
import { LocationStore } from '@/store/location'


async function fetchDistrict() {
    await $location.fetchDistricts(null);
}

const districtList = computed(() =>
    $location.districts.map((district: any) => ({
        id: district.id,
        name: district.nama,
    }))
);

const emit = defineEmits(["on-close", "on-save"]);

const $location = LocationStore()
const query = reactive<any>({
    nama: "",
    selectedDistrict: null,
    zipCode: "",
})

async function onSave() {
    const payload = {
        nama: query.nama,
        id_kecamatan: query.selectedDistrict.id,
        zip_code: query.zipCode,
    }
    await $location.createVillage(payload)
    emit('on-save')
}

onMounted(async () => {
    await fetchDistrict();
});

</script>

<template>
    <div class="flex flex-col gap-2 mb-4">
        <label for="code">Pilih Kecamatan</label>
        <Select v-model="query.selectedDistrict" editable showClear :options="districtList" optionLabel="name"
            placeholder="Pilih kecamatan" fluid />
    </div>
    <div class="flex flex-col gap-2 mb-4">
        <label for="name">Nama Kelurahan</label>
        <InputText v-model="query.nama" id="name" placeholder="Masukkan kelurahan" />
    </div>
    <div class="flex flex-col gap-2">
        <label for="name">Kode Pos</label>
        <InputText v-model="query.zipCode" v-only-numeric id="name" placeholder="Masukkan kode pos" />
    </div>

    <div class="flex justify-end gap-2 mt-8">
        <Button type="button" label="Batal" text severity="secondary" @click="emit('on-close')"></Button>
        <Button type="button" label="Simpan" :disabled="$isQueryInvalid(query)" :loading="$location.isLoading"
            @click="onSave()"></Button>
    </div>
</template>