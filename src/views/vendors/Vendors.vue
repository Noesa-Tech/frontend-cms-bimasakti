<script setup>
import AddVendor from "./AddVendor.vue";
import EditVendor from "./EditVendor.vue";
import { VendorService } from "@/service/VendorService";
import { FilterMatchMode, FilterOperator } from "@primevue/core/api";
import { onBeforeMount, reactive, ref } from "vue";
import DatePicker from "primevue/datepicker";
import Select from "primevue/select";
import MultiSelect from "primevue/multiselect";
import { useConfirm } from "primevue/useconfirm";
import { useToast } from "primevue/usetoast";
import ConfirmPopup from "primevue/confirmpopup";
import Popover from "primevue/popover";

const op = ref();
const confirm = useConfirm();
const toast = useToast();
const visibleAdd = ref(false);
const visibleEdit = ref(false);
const dt = ref();
const vendorsData = ref(null);
const selectedvendorsData = ref();
const filters1 = ref(null);
const loading1 = ref(null);

const statuses = reactive([1, 2]);

function getSeverity(status) {
  switch (status) {
    case 1:
      return "danger";
    case 2:
      return "success";
  }
}

function getStatusName(status) {
  switch (status) {
    case 1:
      return "Active";
    case 2:
      return "Unactive";
  }
}

onBeforeMount(() => {
  VendorService.getVendors().then((data) => {
    vendorsData.value = data;
    loading1.value = false;
    vendorsData.value.forEach((vendors) => (vendors.date = new Date(vendors.date)));
  });

  initFilters1();
});

function initFilters1() {
  filters1.value = {
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    name: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
    location: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
    date: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }] },
    status: { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
  };
}

function formatDate(value) {
  return value.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

const exportCSV = () => {
  dt.value.exportCSV();
};

const confirm2 = (event) => {
  confirm.require({
    target: event.currentTarget,
    message: "Yakin ingin menhapus data ini?",
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
    accept: () => {
      toast.add({ severity: "info", summary: "Confirmed", detail: "Record deleted", life: 3000 });
    },
    reject: () => {
      toast.add({ severity: "error", summary: "Rejected", detail: "You have rejected", life: 3000 });
    },
  });
};

const toggle = (event) => {
  op.value.toggle(event);
};
</script>
<template>
  <TopBreadcrumb :breadcrumbItems="[{ label: 'Data Vendor' }]" />
  <div class="card mt-8">
    <div class="font-semibold text-xl mb-4">Data Vendor</div>
    <DataTable
      v-model:selection="selectedvendorsData"
      ref="dt"
      :value="vendorsData"
      :paginator="true"
      :rows="10"
      dataKey="id"
      :rowHover="true"
      v-model:filters="filters1"
      filterDisplay="menu"
      :loading="loading1"
      :filters="filters1"
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
      <template #empty> No customers found. </template>
      <template #loading> Loading customers data. Please wait. </template>
      <Column frozen selectionMode="multiple"></Column>
      <Column sortable field="name" header="Nama Vendor" class="min-w-[15rem]">
        <template #body="{ data }">
          {{ data.name }}
        </template>
        <template #filter="{ filterModel }">
          <InputText v-model="filterModel.value" type="text" placeholder="Search by name" />
        </template>
      </Column>
      <Column sortable header="Lokasi" filterField="location" style="min-width: 12rem">
        <template #body="{ data }">
          {{ data.location }}
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
          <Button @click="toggle" :label="data.services.length + ' Layanan'" severity="info" outlined icon="pi pi-angle-down" iconPos="right" />
          <Popover ref="op">
            <ul class="list-disc list-inside flex flex-col gap-4">
              <li v-for="(item, index) in data.services" :key="index">
                {{ item.title }}
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
            <Button icon="pi pi-pencil" severity="info" text v-tooltip="'Ubah'" @click="visibleEdit = true" />
            <Button icon="pi pi-trash" severity="danger" text v-tooltip="'Hapus'" @click="confirm2($event)" />
          </div>
        </template>
      </Column>
    </DataTable>
  </div>
  <Toast />
  <ConfirmPopup></ConfirmPopup>
  <Dialog v-model:visible="visibleAdd" maximizable modal header="Tambah Vendor" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
    <AddVendor />
  </Dialog>
  <Dialog v-model:visible="visibleEdit" maximizable modal header="Ubah Vendor" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
    <EditVendor />
  </Dialog>
</template>
