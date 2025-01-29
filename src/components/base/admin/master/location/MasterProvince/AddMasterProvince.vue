<script setup lang="ts">
import { LocationStore } from '@/store/location'

const emit = defineEmits(["on-close", "on-save"]);

const $location = LocationStore()
const query = reactive<any>({
    nama: "",
    kode: "",
    ibukota: "",
})

async function onSave() {
    await $location.createProvince(query)
    emit('on-save')
}
</script>

<template>
    <div class="flex flex-col gap-2 mb-4">
        <label for="name">Nama Provinsi</label>
        <InputText v-model="query.nama" id="name" placeholder="Masukkan nama provinsi" />
    </div>
    <div class="flex flex-col gap-2 mb-4">
        <label for="code">Kode</label>
        <InputText v-model="query.kode" id="code" placeholder="Masukkan kode provinsi" />
    </div>
    <div class="flex flex-col gap-2 ">
        <label for="capitals">Ibu Kota</label>
        <InputText v-model="query.ibukota" id="capitals" placeholder="Masukkan ibu kota" />
    </div>

    <div class="flex justify-end gap-2 mt-8">
        <Button type="button" label="Batal" text severity="secondary" @click="emit('on-close')"></Button>
        <Button type="button" label="Simpan" :disabled="$isQueryInvalid(query)" :loading="$location.isLoading"
            @click="onSave()"></Button>
    </div>
</template>