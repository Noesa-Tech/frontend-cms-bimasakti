<script setup lang="ts">
import AddVendor from "./AddVendor.vue";
import EditVendor from "./EditVendor.vue";
import { FilterMatchMode, FilterOperator } from "@primevue/core/api";
import DatePicker from "primevue/datepicker";
import Select from "primevue/select";
import { useConfirm } from "primevue/useconfirm";
import ConfirmPopup from "primevue/confirmpopup";
import Popover from "primevue/popover";

import { VendorStore } from '@/store/vendor'
import { ServiceStore } from '@/store/service'
import { LocationStore } from '@/store/location'

const popovers = ref<Record<number, HTMLElement | null>>({}); 
const $vendor = VendorStore()
const $service = ServiceStore()
const $location = LocationStore()
const confirm = useConfirm();

const reactiveKey = ref<number>(0);
const selectedId = ref<number | null>(null)
const visibleAdd = ref<boolean>(false);
const visibleEdit = ref<boolean>(false);
const dt = ref();
const selectedvendorsData = ref<any>(null);
const filters1 = ref({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    name: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
    location: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
    date: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }] },
    status: { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
})

const items = computed(() => {
  return $vendor.vendors.map((item: any) => ({
    id: item.id,
    name: item.name,
    location: item.address,
    date: item.created_at,
    status: item.deleted_at,
    city : item.city,
    services: item.vendor_service
  }));
});

const allCity = computed(() => {
  return $location.city.map((item: any) => ({
    code: item.id,
    name: item.nama,
  }));
});

const statuses = reactive([1, 2]);

function getSeverity(status:any) {
  switch (status) {
    case 1:
      return "danger";
    case 2:
      return "success";
  }
}

function getStatusName(status:any) {
  if(status){
    return "Unactive";
  }else{
    return "Active";
  }
}

async function fetchVendor(){
  await $vendor.fetchVendor()
  reactiveKey.value += 1;
}

onMounted(async () => {
  await $location.fetchCity(0)
  await $service.fetchService()
  await $vendor.fetchVendor()
});

function formatDate(value: any) {
  const date = new Date(value);
  return date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}
const exportCSV = (e:any) => {
  dt.value.exportCSV();
};

const confirm2 = (vendorId:any) => {
  confirm.require({
    target: vendorId.currentTarget,
    message: "Yakin ingin menghapus data ini?",
    icon: "pi pi-info-circle",
    rejectProps: {
      label: "Batal",
      severity: "secondary",
      outlined: true,
    },
    acceptProps: {
      label: "Hapus",
      severity: "danger",
    },
    accept: async() => {
      await $vendor.delete(vendorId)
      await $vendor.fetchVendor()
    },
    reject: () => {
    },
  });
};

const toggle = (event: any, vendorId: number) => {
  const popoverRef = popovers.value[vendorId];
  if (popoverRef) {
    (popoverRef as any).toggle(event);
  }
};

const setPopoverRef = (vendorId: number, el: HTMLElement | null) => {
  popovers.value[vendorId] = el;
};
</script>
<template>
  <TopBreadcrumb :breadcrumbItems="[{ label: 'Data Vendor' }]" />
  <div class="card mt-8">
    <div class="font-semibold text-xl mb-4">Data Vendor</div>
    <DataTable
      v-model:selection="selectedvendorsData"
      ref="dt"
      :key="reactiveKey"
      :loading="$vendor.isLoading"
      :value="items"
      :paginator="true"
      :rows="10"
      dataKey="id"
      :rowHover="true"
      v-model:filters="filters1"
      filterDisplay="menu"
      :globalFilterFields="['name', 'location', 'services', 'date', 'status']"
      showGridlines
      scrollable
      >
      <template #header>
        <div class="flex flex-col md:flex-row justify-between gap-4">
          <Button type="button" icon="pi pi-plus" label="Tambah Vendor" class="md:order-1 order-2" @click="visibleAdd = true" />
          <div class="flex items-center gap-4 md:order-2 order-1">
            <div class="hidden md:flex"><Button type="button" icon="pi pi-download" outlined label="Unduh" @click="exportCSV($event)" /></div>
            <div class="flex md:hidden"><Button type="button" icon="pi pi-download" outlined /></div>
            <IconField class="w-full md:w-auto">
              <InputIcon>
                <i class="pi pi-search" />
              </InputIcon>
              <InputText v-model="filters1['global'].value" placeholder="Pencarian" fluid />
            </IconField>
          </div>
        </div>
      </template>
      <template #empty> No vendors found. </template>
      <template #loading> Loading vendors data. Please wait. </template>
      <Column frozen selectionMode="multiple"></Column>
      <Column sortable field="name" header="Nama Vendor" class="min-w-[15rem]">
        <template #body="{ data }">
          {{ data.name }}
        </template>
        <template #filter="{ filterModel }">
          <InputText v-model="filterModel.value" type="text" placeholder="Search by name" />
        </template>
      </Column>
      <Column sortable header="Lokasi" filterField="location">
        <template #body="{ data }">
          <div>
          {{ data.city?.nama }}
        </div>
        </template>
        <template #filter="{ filterModel }">
          <InputText v-model="filterModel.value" type="text" placeholder="Cari Kota" />
        </template>
        <template #filterclear="{ filterCallback }">
          <Button type="button" icon="pi pi-times" @click="filterCallback()" severity="secondary"></Button>
        </template>
        <template #filterapply="{ filterCallback }">
          <Button type="button" icon="pi pi-check" @click="filterCallback()" severity="success"></Button>
        </template>
      </Column>
      <Column sortable header="Layanan" filterField="services" dataType="string" style="min-width: 10rem">
        <template #body="{ data }">
          <Button @click="toggle($event, data.id)" :label="data.services.length + ' Layanan'" severity="info" outlined icon="pi pi-angle-down" iconPos="right" />
          <Popover :ref="el => setPopoverRef(data.id, el as any)">
            <ul class="list-disc list-inside flex flex-col gap-4">
              <li v-for="(item, index) in data.services" :key="index">
                {{ item.service.name }}
              </li>
            </ul>
          </Popover>
        </template>
        <template #filter="{ filterModel }">
          <InputText v-model="filterModel.value" type="text" placeholder="Cari Layanan" />
        </template>
      </Column>

      <Column sortable header="Status" field="status" :filterMenuStyle="{ width: '14rem' }" style="min-width: 12rem">
        <template #body="{ data }">
          <Tag :value="getStatusName(data.status)" :severity="getSeverity(data.status)" />
        </template>
        <template #filter="{ filterModel }">
          <Select v-model="filterModel.value" :options="statuses" placeholder="Select One" showClear>
            <template #value="slotProps">
              <Tag v-if="slotProps.value" :value="getStatusName(slotProps.value)" :severity="getSeverity(slotProps.value)" />
            </template>
            <template #option="slotProps">
              <Tag :value="getStatusName(slotProps.option)" :severity="getSeverity(slotProps.option)" />
            </template>
          </Select>
        </template>
      </Column>
      <Column sortable header="Tanggal Bergabung" filterField="date" dataType="date" class="min-w-[20rem]">
        <template #body="{ data }">
          {{ formatDate(data.date) }}
        </template>
        <template #filter="{ filterModel }">
          <DatePicker v-model="filterModel.value" dateFormat="mm/dd/yy" placeholder="mm/dd/yyyy" />
        </template>
      </Column>
      <Column sortable field="id" header="Action" bodyClass="text-center" style="min-width: 12rem">
        <template #body="{ data }">
          <div class="flex gap-4 items-center">
            <Button icon="pi pi-pencil" severity="info" text v-tooltip="'Ubah'" @click="selectedId = data.id,  visibleEdit = true" />
            <Button icon="pi pi-trash" severity="danger" text v-tooltip="'Hapus'" @click="confirm2(data.id)" />
          </div>
        </template>
      </Column>
    </DataTable>
  </div>
  <ConfirmPopup></ConfirmPopup>
  <Dialog v-model:visible="visibleAdd" maximizable modal header="Tambah Vendor"  class=" w-[25rem]" >
    <AddVendor :city="allCity" :service="$service.serviceAll" @on-close="visibleAdd = false" @on-save="visibleAdd = false, fetchVendor()"/>
  </Dialog>
  <Dialog v-model:visible="visibleEdit" maximizable modal header="Ubah Vendor"  class=" w-[25rem]" >
    <EditVendor :city="allCity" :service="$service.serviceAll" :vendorId="selectedId" @on-close="visibleEdit = false" @on-save="visibleEdit = false,fetchVendor()" />
  </Dialog>
</template>

<style scoped>
.truncate-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 350px; 
}
</style>
