<script setup lang="ts">
import Select from 'primevue/select';
import { LocationStore } from '@/store/location'


const props = defineProps({
    city: {
        type: Object as PropType<Record<string, any>>,
        required: true,
    },
});

const emit = defineEmits(["on-close", "on-save"]);
const $location = LocationStore()

async function fetchProvince() {
    await $location.fetchProvinces();
}

const provinceList = computed(() =>
    $location.provinces.map((province: any) => ({
        id: province.id,
        name: province.nama,
    }))
);

const query = reactive<Record<string, any>>({
    name: props.city.name,
    province: {
        id: props.city.province.id,
        name: props.city.province.nama,
    }
})

async function onSave() {
    const payload = {
        _method: "PATCH",
        nama: query.name,
        id_provinsi: query.province.id
    };

    await $location.updateCity(payload, props.city.id)
    emit('on-save')
}
</script>

<template>
    <div class="flex flex-col gap-2 mb-4">
        <label for="code">Pilih Provinsi</label>
        <Select v-model="query.province" editable showClear :options="provinceList" :value="query.province"   optionLabel="name" 
            placeholder="Pilih provinsi" fluid />
    </div>
    <div class="flex flex-col gap-2">
        <label for="name">Nama Kabupaten/Kota</label>
        <InputText v-model="query.name" id="name" placeholder="Masukkan nama kabupaten atau kota" />
    </div>
    <div class="flex justify-end gap-2 mt-8">
        <Button type="button" label="Batal" text severity="secondary" @click="emit('on-close')"></Button>
        <Button type="button" label="Simpan" :disabled="$isQueryInvalid(query)" :loading="$location.isLoading"
            @click="onSave()"></Button>
    </div>
</template>
