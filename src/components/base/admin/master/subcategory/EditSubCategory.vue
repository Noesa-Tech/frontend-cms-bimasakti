<script setup lang="ts">
import Select from "primevue/select";
import { useToast } from 'primevue/usetoast';
import { VendorStore } from '@/store/vendor'
import { ServiceStore } from '@/store/service'
import { CategoryService } from "@/service/CategoryService";

const toast = useToast();
const props = defineProps({
    categoryId: {
        type: [Number, null] as PropType<number | null>,
        required: true,
    },
});

const emit = defineEmits(["on-close", "on-save"]);

const statuses = reactive([0, 1]);
const categoryData = ref([]);

const query = reactive({
    name: "",
    price: 0,
    category: null,
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

onMounted(async () => {
    CategoryService.getCategory().then((data: any) => {
        categoryData.value = data;
    });
})


// watch(() => props.vendorId, fetchDetailVendor, { immediate: true });
</script>

<template>
    <div class="flex flex-col gap-2 mb-4">
        <label for="name">Nama Sub Kategori</label>
        <InputText v-model="query.name" id="name" aria-describedby="name-help" placeholder="Nama Sub Kategori" />
    </div>
    <div class="flex flex-col gap-2 mb-4">
        <label for="desc">Kategori</label>
        <Select v-model="query.category" :options="categoryData" placeholder="Pilih Layanan">
            <template #value="slotProps">
                <div v-if="slotProps.value != null" class="flex gap-4 items-center ">
                    <img :alt="slotProps.value.service.name" :src="slotProps.value.service.image_url"
                        class=" align-middle w-10" />
                    <div>
                        <h6 class="m-0">{{ slotProps.value.name }}</h6>
                        <p class="m-0 text-muted-color text-sm">{{ slotProps.value.service.name }}</p>
                    </div>
                </div>

            </template>
            <template #option="slotProps">
                <div class="flex gap-4 items-center ">
                    <img :alt="slotProps.option.service.name" :src="slotProps.option.service.image_url"
                        class=" align-middle w-10" />
                    <div>
                        <h6 class="m-0">{{ slotProps.option.name }}</h6>
                        <p class="m-0 text-muted-color text-sm">{{ slotProps.option.service.name }}</p>
                    </div>
                </div>
            </template>
        </Select>
    </div>
    <div class="flex flex-col gap-2 mb-4">
        <label for="name">Harga</label>
        <InputNumber v-model="query.price" type="text" placeholder="Harga" inputId="currency-indonesia" mode="currency"
            currency="IDR" locale="id-ID" :minFractionDigits="0" />
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
