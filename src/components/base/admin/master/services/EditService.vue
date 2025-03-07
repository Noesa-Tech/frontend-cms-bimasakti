<script setup lang="ts">
import Select from "primevue/select";
import { ServiceStore } from '@/store/service'

const props = defineProps({
    service: {
        type: Object as PropType<Record<string, any>>,
        required: true,
    },
});

const emit = defineEmits(["on-close", "on-save"]);

const $service = ServiceStore()
const statuses = reactive([0, 1]);
const src = ref<any>(null);

const query = reactive<Record<string, any>>({
    name: props.service.name,
    title_page: props.service.title_page,
    description: props.service.description,
    status: props.service.status,
})

async function onSave() {
    const payload = {
        ...query,
        _method: "PATCH",
    };

    await $service.updateServcice(props.service.id as number, payload)
    emit('on-save')
}

function getSeverity(status: number) {
    switch (status) {
        case 0:
            return "danger";
        case 1:
            return "success";
    }
}

function getStatusName(status: number) {
    switch (status) {
        case 0:
            return "Tidak Tersedia";
        case 1:
            return "Tersedia";
    }
}

function onFileSelect(event: any) {
    const file = event.files[0];
    query.image = file

    const reader = new FileReader();

    reader.onload = async (e) => {
        src.value = e.target?.result;
    };

    reader.readAsDataURL(file);
}

watch(
    () => props.service,
    (newValue) => {
        if (newValue?.image_url) {
            src.value = newValue.image_url
        }
    },
    { immediate: true }
)
</script>

<template>
    <div class="flex flex-col items-start gap-2 mb-4">
        <label for="name">Ubah Gambar</label>
        <div class="flex flex-col gap-2 items-start">
            <div v-if="src" class="relative">
                <img :src="src" alt="Image" class="shadow-md rounded-xl w-full sm:w-64" />
                <div class="absolute right-0 top-0">
                    <Button icon="pi pi-times" rounded outlined @click="src = null" />
                </div>
            </div>
            <FileUpload mode="basic" @select="onFileSelect" customUpload severity="secondary" class="p-button-outlined"
                :maxFileSize="1000000" :chooseLabel="src ? 'Ubah Foto' : 'Pilih Foto'" chooseIcon="pi pi-image" />
        </div>
    </div>
    <div class="flex flex-col gap-2 mb-4">
        <label for="name">Nama Layanan</label>
        <InputText v-model="query.name" id="name" aria-describedby="name-help" placeholder="Nama Layanan" />
    </div>
    <div class="flex flex-col gap-2 mb-4">
        <label for="name">Judul Layanan</label>
        <InputText v-model="query.title_page" id="name" aria-describedby="name-help" placeholder="Judul Layanan" />
    </div>
    <div class="flex flex-col gap-2 mb-4">
        <label for="desc">Deskripsi</label>
        <Textarea v-model="query.description" id="desc" aria-describedby="name-help" placeholder="Deskripsi" />
    </div>
    <div class="flex flex-col gap-2">
        <label for="desc">Status</label>
        <Select v-model="query.status" :options="statuses" placeholder="Pilih Status">
            <template #value="slotProps">
                <Tag v-if="slotProps.value != null" :value="getStatusName(slotProps.value)"
                    :severity="getSeverity(slotProps.value)" />
            </template>
            <template #option="slotProps">
                <Tag :value="getStatusName(slotProps.option)" :severity="getSeverity(slotProps.option)" />
            </template>
        </Select>
    </div>

    <div class="flex justify-end gap-2 mt-8">
        <Button type="button" label="Batal" text severity="secondary" @click="emit('on-close')"></Button>
        <Button type="button" label="Simpan" :loading="$service.isLoading" @click="onSave()"></Button>
    </div>
</template>
