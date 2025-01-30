<script setup lang="ts">
import { LocationStore } from '@/store/location'
import { useConfirm } from "primevue/useconfirm";
import ConfirmPopup from "primevue/confirmpopup";
import { FilterMatchMode, FilterOperator } from "@primevue/core/api";
import Select from 'primevue/select';

const $location = LocationStore()
const confirm = useConfirm();
const dt = ref();

interface City {
    id: number;
    name: string;
}

const filters = ref<any>({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    name: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
});

const visibleEdit = ref<boolean>(false);
const visibleAdd = ref<boolean>(false);
const isLoading = ref<boolean>(false);
const selectedRow = ref<any>(null)
const selectedCity = ref<City | null | undefined>(null);


async function fetchCity() {
    await $location.fetchCities(null);
}

async function fetchDistrict() {
    await $location.fetchDistricts(selectedCity.value?.id);
}

const cityList = computed(() =>
    $location.cities.map((city: any) => ({
        id: city.id,
        name: city.nama,
    }))
);
const districtList = computed(() =>
    $location.districts.map((district: any) => ({
        id: district.id,
        name: district.nama,
        cityId: district.id_kota,
        city: district.citys
    }))
);


const exportCSV = (event: any) => {
    dt.value.exportCSV();
};

const confirmDelete = (e: any) => {
    confirm.require({
        target: e.currentTarget,
        message: "Yakin ingin menghapus data ini?",
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
            await $location.deleteDistrict(e)
            await fetchDistrict()
        },
    });
};

onMounted(async () => {
    await fetchDistrict();
    await fetchCity();
});
</script>
<template>
    <DataTable ref="dt" :value="districtList" :paginator="true" :rows="10" dataKey="id" :rowHover="true"
        v-model:filters="filters" filterDisplay="menu" :loading="isLoading" :globalFilterFields="['name']"
        showGridlines>
        <template #header>
            <div class="flex flex-col md:flex-row justify-between gap-4 mb-4">
                <Button type="button" icon="pi pi-plus" label="Tambah Kecamatan" class="md:order-1 order-2"
                    @click="visibleAdd = true" />
                <div class="flex items-center gap-4 md:order-2 order-1">
                    <div class="hidden md:flex"><Button type="button" icon="pi pi-download" outlined label="Unduh"
                            @click="exportCSV($event)" /></div>
                    <div class="flex md:hidden"><Button type="button" icon="pi pi-download" outlined /></div>
                    <IconField class="w-full md:w-auto">
                        <InputIcon>
                            <i class="pi pi-search" />
                        </InputIcon>
                        <InputText v-model="filters['global'].value" placeholder="Pencarian" fluid />
                    </IconField>
                </div>
            </div>
            <div class="flex md:flex-row flex-col gap-2 items-center justify-start">
                <Select v-model="selectedCity" editable showClear :options="cityList" optionLabel="name"
                    placeholder="Pilih kota" class="flex-1" />
                <Button type="button" icon="pi pi-search" label="Cari" @click="fetchDistrict()" class="md:w-auto w-full"
                    :loading="$location.isLoadingDistrict" />
            </div>
        </template>
        <template #empty> Tidak ada data Kecamatan. </template>
        <template #loading> Memuat data Kecamatan. Mohon tunggu. </template>
        <Column sortable field="name" header="Nama" class="min-w-[15rem]">
            <template #body="{ data }">
                {{ data.name }}
            </template>
            <template #filter="{ filterModel }">
                <InputText v-model="filterModel.value" type="text" placeholder="Cari Kecamatan" />
            </template>
        </Column>
        <Column sortable field="id" header="Action" bodyClass="text-center" class="min-w-[5rem]">
            <template #body="{ data }">
                <div class="flex gap-4 items-center">
                    <Button icon="pi pi-pencil" severity="info" text v-tooltip.bottom="'Ubah'"
                        @click="selectedRow = data, visibleEdit = true" />

                    <Button icon="pi pi-trash" severity="danger" text v-tooltip.bottom="'Hapus'"
                        @click="confirmDelete(data.id)" />
                </div>
            </template>
        </Column>
    </DataTable>
    <ConfirmPopup></ConfirmPopup>
    <Dialog v-model:visible="visibleAdd" maximizable modal header="Tambah Kecamatan" class=" sm:w-1/2 w-full ">
        <AddMasterDistrict @on-close="visibleAdd = false" @on-save="visibleAdd = false, fetchDistrict()" />
    </Dialog>
    <Dialog v-model:visible="visibleEdit" maximizable modal header="Ubah Kecamatan" class=" sm:w-1/2 w-full ">
        <EditMasterDistrict :district="selectedRow" @on-close="visibleEdit = false"
            @on-save="visibleEdit = false, fetchDistrict()" />
    </Dialog>
</template>