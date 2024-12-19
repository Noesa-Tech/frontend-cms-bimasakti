<script setup lang="ts">
import { FilterMatchMode, FilterOperator } from "@primevue/core/api";
import DatePicker from "primevue/datepicker";
import Select from "primevue/select";
import { useConfirm } from "primevue/useconfirm";
import ConfirmPopup from "primevue/confirmpopup";

import { ServiceStore } from '@/store/service'

const confirm = useConfirm();
const $service = ServiceStore()

const dt = ref();
const statuses = reactive([1, 0]);
const filters = ref<any>({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  name: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
  description: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
  updated_at: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }] },
  status: { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
});
const reactiveKey = ref<number>(0);
const selectedRow = ref<any>(null)

const visibleEdit = ref<boolean>(false);
const visibleAdd = ref<boolean>(false);

function getSeverity(e: number) {
  return e < 1 ? "danger" : "success";
}

function getStatusName(e: number) {
  return e < 1 ? "Tidak Tersedia" : "Tersedia";
}

async function fetchAllService() {
  await $service.fetchService()
  reactiveKey.value += 1;
}

const items = computed(() => {
  return $service.serviceAll || [];
});

onMounted(async () => {
  await $service.fetchService()
})

function formatDate(value: any) {
  const date = new Date(value);
  return date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

const exportCSV = () => {
  dt.value.exportCSV();
};

const confirmDelete = (e: any) => {
  confirm.require({
    target: e.currentTarget,
    message: "Yakin ingin menghapus layanan ini?",
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
    accept: async() => {
      await $service.delete(e)
      await $service.fetchService()
    },
    reject: () => {
    },
  });
};
</script>
<template>
  <TopBreadcrumb :breadcrumbItems="[{ label: 'Master' }, { label: 'Layanan' }]" />
  <div class="card mt-8">
    <div class="font-semibold text-xl mb-4">Data Layanan</div>
    <DataTable ref="dt" :key="reactiveKey" :value="items" :paginator="true" :rows="10" dataKey="id" :rowHover="true"
      v-model:filters="filters" filterDisplay="menu" :loading="$service.isLoading"
      :globalFilterFields="['name', 'description', 'status', 'updated_at']" showGridlines scrollable>
      <template #header>
        <div class="flex flex-col md:flex-row justify-between gap-4">
          <Button type="button" icon="pi pi-plus" label="Tambah Layanan" class="md:order-1 order-2"
            @click="visibleAdd = true" />
          <div class="flex items-center gap-4 md:order-2 order-1">
            <div class="hidden md:flex"><Button type="button" icon="pi pi-download" outlined label="Unduh"
                @click="exportCSV()" /></div>
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
      <template #empty> Tidak ada data layanan. </template>
      <template #loading> Memuat data layanan. Mohon tunggu. </template>

      <Column sortable field="name" header="Layanan" class="min-w-[15rem]">
        <template #body="{ data }">
          {{ data.name }}
        </template>
        <template #filter="{ filterModel }">
          <InputText v-model="filterModel.value" type="text" placeholder="Cari Layanan" />
        </template>
      </Column>
      <Column sortable field="description" header="Deskripsi" class="min-w-[15rem]">
        <template #body="{ data }">
          <span class="line-clamp-2" v-tooltip.bottom="data.description">
            {{ data.description }}
          </span>
        </template>
        <template #filter="{ filterModel }">
          <InputText v-model="filterModel.value" type="text" placeholder="Cari Deskripsi" />
        </template>
      </Column>
      <Column sortable header="Status" field="status" :filterMenuStyle="{ width: '14rem' }">
        <template #body="{ data }">
          <Tag :value="getStatusName(data.status)" :severity="getSeverity(data.status)"
            class="whitespace-nowrap" />
        </template>
        <template #filter="{ filterModel }">
          <Select v-model="filterModel.value" :options="statuses" placeholder="Pilih" showClear>
            <template #value="slotProps">
              <Tag :value="getStatusName(slotProps.value)" :severity="getSeverity(slotProps.value)" />
            </template>
            <template #option="slotProps">
              <Tag :value="getStatusName(slotProps.option)" :severity="getSeverity(slotProps.option)" />
            </template>
          </Select>
        </template>
      </Column>

      <Column sortable header="Terakhir Update" filterField="updated_at" dataType="date" class="min-w-[20rem]">
        <template #body="{ data }">
          {{ formatDate(data.updated_at) }}
        </template>
        <template #filter="{ filterModel }">
          <DatePicker v-model="filterModel.value" dateFormat="mm/dd/yy" placeholder="mm/dd/yyyy" />
        </template>
      </Column>
      <Column sortable field="id" header="Action" bodyClass="text-center" class="min-w-[10rem]">
        <template #body="{ data }">
          <div class="flex gap-4 items-center">
            <Button icon="pi pi-pencil" severity="info" text v-tooltip.bottom="'Ubah'" @click="selectedRow = data ,visibleEdit = true" />

            <Button icon="pi pi-trash" severity="danger" text v-tooltip.bottom="'Hapus'" @click="confirmDelete(data.id)" />
          </div>
        </template>
      </Column>
    </DataTable>
  </div>
  <ConfirmPopup></ConfirmPopup>
  <Dialog v-model:visible="visibleAdd" maximizable modal header="Tambah Layanan" class=" sm:w-1/2 w-full ">
    <AddService @on-close="visibleAdd = false" @on-save="visibleAdd = false, fetchAllService()" />
  </Dialog>
  <Dialog v-model:visible="visibleEdit" maximizable modal header="Ubah Layanan" class=" sm:w-1/2 w-full ">
    <EditService :service="selectedRow" @on-close="visibleEdit = false" @on-save="visibleEdit = false, fetchAllService()" />
  </Dialog>
</template>