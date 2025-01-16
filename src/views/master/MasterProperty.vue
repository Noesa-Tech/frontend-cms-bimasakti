<script setup lang="ts">
import { useConfirm } from "primevue/useconfirm";
import { useToast } from "primevue/usetoast";
import ConfirmPopup from "primevue/confirmpopup";
import { PropertyStore } from '@/store/property'
import { SettingStore } from '@/store/setting';

interface Property {
    id: number;
    name: string;
    fee: string;
    icon_url?: string;
}

const confirm = useConfirm();
const toast = useToast();
const $property = PropertyStore()
const $setting = SettingStore()

const visibleEdit = ref<boolean>(false);
const visibleAdd = ref<boolean>(false);

const searchText = ref<string>('');
const filteredProperties = ref<Property[]>([]);
const selectedRow = ref<any>(null);
const priceLadder = ref<any>(0);

const confirmDelete = (e: any) => {
    confirm.require({
        target: e.currentTarget,
        message: "Yakin ingin menghapus properti ini?",
        icon: "pi pi-info-circle",
        rejectProps: {
            label: "Batal",
            severity: "secondary",
            outlined: true,
        },
        acceptProps: {
            label: "Yakin",
            severity: "danger",
        },
        accept: async () => {
            await $property.delete(e)
            await fetchProperty()
        },
    });
};

async function fetchProperty() {
    await $property.fetchProperties()
    filteredProperties.value = $property.properties
}

async function fetchSettingLadder() {
    const res = await $setting.fetchDetail(1)
    priceLadder.value = parseInt(res.data.value)
}

async function updateSetting(closeCallback: any) {
    const payload = {
        _method: "PATCH",
        value: priceLadder.value
    };

    await $setting.update(payload, 1)
    closeCallback();
    await fetchSettingLadder()
}

onMounted(async () => {
    await fetchSettingLadder()
    await fetchProperty()
});

watch(() => searchText.value, (newValue) => {
    filteredProperties.value = $property.properties.filter(item => item.name.toLowerCase().includes(newValue.toLowerCase()));
}, { immediate: true });

</script>
<template>
    <TopBreadcrumb :breadcrumbItems="[{ label: 'Properti' }]" />

    <div class="card mt-8">
        <div class="flex flex-col">
            <label for="price-ladder" class=" font-semibold">Harga Tangga</label>
            <Inplace>
                <template #display>
                    <p class="m-0">Rp{{ formatPrice(priceLadder) }}<i class="pi pi-pencil ml-2"></i> </p>
                </template>
                <template #content="{ closeCallback }">
                    <span class="inline-flex items-center gap-2 w-full mt-1">
                        <InputNumber v-model="priceLadder" type="text" placeholder="Cari Harga"
                            inputId="currency-indonesia" mode="currency" currency="IDR" locale="id-ID"
                            :minFractionDigits="0" />
                        <Button :loading="$setting.isLoading" icon="pi pi-check" label="Simpan" severity="success"
                            @click="updateSetting(closeCallback)" />
                    </span>
                </template>
            </Inplace>
        </div>
    </div>
    <div class="card mt-8">
        <div class="flex flex-col md:flex-row items-center justify-between gap-4 mb-4">
            <h5 class="m-0">Data Properti</h5>
            <div class="flex flex-col md:flex-row items-center gap-4 md:order-2 order-1">
                <Button type="button" icon="pi pi-plus" label="Tambah Properti"
                    class="md:order-1 order-2 w-full md:w-auto" @click="visibleAdd = true" />
                <IconField class="w-full md:w-auto">
                    <InputIcon>
                        <i class="pi pi-search" />
                    </InputIcon>
                    <InputText v-model="searchText" placeholder="Pencarian" fluid />
                </IconField>
            </div>
        </div>
        <div class="grid grid-cols-12 gap-4">
            <div v-for="(item, index) in filteredProperties" :key="index"
                class=" md:col-span-3 sm:col-span-4 col-span-6 border border-surface-200 dark:border-surface-700 rounded p-4">
                <div class="mb-4">
                    <img :src="item?.icon_url" :alt="item?.name" class="h-32 w-auto mx-auto" />
                </div>
                <div class="mt-0 font-semibold text-xl">{{ item?.name }}</div>
                <div class="mt-0">Rp{{ formatPrice(item?.fee) }}</div>
                <div class="flex items-center justify-end">
                    <span>
                        <Button icon="pi pi-pencil" severity="info" outlined v-tooltip.bottom="'Ubah'"
                            @click="selectedRow = item, visibleEdit = true" />
                        <Button icon="pi pi-trash" :loading="$property.isLoading" severity="danger" class="ml-2"
                            v-tooltip.bottom="'Hapus'" @click="confirmDelete(item.id)" />
                    </span>
                </div>
            </div>
        </div>
    </div>
    <ConfirmPopup></ConfirmPopup>
    <Dialog v-model:visible="visibleAdd" maximizable modal header="Tambah Properti" class=" sm:w-1/2 w-full ">
        <AddProperty @on-close="visibleAdd = false" @on-save="visibleAdd = false, fetchProperty()" />
    </Dialog>

    <Dialog v-model:visible="visibleEdit" maximizable modal header="Ubah Property" class=" sm:w-1/2 w-full">
        <EditProperty :property="selectedRow" @on-close="visibleEdit = false"
            @on-save="visibleEdit = false, fetchProperty()" />
    </Dialog>
</template>