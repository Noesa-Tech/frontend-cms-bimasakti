<script setup lang="ts">
import { ServicesService } from "@/service/ServicesService";
import { FilterMatchMode, FilterOperator } from "@primevue/core/api";
import { onBeforeMount, reactive, ref } from "vue";
import DatePicker from "primevue/datepicker";
import Select from "primevue/select";
import MultiSelect from "primevue/multiselect";
import { useConfirm } from "primevue/useconfirm";
import { useToast } from "primevue/usetoast";
import ConfirmPopup from "primevue/confirmpopup";
import Popover from "primevue/popover";

const confirm = useConfirm();
const toast = useToast();
const dt = ref();
const filters = ref<any>({});
const isLoading = ref<boolean>(false);
const serviceData = ref(null);
const statuses = reactive([1, 0]);
const paymentMethods = reactive(["Transfer Bank", "Virtual Account(VA)", "GoPay", "OVO"]);

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

onBeforeMount(() => {
  ServicesService.getServices().then((data: any) => {
    serviceData.value = data;
    isLoading.value = false;
  });
  initFilter();
});

function initFilter() {
  filters.value = {
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    name: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
    description: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
    updated_at: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }] },
    status: { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
  };
}

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

const confirm2 = (event: any) => {
  confirm.require({
    target: event.currentTarget,
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
    accept: () => {
      toast.add({ severity: "info", summary: "Confirmed", detail: "Pesanan dibatalkan", life: 3000 });
    },
    reject: () => {
      toast.add({ severity: "error", summary: "Rejected", detail: "You have rejected", life: 3000 });
    },
  });
};




</script>
<template>
  <TopBreadcrumb :breadcrumbItems="[{ label: 'Master' },{ label: 'Sub Kategori' }]" />
  <div class="card mt-8">
    <div class="font-semibold text-xl mb-4">Data Sub Kategori</div>
    <DataTable ref="dt" :value="serviceData" :paginator="true" :rows="10" dataKey="id" :rowHover="true"
      v-model:filters="filters" filterDisplay="menu" :loading="isLoading" 
      :globalFilterFields="['name', 'description', 'status', 'updated_at']" showGridlines scrollable>
      <template #header>
        <div class="flex flex-col md:flex-row justify-between gap-4">
          <Button type="button" icon="pi pi-plus" label="Tambah Layanan" class="md:order-1 order-2" />
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
      <template #empty> Tidak ada data layanan. </template>
      <template #loading> Memuat data layanan. Mohon tunggu. </template>
      <Column sortable field="name" header="Nama Layanan" class="min-w-[15rem]">
        <template #body="{ data }">
          {{ data.name }}
        </template>
        <template #filter="{ filterModel }">
          <InputText v-model="filterModel.value" type="text" placeholder="Cari Nama" />
        </template>
      </Column>
      <Column sortable field="description" header="Deskripsi" class="min-w-[15rem]">
        <template #body="{ data }">
          <span class="line-clamp-2" v-tooltip.bottom="data.description">
            {{ data.description }}
          </span>
        </template>
        <template #filter="{ filterModel }">
          <InputText v-model="filterModel.value" type="text" placeholder="Cari Nama" />
        </template>
      </Column>
      <Column sortable header="Status" field="status" :filterMenuStyle="{ width: '14rem' }">
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
            <Button icon="pi pi-pencil" severity="info" text v-tooltip.bottom="'Ubah'" as="router-link"
              :to="{ name: 'order-detail', params: { id: data.id } }" />

            <Button icon="pi pi-times" severity="danger" text v-tooltip.bottom="'Hapus'" @click="confirm2($event)" />
          </div>
        </template>
      </Column>
    </DataTable>
  </div>
  <ConfirmPopup></ConfirmPopup>
</template>