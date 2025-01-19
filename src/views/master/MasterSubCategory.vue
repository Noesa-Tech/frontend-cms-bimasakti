<script setup lang="ts">
import Select from "primevue/select";
import DatePicker from "primevue/datepicker";
import { useConfirm } from "primevue/useconfirm";
import ConfirmPopup from "primevue/confirmpopup";
import { FilterMatchMode, FilterOperator } from "@primevue/core/api";
import { ServiceSubCategorytStore } from '@/store/serviceSubCategory'

const $service = ServiceSubCategorytStore()
const confirm = useConfirm();

const dt = ref();
const filters = ref<any>({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    'service_problem.name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
    name: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
    price: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
    updated_at: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }] },
    status: { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
});

const selectedRow = ref<any>(null)
const statuses = reactive([1, 0]);
const reactiveKey = ref<number>(0)
const visibleEdit = ref<boolean>(false);
const visibleAdd = ref<boolean>(false);

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

async function fetchServiceSubCategory(){
  await $service.getServiceSubCategory()
  reactiveKey.value += 1;
}

onMounted(async() => {
  await fetchServiceSubCategory()
})

function formatDate(value: any) {
  const date = new Date(value);
  return date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

const exportCSV = (event: any) => {
  dt.value.exportCSV();
};

const confirmDelete = (e: any) => {
  confirm.require({
    target: e.currentTarget,
    message: "Yakin ingin menghapus sub kategori ini?",
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
      await fetchServiceSubCategory()
    },
    reject: () => {
    },
  });
};
</script>

<template>
  <TopBreadcrumb :breadcrumbItems="[{ label: 'Master' }, { label: 'Sub Kategori' }]" />
  <div class="card mt-8">
    <div class="font-semibold text-xl mb-4">Data Sub Kategori</div>
    <DataTable ref="dt" :key="reactiveKey" :value="$service.serviceSubCategory" rowGroupMode="rowspan" groupRowsBy="service_problem.name"
      :paginator="true" :rows="10" dataKey="id" :rowHover="true" v-model:filters="filters" filterDisplay="menu"
      :loading="$service.isLoading" :globalFilterFields="['service_problem.name', 'name', 'price', 'status', 'updated_at']"
      showGridlines>
      <template #header>
        <div class="flex flex-col md:flex-row justify-between gap-4">
          <Button type="button" icon="pi pi-plus" label="Tambah Sub Kategori" class="md:order-1 order-2"
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
      <template #empty> Tidak ada data Sub Kategori. </template>
      <template #loading> Memuat data Sub Kategori. Mohon tunggu. </template>
      <Column field="service_problem.name" header="Kategori">
        <template #body="{ data }">
          <div class="flex gap-4 items-center ">
            <img :alt="data.service_problem.service.name" :src="data.image_url"
              class=" align-middle w-10" />
            <div>
              <h6 class="m-0">{{ data.isCustom > 0 ? 'Custom Request' : data.service_problem.name }}</h6>
              <p class="m-0 text-muted-color text-sm">{{ data.service_problem.service.name }}</p>
            </div>
          </div>
        </template>
        <template #filter="{ filterModel }">
          <InputText v-model="filterModel.value" type="text" placeholder="Cari Kategori" />
        </template>
      </Column>
      <Column field="name" header="Sub Kategori" class="min-w-[15rem]">
        <template #body="{ data }">
          {{ data.name }}
        </template>
        <template #filter="{ filterModel }">
          <InputText v-model="filterModel.value" type="text" placeholder="Cari Sub Kategori" />
        </template>
      </Column>
      <Column header="Status" field="status" :filterMenuStyle="{ width: '14rem' }">
        <template #body="{ data }">
          <Tag :value="getStatusName(data.status)" :severity="getSeverity(data.status)" class="whitespace-nowrap" />
        </template>
        <template #filter="{ filterModel }">
          <Select v-model="filterModel.value" :options="statuses" placeholder="Pilih" showClear>
            <template #value="slotProps">
              <Tag v-if="slotProps.value" :value="getStatusName(slotProps.value)"
                :severity="getSeverity(slotProps.value)" />
            </template>
            <template #option="slotProps">
              <Tag :value="getStatusName(slotProps.option)" :severity="getSeverity(slotProps.option)" />
            </template>
          </Select>
        </template>
      </Column>
      <!-- <Column header="Harga" filterField="price" dataType="text" class="min-w-[12rem]">
        <template #body="{ data }">
          Rp{{ formatPrice(data.price) }}
        </template>
        <template #filter="{ filterModel }">
          <InputNumber v-model="filterModel.value" type="text" placeholder="Cari Harga" inputId="currency-indonesia"
            mode="currency" currency="IDR" locale="id-ID" :minFractionDigits="0" />
        </template>
      </Column> -->
      <Column header="Terakhir Update" filterField="updated_at" dataType="date" class="min-w-[12rem]">
        <template #body="{ data }">
          {{ formatDate(data.updated_at) }}
        </template>
        <template #filter="{ filterModel }">
          <DatePicker v-model="filterModel.value" dateFormat="mm/dd/yy" placeholder="mm/dd/yyyy" />
        </template>
      </Column>
      <Column field="id" header="Action" bodyClass="text-center" class="min-w-[10rem]">
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
  <Dialog v-model:visible="visibleAdd" maximizable modal header="Tambah Sub Kategori" class=" sm:w-1/2 w-full ">
    <AddSubCategory @on-close="visibleAdd = false" @on-save="visibleAdd = false, fetchServiceSubCategory()" />
  </Dialog>

  <Dialog v-model:visible="visibleEdit" maximizable modal header="Ubah Sub Kategori" class=" sm:w-1/2 w-full ">
    <EditSubCategory :data="selectedRow" @on-close="visibleEdit = false" @on-save="visibleEdit = false, fetchServiceSubCategory()" />
  </Dialog>
</template>