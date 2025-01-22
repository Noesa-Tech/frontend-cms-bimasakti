<script setup lang="ts">
import { UserStore } from '@/store/users'
import { useConfirm } from "primevue/useconfirm";
import ConfirmPopup from "primevue/confirmpopup";
import { FilterMatchMode, FilterOperator } from "@primevue/core/api";

const $user = UserStore();
const confirm = useConfirm();
const dt = ref();

const filters = ref<any>({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  name: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
  email: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
  phone: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
});

const visibleEdit = ref<boolean>(false);
const visibleAdd = ref<boolean>(false);
const reactiveKey = ref<number>(0)
const isLoading = ref<boolean>(false);

const selectedRow = ref<any>(null)

async function fetchUsers() {
  await $user.getAll(1)
  reactiveKey.value += 1;
}

onMounted(async() => {
  await fetchUsers()
});

const exportCSV = (event: any) => {
  dt.value.exportCSV();
};

const confirmDelete = (e: any) => {
    confirm.require({
        target: e.currentTarget,
        message: "Yakin ingin menghapus data pelanggan ini?",
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
            await $user.delete(e)
            await fetchUsers()
        },
    });
};
</script>
<template>
  <TopBreadcrumb :breadcrumbItems="[{ label: 'Pelanggan' }]" />
  <div class="card mt-8">
    <div class="font-semibold text-xl mb-4">Data Pelanggan</div>
    <DataTable ref="dt" :key="reactiveKey" :value="$user.users" :paginator="true" :rows="10" dataKey="id" :rowHover="true"
      v-model:filters="filters" filterDisplay="menu" :loading="isLoading"
      :globalFilterFields="['name', 'email', 'phone']" showGridlines>
      <template #header>
        <div class="flex flex-col md:flex-row justify-between gap-4">
          <Button type="button" icon="pi pi-plus" label="Tambah Pelanggan" class="md:order-1 order-2"
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
      <template #empty> Tidak ada data Pelanggan. </template>
      <template #loading> Memuat data Pelanggan. Mohon tunggu. </template>
      <Column sortable field="name" header="Nama" class="min-w-[15rem]">
        <template #body="{ data }">
          {{ data.name }}
        </template>
        <template #filter="{ filterModel }">
          <InputText v-model="filterModel.value" type="text" placeholder="Cari Pelanggan" />
        </template>
      </Column>
      <Column sortable field="email" header="Alamat Email" class="min-w-[15rem]">
        <template #body="{ data }">
          <a :href="'mailto:' + data.email" class=" text-blue-400 hover:text-blue-500 transition-all" target="_blank">{{
            data.email
          }}</a>
        </template>
        <template #filter="{ filterModel }">
          <InputText v-model="filterModel.value" type="text" placeholder="Cari Pelanggan" />
        </template>
      </Column>
      <Column sortable field="phone" header="Nomor Hp" class="min-w-[15rem]">
        <template #body="{ data }">
          {{ data.phone }}
        </template>
        <template #filter="{ filterModel }">
          <InputText v-model="filterModel.value" type="text" placeholder="Cari Pelanggan" />
        </template>
      </Column>

      <Column sortable field="id" header="Action" bodyClass="text-center" class="min-w-[10rem]">
        <template #body="{ data }">
          <div class="flex gap-4 items-center">
            <Button icon="pi pi-pencil" severity="info" text v-tooltip.bottom="'Ubah'" @click="selectedRow = data, visibleEdit = true" />

            <Button icon="pi pi-trash" severity="danger" text v-tooltip.bottom="'Hapus'" @click="confirmDelete(data.id)" />
          </div>
        </template>
      </Column>
    </DataTable>
  </div>
  <ConfirmPopup></ConfirmPopup>
  <Dialog v-model:visible="visibleAdd" maximizable modal header="Tambah Pelanggan" class=" sm:w-1/2 w-full ">
    <AddCustomer @on-close="visibleAdd = false" @on-save="visibleAdd = false, fetchUsers()" />
  </Dialog>
  <Dialog v-model:visible="visibleEdit" maximizable modal header="Ubah Pelanggan" class=" sm:w-1/2 w-full ">
    <EditCustomer :customer="selectedRow" @on-close="visibleEdit = false" @on-save="visibleEdit = false, fetchUsers()" />
  </Dialog>
</template>