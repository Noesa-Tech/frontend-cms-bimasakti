<script setup lang="ts">
import { PropertyStore } from '@/store/property'

const emit = defineEmits(["on-close", "on-save"]);

const $property = PropertyStore()

const src = ref<string>("");
const query = reactive({
    icon: '',
    name: '',
    fee : ''
})

async function onSave() {
    await $property.addProperty(query)
    emit('on-save')
}

function onFileSelect(event: any) {
    const file = event.files[0];
    query.icon = file
    const reader = new FileReader();
    reader.onload = async (e) => {
        if (typeof e.target?.result === "string") {
            src.value = e.target.result;
        }
    };
    reader.readAsDataURL(file);
}

</script>

<template>
    <div class="flex flex-col items-start gap-2 mb-4">
        <label for="name">Tambah Gambar</label>
        <div class="flex flex-col gap-2 items-start">
            <div v-if="src" class="relative">
                <img :src="src" alt="Image" class="shadow-md rounded-xl w-full sm:w-64" />
                <div class="absolute right-0 top-0">
                    <Button icon="pi pi-times" rounded outlined @click="src = ''" />
                </div>
            </div>
            <FileUpload mode="basic" @select="onFileSelect" customUpload severity="secondary" class="p-button-outlined"
                :maxFileSize="2000000" :chooseLabel="src ? 'Ubah Foto' : 'Pilih Foto'" chooseIcon="pi pi-image" />
        </div>
    </div>
    <div class="flex flex-col gap-2 mb-4">
        <label for="name">Nama Properti</label>
        <InputText v-model="query.name" id="name-add-properties" aria-describedby="name-help" placeholder="Nama Properti" />
    </div>
    <div class="flex flex-col gap-2 mb-4">
        <label for="name">Fee</label>
        <InputText v-model="query.fee" id="fee-add-properties" aria-describedby="name-help" placeholder="Fee Properti" />
    </div>

    <div class="flex justify-end gap-2 mt-8">
        <Button type="button" label="Batal" text severity="secondary" @click="emit('on-close')"></Button>
        <Button type="button" :loading="$property.isLoading" :disabled="$isQueryInvalid(query)" label="Simpan" @click="onSave()"></Button>
    </div>
</template>
