<script setup lang="ts">

import Accordion from 'primevue/accordion';
import AccordionPanel from 'primevue/accordionpanel';
import AccordionHeader from 'primevue/accordionheader';
import AccordionContent from 'primevue/accordioncontent';

import { FilterMatchMode, FilterOperator } from "@primevue/core/api";
import DatePicker from "primevue/datepicker";
import { ServiceStore } from '@/store/service'
import { OrderStore } from '@/store/order'

const $order = OrderStore()
const $service = ServiceStore()
const isLoading = ref<boolean>(false);
const dt = ref();
const filters = ref<any>({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    'customer.name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
    'customer.phone': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
    'customer.email': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
    'vendor.name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
    'service.name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
    'property.name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
    paymentMethod: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
    description: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
    location: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
    date: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }] },
    useLadder: { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
});
const reactiveKey = ref<number>(0);
const dates = ref();
const userLoginCity = ref<any>("")

async function fetchAllService() {
  await $service.fetchService()
  reactiveKey.value += 1;
}

const serviceItems = computed(() => {
  return $service.serviceAll || [];
});

const items = computed(() => {
  return $order.allOrder || []
});

function ladderStatus(status: number) {
  switch (status) {
    case 0:
      return "Tidak Butuh Tangga";
    case 1:
      return "Butuh Tangga";
    default:
      return null
  }
}

onMounted(async () => {

  const users = localStorage.getItem('AuthStore');

  if (users) {
    const parsedData = JSON.parse(users);
    userLoginCity.value = parsedData?.users?.city_id
  }

  await $order.fetchOrder('completed', userLoginCity.value)
  await $order.fetchSummaryOrder(userLoginCity.value)
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

const exportCSV = (event: any) => {
  dt.value.exportCSV();
};

</script>
<template>
  <TopBreadcrumb :breadcrumbItems="[{ label: 'Laporan Keuangan' }]" />
  <div class="grid grid-cols-12 gap-8 mt-8">
    <div class="col-span-12 lg:col-span-6  xl:col-span-4">
      <div class="card mb-0">
        <div class="flex justify-between mb-4">
          <div>
            <span class="block text-muted-color font-medium mb-4">Transaksi Berhasil</span>
            <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">{{ $order?.summary?.order_complete }}</div>
          </div>
          <div class="flex items-center justify-center bg-blue-100 dark:bg-blue-400/10 rounded-border"
            style="width: 2.5rem; height: 2.5rem">
            <i class="pi pi-shopping-cart text-blue-500 !text-xl"></i>
          </div>
        </div>
        <span class="text-primary font-medium">24 baru </span>
        <span class="text-muted-color">dari kunjungan terakhir</span>
      </div>
    </div>
    <div class="col-span-12 lg:col-span-6 xl:col-span-4">
      <div class="card mb-0">
        <div class="flex justify-between mb-4">
          <div>
            <span class="block text-muted-color font-medium mb-4">Pendapatan</span>
            <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">Rp{{ formatPrice($order?.summary?.total_fee ? $order?.summary?.total_fee : 0) }}</div>
          </div>
          <div class="flex items-center justify-center bg-orange-100 dark:bg-orange-400/10 rounded-border"
            style="width: 2.5rem; height: 2.5rem">
            <i class="pi pi-dollar text-orange-500 !text-xl"></i>
          </div>
        </div>
        <span class="text-primary font-medium">%12+ </span>
        <span class="text-muted-color">dari bulan lalu</span>
      </div>
    </div>
    <div class="col-span-12 lg:col-span-6 xl:col-span-4">
      <div class="card mb-0">
        <div class="flex justify-between mb-4">
          <div>
            <span class="block text-muted-color font-medium mb-4">Pelanggan</span>
            <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">{{ $order?.summary?.total_users }}</div>
          </div>
          <div class="flex items-center justify-center bg-cyan-100 dark:bg-cyan-400/10 rounded-border"
            style="width: 2.5rem; height: 2.5rem">
            <i class="pi pi-users text-cyan-500 !text-xl"></i>
          </div>
        </div>
        <span class="text-primary font-medium">12 </span>
        <span class="text-muted-color">Pelanggan baru</span>
      </div>
    </div>

  </div>
  <div class="card mt-8">
    <div class="font-semibold text-xl mb-4">Laporan Keuangan</div>
    <DataTable ref="dt" :key="reactiveKey" :value="items" rowGroupMode="rowspan" groupRowsBy="customer.name" :paginator="true"
      :rows="10" dataKey="id" v-model:filters="filters" filterDisplay="menu" :loading="isLoading"
      :globalFilterFields="['customer.name', 'customer.phone', 'customer.email', 'service.name', 'property.name', 'paymentMethod', 'location', 'price', 'useLadder', 'date']"
      showGridlines>
      <template #header>
        <div class="flex flex-col md:flex-row justify-end gap-4">
          <DatePicker v-model="dates" selectionMode="range" :manualInput="false" showIcon iconDisplay="input"
            placeholder="Pilih tanggal">
            <template #inputicon="slotProps">
              <i class="pi pi-calendar" @click="slotProps.clickCallback" />
            </template>
          </DatePicker>
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
      <template #empty> Tidak ada data Kategori. </template>
      <template #loading> Memuat data Kategori. Mohon tunggu. </template>
      <Column field="customer.name" header="Pelanggan" sortable>
        <template #body="{ data }">
          <div class="flex flex-col text-start w-full">
            <h6 class="m-0">{{ data.user.name }}</h6>
            <p class="m-0 text-sm text-muted-color">{{ data.user.phone }}</p>
            <p class="m-0 text-sm text-muted-color">{{ data.user.email }}</p>
          </div>
        </template>
        <template #filter="{ filterModel }">
          <InputText v-model="filterModel.value" type="text" placeholder="Cari Pelanggan" />
        </template>
      </Column>
      <Column header="Lokasi" filterField="location" dataType="text" class="min-w-[20rem]" sortable>
        <template #body="{ data }">
          {{ data.location }}
        </template>
        <template #filter="{ filterModel }">
          <InputText v-model="filterModel.value" type="text" placeholder="Cari Lokasin" />
        </template>
      </Column>
      <Column sortable header="Layanan" filterField="service.name" class="min-w-[40rem]">
        <template #body="{ data }">
          <Accordion value="0">
            <AccordionPanel value="1" class="accordion-table">
              <AccordionHeader>
                <div class="flex items-center justify-start gap-4">
                  <img v-if="data.service.full_image_url" :src="data.service.full_image_url" :alt="data.service.name"
                    class="h-6 text-sm font-normal">
                  <span>{{ data.service.name }}</span>
                </div>
              </AccordionHeader>
              <AccordionContent>
                <Divider />
                <Accordion value="0">
                  <AccordionPanel v-for="(subtab, index) in data.problems" :key="subtab.name" :value="index">
                    <AccordionHeader :class="{ 'accordion-subheader': data.service.image_url }">
                      {{ subtab.name }}
                    </AccordionHeader>
                    <AccordionContent class="accordion-content">
                      <div class="flex flex-col items-start text-start gap-4 w-full">
                        <div v-for="(item, index) in subtab.sub_problem" :key="index" class="w-full">
                          <div class="flex flex-col gap-1 w-full">
                            <p class="m-0 font-semibold">• Kategori: {{ item.name }}</p>
                            <div class="border rounded-md">
                              <Inplace class="inplace-display-full">
                                <template #display>
                                  <div class="flex items-start justify-between gap-4">
                                    <div>
                                      <p class="m-0">QTY: {{ item.qty }}</p>
                                      <p class="m-0">Harga: Rp{{ formatPrice(item.price) }}</p>
                                    </div>
                                    <i class="pi pi-pencil ml-2"></i>
                                  </div>
                                </template>
                                <template #content="{ closeCallback }">
                                  <div class="flex flex-col gap-2 p-2">
                                    <div class="flex items-center justify-start gap-2">
                                      <p class="m-0">QTY: </p>
                                      <InputNumber v-model="item.qty" inputId="horizontal-buttons" showButtons
                                        buttonLayout="horizontal" :min="0" :max="99"
                                        inputClass=" text-center border-l border-l-red-500 border-r border-r-green-500 bg-transparent max-w-[4rem]"
                                        incrementButtonClass="border-green-500" decrementButtonClass="border-red-500"
                                        small>
                                        <template #incrementbuttonicon>
                                          <span class="pi pi-plus" />
                                        </template>
                                        <template #decrementbuttonicon>
                                          <span class="pi pi-minus" />
                                        </template>
                                      </InputNumber>
                                    </div>
                                    <div class="flex items-center justify-start gap-2">
                                      <p class="m-0">Harga: </p>
                                      <InputNumber v-model="item.price" type="text" placeholder="Masukkan Harga"
                                        inputId="currency-indonesia" mode="currency" currency="IDR" locale="id-ID"
                                        :minFractionDigits="0" />
                                    </div>
                                    <Button label="Simpan" icon="pi pi-check" outlined severity="success"
                                      class=" max-w-fit" @click="updatePrice(closeCallback, item, data.id, item.id)" />
                                  </div>
                                </template>
                              </Inplace>
                            </div>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionPanel>
                </Accordion>
              </AccordionContent>
            </AccordionPanel>
          </Accordion>
        </template>
      </Column>
      <Column field="property.name" header="Jenis Property" class="min-w-[15rem]" sortable>
        <template #body="{ data }">
          <div>
            <p class="m-0">
              {{ data.properties.name }}
            </p>
            <Badge v-if="data.isLadderRequired" :value="ladderStatus(data.isLadderRequired) ?? ''" size="small" class="mb-2" />
            <p class="m-0 text-sm text-muted-color">Rp{{ formatPrice(data.properties.fee) }}</p>
          </div>
        </template>
        <template #filter="{ filterModel }">
          <InputText v-model="filterModel.value" type="text" placeholder="Cari Property" />
        </template>
      </Column>
      <!-- <Column header="Butuh Tangga" field="useLadder" :filterMenuStyle="{ width: '14rem' }" class="min-w-[15rem]"
        sortable>
        <template #body="{ data }">
          <div>
            <p class="m-0">
              {{ getStatusNameLadder(data.useLadder) }}
            </p>
            <p class="m-0 text-sm text-muted-color">Rp{{ formatPrice(50000) }}</p>
          </div>
        </template>
        <template #filter="{ filterModel }">
          <Select v-model="filterModel.value" :options="ladderStatus" placeholder="Pilih" showClear>
            <template #value="slotProps">
              <Tag v-if="slotProps.value != null" :value="getStatusNameLadder(slotProps.value)"
                :severity="getSeverityLadder(slotProps.value)" />
            </template>
            <template #option="slotProps">
              <Tag :value="getStatusNameLadder(slotProps.option)" :severity="getSeverityLadder(slotProps.option)" />
            </template>
          </Select>
        </template>
      </Column> -->
      <Column header="Total Harga" filterField="price" dataType="text" class="min-w-[12rem]" sortable>
        <template #body="{ data }">
          Rp{{ formatPrice(data.total_fee) }}
        </template>
        <template #filter="{ filterModel }">
          <InputNumber v-model="filterModel.value" type="text" placeholder="Cari Harga" inputId="currency-indonesia"
            mode="currency" currency="IDR" locale="id-ID" :minFractionDigits="0" />
        </template>
      </Column>
      <Column field="vendor.name" header="Vendor" class="min-w-[15rem]" sortable>
        <template #body="{ data }">
          <div class="flex flex-col text-start w-full">
            <p class="m-0">{{ data.vendor_id.name }}</p>
            <p class="m-0 text-sm text-muted-color">{{ data.vendor_id.code }}</p>
          </div>
        </template>
        <template #filter="{ filterModel }">
          <InputText v-model="filterModel.value" type="text" placeholder="Cari Vendor" />
        </template>
      </Column>
      <Column header="Status" field="status" sortable>
        <template #body="{ data }">
          <Tag value="Selesai" severity="success" class="whitespace-nowrap" />
        </template>

      </Column>
      <Column header="Metode Pembayaran" filterField="paymentMethod" dataType="text" class="min-w-[12rem]" sortable>
        <template #body="{ data }">
          Bank Transfer
        </template>
        <template #filter="{ filterModel }">
          <InputText v-model="filterModel.value" type="text" placeholder="Cari Metode Pembayaran" />

        </template>
      </Column>
      <Column header="Tanggal Transaksi" filterField="date" dataType="date" class="min-w-[12rem]" sortable>
        <template #body="{ data }">
          {{ formatDate(data.created_at) }}
        </template>
        <template #filter="{ filterModel }">
          <DatePicker v-model="filterModel.value" dateFormat="mm/dd/yy" placeholder="mm/dd/yyyy" />
        </template>
      </Column>
      <Column field="id" header="Action" bodyClass="text-center" class="min-w-[10rem]" sortable>
        <template #body="{ data }">
          <div class="flex gap-4 items-center">
            <Button icon="pi pi-external-link" severity="info" text v-tooltip.bottom="'Detail Pesanan'" as="router-link"
              :to="{ name: 'order-detail', params: { id: data.id } }" />
          </div>
        </template>
      </Column>
    </DataTable>
  </div>
</template>
