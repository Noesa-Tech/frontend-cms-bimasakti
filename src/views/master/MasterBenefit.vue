<script setup lang="ts">
import { BenefitService } from "@/service/BenefitService";
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
const benefitData = ref(null);
const statuses = reactive([1, 0]);
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

onBeforeMount(() => {
  BenefitService.getBenefit().then((data: any) => {
    benefitData.value = data;
    isLoading.value = false;
  });
  initFilter();
});

function initFilter() {
  filters.value = {
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    'service.name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
    name: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
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
    message: "Yakin ingin menghapus benefit ini?",
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
  <TopBreadcrumb :breadcrumbItems="[{ label: 'Master' }, { label: 'Benefit' }]" />
  <div class="card mt-8">
    <div class="font-semibold text-xl mb-4">Data Benefit</div>
    <DataTable ref="dt" :value="benefitData" rowGroupMode="rowspan" groupRowsBy="service.name" :paginator="true"
      :rows="10" dataKey="id" :rowHover="true" v-model:filters="filters" filterDisplay="menu" :loading="isLoading"
      :globalFilterFields="['service.name', 'name', 'status', 'updated_at']" showGridlines>
      <template #header>
        <div class="flex flex-col md:flex-row justify-between gap-4">
          <Button type="button" icon="pi pi-plus" label="Tambah Benefit" class="md:order-1 order-2"
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
      <Column field="service.name" header="Layanan">
        <template #body="{ data }">
          <div class="flex flex-col items-center gap-2">
            <img :alt="data.service.name" :src="data.service.image_url" width="32" style="vertical-align: middle" />
            <span>{{ data.service.name }}</span>
          </div>
        </template>
        <template #filter="{ filterModel }">
          <InputText v-model="filterModel.value" type="text" placeholder="Cari Layanan" />
        </template>
      </Column>
      <Column field="name" header="Benefit" class="min-w-[15rem]">
        <template #body="{ data }">
          {{ data.name }}
        </template>
        <template #filter="{ filterModel }">
          <InputText v-model="filterModel.value" type="text" placeholder="Cari Benefit" />
        </template>
      </Column>
      <Column header="Status" field="status" :filterMenuStyle="{ width: '14rem' }">
        <template #body="{ data }">
          <Tag :value="getStatusName(data.status)" :severity="getSeverity(data.status)" class="whitespace-nowrap" />
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
            <Button icon="pi pi-pencil" severity="info" text v-tooltip.bottom="'Ubah'" @click="visibleEdit = true" />

            <Button icon="pi pi-trash" severity="danger" text v-tooltip.bottom="'Hapus'" @click="confirm2($event)" />
          </div>
        </template>
      </Column>
    </DataTable>
  </div>
  <ConfirmPopup></ConfirmPopup>
  <Dialog v-model:visible="visibleAdd" maximizable modal header="Tambah Benefit" class=" sm:w-1/2 w-full ">
    <AddBenefits :benefitsId="1" @on-close="visibleAdd = false" @on-save="visibleAdd = false" />
  </Dialog>
  <Dialog v-model:visible="visibleEdit" maximizable modal header="Ubah Benefit" class=" sm:w-1/2 w-full ">
    <EditBenefits :benefitsId="1" @on-close="visibleEdit = false" @on-save="visibleEdit = false" />
  </Dialog>
</template>