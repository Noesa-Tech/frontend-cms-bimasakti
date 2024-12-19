<script setup lang="ts">
import { CustomerService } from "@/service/CustomerService";
import { FilterMatchMode, FilterOperator } from "@primevue/core/api";
import { onBeforeMount, reactive, ref } from "vue";
import DatePicker from "primevue/datepicker";
import Select from "primevue/select";
import { useConfirm } from "primevue/useconfirm";
import { useToast } from 'primevue/usetoast';
import ConfirmPopup from "primevue/confirmpopup";

const confirm = useConfirm();
const toast = useToast();
const dt = ref();
const filters = ref<any>({});
const isLoading = ref<boolean>(false);
const customerData = ref(null);
const visibleEdit = ref<boolean>(false);
const visibleAdd = ref<boolean>(false);

onBeforeMount(() => {
  CustomerService.getCustomer().then((data: any) => {
    customerData.value = data;
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
    message: "Yakin ingin menghapus pelanggan ini?",
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
</script>
<template>
  <TopBreadcrumb :breadcrumbItems="[{ label: 'Pelanggan' }]" />
  <div class="card mt-8">
    <div class="font-semibold text-xl mb-4">Data Benefit</div>
    <DataTable ref="dt" :value="customerData" :paginator="true" :rows="10" dataKey="id" :rowHover="true"
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
      <template #empty> Tidak ada data Benefit. </template>
      <template #loading> Memuat data Benefit. Mohon tunggu. </template>
      <Column sortable field="name" header="Nama" class="min-w-[15rem]">
        <template #body="{ data }">
          {{ data.name }}
        </template>
        <template #filter="{ filterModel }">
          <InputText v-model="filterModel.value" type="text" placeholder="Cari Benefit" />
        </template>
      </Column>
      <Column sortable field="email" header="Alamat Email" class="min-w-[15rem]">
        <template #body="{ data }">
          <a :href="'mailto:' + data.email" class=" text-blue-400 hover:text-blue-500 transition-all" target="_blank">{{
            data.email
            }}</a>
        </template>
        <template #filter="{ filterModel }">
          <InputText v-model="filterModel.value" type="text" placeholder="Cari Benefit" />
        </template>
      </Column>
      <Column sortable field="phone" header="Nomor Hp" class="min-w-[15rem]">
        <template #body="{ data }">
          {{ data.phone }}
        </template>
        <template #filter="{ filterModel }">
          <InputText v-model="filterModel.value" type="text" placeholder="Cari Benefit" />
        </template>
      </Column>

      <Column sortable field="id" header="Action" bodyClass="text-center" class="min-w-[10rem]">
        <template #body="{ data }">
          <div class="flex gap-4 items-center">
            <Button icon="pi pi-pencil" severity="info" text v-tooltip.bottom="'Ubah'" @click="visibleEdit = true" />

            <Button icon="pi pi-trash" severity="danger" text v-tooltip.bottom="'Hapus'" @click="confirm2($event)" />
          </div>
        </template>
      </Column>
    </DataTable>
  </div>
  <ConfirmPopup></ConfirmPopup>
  <Dialog v-model:visible="visibleAdd" maximizable modal header="Tambah Pelanggan" class=" sm:w-1/2 w-full ">
    <AddCustomer @on-close="visibleAdd = false" @on-save="visibleAdd = false" />
  </Dialog>
  <Dialog v-model:visible="visibleEdit" maximizable modal header="Ubah Pelanggan" class=" sm:w-1/2 w-full ">
    <EditCustomer :customer="{}" @on-close="visibleEdit = false" @on-save="visibleEdit = false" />
  </Dialog>
</template>