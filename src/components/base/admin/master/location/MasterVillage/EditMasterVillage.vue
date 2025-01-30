<script setup lang="ts">
import Select from 'primevue/select';
import { LocationStore } from '@/store/location'


const props = defineProps({
    village: {
        type: Object as PropType<Record<string, any>>,
        required: true,
    },
});


const emit = defineEmits(["on-close", "on-save"]);

const $location = LocationStore()

async function fetchDistrict() {
    await $location.fetchDistricts(null);
}

const districtList = computed(() =>
    $location.districts.map((district: any) => ({
        id: district.id,
        name: district.nama,
    }))
);

const query = reactive<Record<string, any>>({
    id: props.village.id,
    name: props.village.name,
    zipCode: props.village.zipCode,
    subdistrict : {
        id: props.village.subdistrict.id,
        name: props.village.subdistrict.nama
    }
})

onMounted(async () => {
    await fetchDistrict();
});
async function onSave() {
    const payload = {
        _method: "PATCH",
        nama: query.name,
        id_kecamatan: query.subdistrict.id,
        zip_code: query.zipCode,
    };

    await $location.updateVillage(payload, props.village.id)
    emit('on-save')
}

watch(() => props.village, (newValue) => {
    console.log(newValue)
}, { immediate: true });
</script>

<template>
    <div class="flex flex-col gap-2 mb-4">
        <label for="code">Pilih Kecamatan</label>
        <Select v-model="query.subdistrict" editable showClear :options="districtList" :value="query.subdistrict" optionLabel="name"
            placeholder="Pilih kecamatan" fluid />
    </div>
    <div class="flex flex-col gap-2 mb-4">
        <label for="name">Nama Kelurahan</label>
        <InputText v-model="query.name" id="name" placeholder="Masukkan kelurahan" />
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
