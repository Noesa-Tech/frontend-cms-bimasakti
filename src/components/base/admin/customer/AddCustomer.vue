<script setup lang="ts">
import { UserStore } from '@/store/users'

const emit = defineEmits(["on-close", "on-save"]);

const $user = UserStore()
const query = reactive<any>({
    name: "",
    email: "",
    phone: null,
})

async function onSave() {
    emit('on-save')
}


</script>

<template>
    <div class="flex flex-col gap-2 mb-4">
        <label for="name">Nama Pelanggan</label>
        <InputText v-model="query.name" id="name" aria-describedby="name-help"
            placeholder="Masukkan nama lengkap pelanggan" />
    </div>
    <div class="flex flex-col gap-2 mb-4">
        <label for="email">Nomor Hp Pelanggan</label>
        <InputText v-model="query.email" id="email" aria-describedby="phone-help"
            placeholder="Masukkan email pelanggan" />
    </div>
    <div class="flex flex-col gap-2">
        <label for="phone">Nomor Hp</label>
        <InputGroup>
            <InputGroupAddon>
                +62
            </InputGroupAddon>
            <InputNumber v-model="query.phone" id="phone" inputId="withoutgrouping" :useGrouping="false" fluid
                placeholder="Masukkan no hp pelanggan" />
        </InputGroup>
    </div>
    <div class="flex justify-end gap-2 mt-8">
        <Button type="button" label="Batal" text severity="secondary" @click="emit('on-close')"></Button>
        <Button type="button" label="Simpan" :disabled="$isQueryInvalid(query)" :loading="$user.isLoading" @click="onSave()"></Button>
    </div>
</template>