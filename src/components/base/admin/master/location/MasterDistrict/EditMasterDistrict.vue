<script setup lang="ts">
import Select from 'primevue/select';
import { LocationStore } from '@/store/location'


const props = defineProps({
    district: {
        type: Object as PropType<Record<string, any>>,
        required: true,
    },
});


const emit = defineEmits(["on-close", "on-save"]);

const $location = LocationStore()

async function fetchCity() {
    await $location.fetchCities(null);
}

const cityList = computed(() =>
    $location.cities.map((city: any) => ({
        id: city.id,
        name: city.nama,
    }))
);

const query = reactive<Record<string, any>>({
    name: props.district.name,
    city: {
        id: props.district.city.id,
        name: props.district.city.nama,
    },
})

async function onSave() {
    const payload = {
        _method: "PATCH",
        nama: query.name,
        id_provinsi: query.city.id
    };

    await $location.updateDistrict(payload, props.district.id)
    emit('on-save')
}
</script>

<template>
    <div class="flex flex-col gap-2 mb-4">
        <label for="code">Pilih Kota</label>
        <Select v-model="query.city" editable showClear :options="cityList" :value="query.city" optionLabel="name"
            placeholder="Pilih kota" fluid />
    </div>
    <div class="flex flex-col gap-2">
        <label for="name">Nama Kecamantan</label>
        <InputText v-model="query.name" id="name" placeholder="Masukkan nama kecamatan" />
    </div>
    <div class="flex justify-end gap-2 mt-8">
        <Button type="button" label="Batal" text severity="secondary" @click="emit('on-close')"></Button>
        <Button type="button" label="Simpan" :disabled="$isQueryInvalid(query)" :loading="$location.isLoading"
            @click="onSave()"></Button>
    </div>
</template>
