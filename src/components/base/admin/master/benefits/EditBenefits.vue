<script setup lang="ts">
import Select from "primevue/select";
import { useToast } from 'primevue/usetoast';
import { VendorStore } from '@/store/vendor'
import { ServiceStore } from '@/store/service'


const toast = useToast();
const props = defineProps({
    benefitsId: {
        type: [Number, null] as PropType<number | null>,
        required: true,
    },
});

const emit = defineEmits(["on-close", "on-save"]);

const $service = ServiceStore()
const $vendor = VendorStore()
const statuses = reactive([0, 1]);


const query = reactive({
    name: "",
    service: null,
    status: null,
})

async function onSave() {
    //   const payload = {
    //     ...query,
    //     _method: "PATCH",
    //     service_id: JSON.stringify(query.service_id),
    //   };

    //   $vendor.update(props.vendorId as number, payload)
    emit('on-save')
}

async function fetchDetailVendor() {
    //   await $vendor.fetchDetail(props.vendorId as number)

    //   query.name = $vendor.detail.name || "";
    //   query.city_id = $vendor.detail.city_id || null;

    //   // @ts-ignore
    //   query.service_id =  $vendor.detail.vendor_service.map(item => item.service_id);
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

const items = computed(() => {
    return $service.serviceAll || [];
});

onMounted(async () => {
    await $service.fetchService()
})


// watch(() => props.vendorId, fetchDetailVendor, { immediate: true });
</script>

<template>
    <div class="flex flex-col gap-2 mb-4">
        <label for="name">Nama Benefit</label>
        <InputText v-model="query.name" id="name" aria-describedby="name-help" placeholder="Nama Benefit" />
    </div>
    <div class="flex flex-col gap-2 mb-4">
        <label for="desc">Layanan</label>
        <Select v-model="query.service" :options="items" placeholder="Pilih Layanan">
            <template #value="slotProps">
                <div v-if="slotProps.value != null" class="flex gap-4 items-center">
                    <img :src="slotProps.value.image_url" alt="" class="h-4">
                    <p class="m-0">{{ slotProps.value.name }}</p>
                </div>
            </template>
            <template #option="slotProps">
                <div class="flex gap-4 items-center">
                    <img :src="slotProps.option.image_url" alt="" class="h-4">
                    <p class="m-0">{{ slotProps.option.name }}</p>
                </div>
            </template>
        </Select>
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
        <Button type="button" label="Simpan" @click="onSave()"></Button>
    </div>
</template>
