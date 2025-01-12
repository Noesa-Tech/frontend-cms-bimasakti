<script setup lang="ts">
import { ProperyService } from '@/service/PropertyService';
import logo from '@/assets/images/logo/logo.png'
import { useConfirm } from "primevue/useconfirm";
import { useToast } from "primevue/usetoast";
import ConfirmPopup from "primevue/confirmpopup";

const properties = ref<any>(null);
const confirm = useConfirm();
const toast = useToast();
const visibleEdit = ref<boolean>(false);
const visibleAdd = ref<boolean>(false);
const searchText = ref('');
const priceLadder = ref<any>(50000);

const confirmDelete = (event: any) => {
    confirm.require({
        target: event.currentTarget,
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
        accept: () => {
            toast.add({ severity: "info", summary: "Confirmed", detail: "Properti Dihapus", life: 3000 });
        },
    });
};

onMounted(() => {
    ProperyService.getProperties().then((data) => (properties.value = data));
});
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
                        <Button icon="pi pi-check" label="Simpan" severity="success" @click="closeCallback" />
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
            <div v-for="(item, index) in properties" :key="index"
                class=" md:col-span-3 sm:col-span-4 col-span-6 border border-surface-200 dark:border-surface-700 rounded p-4">
                <div class="mb-4">
                    <img :src="logo" :alt="item.name" class=" mx-auto" />
                </div>
                <div class="mt-0 font-semibold text-xl">{{ item.name }}</div>
                <div class="flex items-center justify-end">
                    <span>
                        <Button icon="pi pi-pencil" severity="info" outlined v-tooltip.bottom="'Ubah'"
                            @click="visibleEdit = true" />
                        <Button icon="pi pi-trash" severity="danger" class="ml-2" v-tooltip.bottom="'Hapus'"
                            @click="confirmDelete($event)" />
                    </span>
                </div>
            </div>
        </div>
    </div>
    <ConfirmPopup></ConfirmPopup>
    <Dialog v-model:visible="visibleAdd" maximizable modal header="Tambah Properti" class=" sm:w-1/2 w-full ">
        <AddProperty @on-close="visibleAdd = false" @on-save="visibleAdd = false" />
    </Dialog>
    <Dialog v-model:visible="visibleEdit" maximizable modal header="Ubah Property" class=" sm:w-1/2 w-full">
        <EditProperty id:1, @on-close="visibleEdit = false" @on-save="visibleEdit = false" />
    </Dialog>
</template>