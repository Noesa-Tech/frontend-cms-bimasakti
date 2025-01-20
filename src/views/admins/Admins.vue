<script setup lang="ts">
import { AdminService } from "@/service/AdminService";
import { FilterMatchMode, FilterOperator } from "@primevue/core/api";
import { onBeforeMount, reactive, ref } from "vue";
import Select from "primevue/select";
import { useConfirm } from "primevue/useconfirm";
import { useToast } from 'primevue/usetoast';
import ConfirmPopup from "primevue/confirmpopup";
import EditAdmin from "@/components/base/admin/admins/EditAdmin.vue";

const confirm = useConfirm();
const toast = useToast();
const dt = ref();
const filters = ref<any>({});
const isLoading = ref<boolean>(false);
const adminData = ref(null);
const visibleEdit = ref<boolean>(false);
const visibleAdd = ref<boolean>(false);
const selectedAdmin = ref<any>(null);

onBeforeMount(() => {
    AdminService.getAdmin().then((data: any) => {
        adminData.value = data;
        isLoading.value = false;
    });
    initFilter();
});

function initFilter() {
    filters.value = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        name: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        email: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        phone: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        'location.name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
    };
}

const exportCSV = (event: any) => {
    dt.value.exportCSV();
};

const confirm2 = (event: any) => {
    confirm.require({
        target: event.currentTarget,
        message: "Yakin ingin menghapus admin ini?",
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
        },
        reject: () => {
        },
    });
};

function openEditDialog(admin: any) {
    selectedAdmin.value = admin;
    visibleEdit.value = true;
}


</script>
<template>
    <TopBreadcrumb :breadcrumbItems="[{ label: 'Admin' }]" />
    <div class="card mt-8">
        <div class="font-semibold text-xl mb-4">Data Admin</div>
        <DataTable ref="dt" :value="adminData" :paginator="true" :rows="10" dataKey="id" v-model:filters="filters"
            filterDisplay="menu" :loading="isLoading" :globalFilterFields="['name', 'email', 'phone', 'location.name']"
            showGridlines>
            <template #header>
                <div class="flex flex-col md:flex-row justify-between gap-4">
                    <Button type="button" icon="pi pi-plus" label="Tambah Admin" class="md:order-1 order-2"
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
            </template>
            <template #empty> Tidak ada data Admin. </template>
            <template #loading> Memuat data Admin. Mohon tunggu. </template>
            <Column sortable field="name" header="Nama" class="min-w-[15rem]">
                <template #body="{ data }">
                    {{ data.name }}
                </template>
                <template #filter="{ filterModel }">
                    <InputText v-model="filterModel.value" type="text" placeholder="Cari Admin" />
                </template>
            </Column>
            <Column sortable field="email" header="Alamat Email" class="min-w-[15rem]">
                <template #body="{ data }">
                    <a :href="'mailto:' + data.email" class=" text-blue-400 hover:text-blue-500 transition-all"
                        target="_blank">{{
                            data.email
                        }}</a>
                </template>
                <template #filter="{ filterModel }">
                    <InputText v-model="filterModel.value" type="text" placeholder="Cari Admin" />
                </template>
            </Column>
            <Column sortable field="phone" header="Nomor Hp" class="min-w-[15rem]">
                <template #body="{ data }">
                    {{ data.phone }}
                </template>
                <template #filter="{ filterModel }">
                    <InputText v-model="filterModel.value" type="text" placeholder="Cari Admin" />
                </template>
            </Column>
            <Column sortable field="location.name" header="Lokasi" class="min-w-[15rem]">
                <template #body="{ data }">
                    {{ data.location.name }}
                </template>
                <template #filter="{ filterModel }">
                    <InputText v-model="filterModel.value" type="text" placeholder="Cari Lokasi" />
                </template>
            </Column>
            <Column header="Password" class="min-w-[15rem]">
                <template #body="{ data }">
                    <toggle-text :password="data.password" />
                </template>
            </Column>
            <Column sortable field="id" header="Action" bodyClass="text-center" class="min-w-[10rem]">
                <template #body="{ data }">
                    <div class="flex gap-4 items-center">
                        <Button icon="pi pi-pencil" severity="info" text v-tooltip.bottom="'Ubah'"
                            @click="openEditDialog(data)" />
                        <Button icon="pi pi-trash" severity="danger" text v-tooltip.bottom="'Hapus'"
                            @click="confirm2($event)" />
                    </div>
                </template>
            </Column>
        </DataTable>
    </div>
    <ConfirmPopup></ConfirmPopup>
    <Dialog v-model:visible="visibleAdd" maximizable modal header="Tambah Admin" class=" sm:w-1/2 w-full ">
        <AddAdmin @on-close="visibleAdd = false" @on-save="visibleAdd = false" />
    </Dialog>
    <Dialog v-model:visible="visibleEdit" maximizable modal header="Ubah Admin" class=" sm:w-1/2 w-full ">
        <EditAdmin :data="selectedAdmin" @on-close="visibleEdit = false" @on-save="visibleEdit = false" />
    </Dialog>
</template>