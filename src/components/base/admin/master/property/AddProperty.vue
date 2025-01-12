<script setup lang="ts">

const src = ref<string>("");

const emit = defineEmits(["on-close", "on-save"]);

const query = reactive({
    image: '',
    name: '',
})

async function onSave() {
    const payload = {
        ...query,
        _method: "PATCH",
        property_id: query?.id,
    };

    emit('on-save')
}

function onFileSelect(event: any) {
    const file = event.files[0];
    query.image = file
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
        <InputText v-model="query.name" id="name" aria-describedby="name-help" placeholder="Nama Properti" />
    </div>

    <div class="flex justify-end gap-2 mt-8">
        <Button type="button" label="Batal" text severity="secondary" @click="emit('on-close')"></Button>
        <Button type="button" label="Simpan" @click="onSave()"></Button>
    </div>
</template>
