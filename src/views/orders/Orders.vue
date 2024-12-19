<script setup lang="ts">
import Accordion from 'primevue/accordion';
import AccordionPanel from 'primevue/accordionpanel';
import AccordionHeader from 'primevue/accordionheader';
import AccordionContent from 'primevue/accordioncontent';

import { FilterMatchMode, FilterOperator } from "@primevue/core/api";
import { reactive, ref } from "vue";
import DatePicker from "primevue/datepicker";
import Select from "primevue/select";
import { useConfirm } from "primevue/useconfirm";
import { useToast } from "primevue/usetoast";
import ConfirmPopup from "primevue/confirmpopup";
import Popover from "primevue/popover";

import { OrderStore } from '@/store/order'

const popovers = ref<Record<number, HTMLElement | null>>({});
const opPhone = ref();
const opCancelConfirm = ref();
const confirm = useConfirm();
const toast = useToast();
const dt = ref();
const $order = OrderStore()

const reactiveKey = ref<number>(0);
const filters = ref<any>({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  noInvoice: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
  'user.name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
  'user.email': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
  'user.phone': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
  'service.name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
  'properties.name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
  location: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
  vendor: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
  total_fee: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
  date: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }] },
  status: { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
  paymentMethod: { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
});

const statuses = reactive(['order_confirmed', 'in_process', 'on_the_way', 'work_started', 'waiting_for_payment', 'completed']);
const paymentMethods = reactive(["Transfer Bank", "Virtual Account(VA)", "GoPay", "OVO"]);

function getSeverity(status: string) {
  switch (status) {
    case 'order_confirmed':
      return "contrast";
    case 'in_process':
      return "warn";
    case 'on_the_way':
      return "info";
    case 'work_started':
      return "help";
    case 'waiting_for_payment':
      return "secondary";
    case 'completed':
      return "success";
    default:
      return "default"
  }
}
function getStatus(status: string) {
  switch (status) {
    case 'order_confirmed':
      return "Pesanan Terkonfirmasi";
    case 'in_process':
      return "Pesanan Diproses";
    case 'on_the_way':
      return "Menuju Lokasi";
    case 'work_started':
      return "Sedang Dikerjakan";
    case 'waiting_for_payment':
      return "Menunggu Pembayaran";
    case 'completed':
      return "Selesai";
    default:
      return "-"
  }
}
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

const items = computed(() => {
  return $order.allOrder || []
});

onMounted(async () => {
  await $order.fetchOrder()
})

function formatDate(value: any) {
  const date = new Date(value);
  return date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

const confirm2 = (event: any) => {
  confirm.require({
    target: event.currentTarget,
    message: "Yakin ingin membatalkan pesanan ini?",
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

const confirmNext = (event: any) => {
  confirm.require({
    target: event.currentTarget,
    message: "Yakin ingin meneruskan pesanan ini kepada vendor 'PT Air Conditioner'?",
    icon: "pi pi-info-circle",
    rejectProps: {
      label: "Batal",
      severity: "secondary",
      outlined: true,
    },
    acceptProps: {
      label: "Teruskan",
      severity: "success",
    },
    accept: () => {

    },
    reject: () => {

    },
  });
};

const toggle = (event: any, orderId: number) => {
  const popoverRef = popovers.value[orderId];
  if (popoverRef) {
    (popoverRef as any).toggle(event);
  }
};

const setPopoverRef = (orderId: number, el: HTMLElement | null) => {
  popovers.value[orderId] = el;
};

const togglePhone = (event: any) => {
  opPhone.value.toggle(event);
};
const toggleConfirm = (event: any) => {
  opCancelConfirm.value.toggle(event);
};

const exportCSV = (event: any) => {
  dt.value.exportCSV();
};

</script>
<template>
  <TopBreadcrumb :breadcrumbItems="[{ label: 'Pesanan' }]" />
  <div class="card mt-8">
    <div class="font-semibold text-xl mb-4">Data Pesanan</div>
    <DataTable ref="dt" :key="reactiveKey" :value="items" :paginator="true" :rows="10" dataKey="id"
      v-model:filters="filters" filterDisplay="menu" :loading="$order.isLoading"
      :globalFilterFields="['noInvoice', 'user.name', 'user.email', 'user.phone', 'items', 'location', 'service.name', 'properties.name', 'total_fee', 'vendor', 'date', 'status']"
      showGridlines scrollable>
      <template #header>
        <div class="flex flex-col md:flex-row justify-between gap-4">
          <Button type="button" icon="pi pi-plus" label="Tambah Pesanan" class="md:order-1 order-2" as="router-link"
            :to="{ name: 'orders-add' }" />
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
      <template #empty> No order found. </template>
      <template #loading> Loading order data. Please wait. </template>
      <Column sortable field="noInvoice" header="Invoice" class="min-w-[15rem]">
        <template #body="{ data }">
          {{ data.invoice }}
        </template>
        <template #filter="{ filterModel }">
          <InputText v-model="filterModel.value" type="text" placeholder="Cari Invoice" />
        </template>
      </Column>
      <Column sortable field="user.name" header="Pelanggan" class="min-w-[15rem]">
        <template #body="{ data }">
          <div class="text-start ">
            <h6 class="m-0">{{ data.user.name }}</h6>
            <p class="m-0 text-sm text-muted-color">{{ data.user.email }}</p>
            <p class="m-0 text-sm text-primary  cursor-pointer  hover:text-primary-300 transition-all max-w-fit"
              @click="togglePhone">{{ data.user.phone }}<i class="pi pi-angle-down ml-2" style="font-size: 0.8rem"></i>
            </p>
            <Popover ref="opPhone">
              <div class="flex flex-col gap-4 w-[25rem]">
                <div>
                  <h6 class="mb-0">Opsi Nomor Telepon</h6>
                  <Divider />
                </div>
                <InputGroup>
                  <InputText :value="data.user.phone" readonly class="w-[25rem]"></InputText>
                  <InputGroupAddon>
                    <Button icon="pi pi-phone" />
                  </InputGroupAddon>
                </InputGroup>
                <div class="flex gap-4 items-center">
                  <Divider />
                  <p class="m-0 text-center text-muted-color text-sm">Atau</p>
                  <Divider />
                </div>
                <div class="flex flex-col gap-2">
                  <label for="message">Kirim Pesan</label>
                  <Textarea id="message" />
                </div>
                <Button icon="pi pi-send" label="Kirim Pesan" iconPos="right" />
              </div>
            </Popover>
          </div>
        </template>
        <template #filter="{ filterModel }">
          <InputText v-model="filterModel.value" type="text" placeholder="Cari Pelanggan" />
        </template>
      </Column>
      <Column sortable header="Lokasi" filterField="location" class="min-w-[24rem]">
        <template #body="{ data }">
          {{ data.location }}
        </template>
        <template #filter="{ filterModel }">
          <InputText v-model="filterModel.value" type="text" placeholder="Cari Kota" />
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
                      <div class="flex flex-col items-start text-start gap-4">
                        <ol v-for="(item, index) in subtab.sub_problem" :key="index" class=" list-disc list-inside">
                          <li>
                            <div class="inline-flex">
                              <div class="flex flex-col gap-1">
                                <p class="m-0 font-medium">Kategori: {{ item.name }}</p>
                                <div class="flex items-center gap-2">
                                  <p class="m-0">QTY:</p>
                                  <Inplace class="inplace-custom-display">
                                    <template #display>
                                      <p class="m-0">{{ item.qty }}<i class="pi pi-pencil ml-2"></i> </p>
                                    </template>
                                    <template #content="{ closeCallback }">
                                      <div class="flex items-center gap-2">
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
                                        <Button icon="pi pi-check" outlined severity="success" @click="closeCallback" />
                                      </div>
                                    </template>
                                  </Inplace>
                                </div>
                                <div class="flex items-center gap-2">
                                  <p class="m-0">Harga:</p>
                                  <Inplace class="inplace-custom-display">
                                    <template #display>
                                      <p class="m-0">Rp{{ formatPrice(item.price) }}<i class="pi pi-pencil ml-2"></i>
                                      </p>
                                    </template>
                                    <template #content="{ closeCallback }">
                                      <div class="flex items-center gap-2">
                                        <InputNumber v-model="item.price" type="text" placeholder="Cari Harga"
                                          inputId="currency-indonesia" mode="currency" currency="IDR" locale="id-ID"
                                          :minFractionDigits="0" />
                                        <Button icon="pi pi-check" outlined severity="success" @click="closeCallback" />
                                      </div>
                                    </template>
                                  </Inplace>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ol>
                      </div>
                    </AccordionContent>
                  </AccordionPanel>
                </Accordion>
              </AccordionContent>
            </AccordionPanel>
          </Accordion>
        </template>
      </Column>
      <Column field="properties.name" header="Jenis Property" class="min-w-[15rem]" sortable>
        <template #body="{ data }">
          <div>
            <p class="m-0">
              {{ data.properties.name }}
            </p>
            <Badge v-if="data.isLadderRequired" :value="ladderStatus(data.isLadderRequired) ?? ''" size="small"
              class="mb-2" />
            <Inplace class="inplace-custom-display">
              <template #display>
                <p class="m-0">Rp{{ formatPrice(data.properties.fee) }}<i class="pi pi-pencil ml-2"></i>
                </p>
              </template>
              <template #content="{ closeCallback }">
                <div class="flex items-center gap-2">
                  <InputNumber v-model="data.properties.fee" type="text" placeholder="Cari Harga"
                    inputId="currency-indonesia" mode="currency" currency="IDR" locale="id-ID" :minFractionDigits="0" />
                  <Button icon="pi pi-check" outlined severity="success" @click="closeCallback" />
                </div>
              </template>
            </Inplace>
          </div>
        </template>
        <template #filter="{ filterModel }">
          <InputText v-model="filterModel.value" type="text" placeholder="Cari Property" />
        </template>
      </Column>
      <Column sortable field="total_fee" header="Total Harga" class="min-w-[15rem]">
        <template #body="{ data }">
          <span v-if="data.total_fee">Rp{{ formatPrice(data.total_fee) }}</span>
          <span v-else>Harga belum ditentukan</span>
        </template>
        <template #filter="{ filterModel }">
          <InputNumber v-model="filterModel.value" type="text" placeholder="Cari Harga" inputId="currency-indonesia"
            mode="currency" currency="IDR" locale="id-ID" :minFractionDigits="0" />
        </template>
      </Column>
      <Column sortable header="Status" field="status" :filterMenuStyle="{ width: '18rem' }" class="min-w-[20rem]">
        <template #body="{ data }">
          <Tag :value="getStatus(data.status)" :severity="getSeverity(data.status)" class="whitespace-nowrap" />
        </template>
        <template #filter="{ filterModel }">
          <Select v-model="filterModel.value" :options="statuses" placeholder="Pilih" showClear>
            <template #value="slotProps">
              <Tag v-if="slotProps.value != null" :value="getStatus(slotProps.value)"
                :severity="getSeverity(slotProps.value)" />
            </template>
            <template #option="slotProps">
              <Tag :value="getStatus(slotProps.option)" :severity="getSeverity(slotProps.option)" />
            </template>
          </Select>
        </template>
      </Column>
      <Column sortable field="paymentMethod" header="Metode Pembayaran" class="min-w-[15rem]">
        <template #body="{ data }">
          Bank Transfer
        </template>
        <template #filter="{ filterModel }">
          <Select v-model="filterModel.value" :options="paymentMethods" placeholder="Pilih" showClear />
        </template>
      </Column>
      <!-- <Column sortable field="vendor" header="Vendor Pilihan" class="min-w-[15rem]">
        <template #body="{ data }">
          <div v-if="data.vendor">
            <span class="font-semibold block mb-0">{{ data.vendor.name }}</span>
            <InputGroup>
              <InputText :value="data.vendor.code" readonly class="w-[15rem]"></InputText>
              <InputGroupAddon>
                <Button icon="pi pi-copy" severity="secondary" text />
              </InputGroupAddon>
            </InputGroup>
          </div>
          <div v-else class="">
            <h6 class="m-0">Vendor Belum Dipilih</h6>
            <Select v-model="data.vendor" :options="vendorsData" filter optionLabel="name" placeholder="Pilih Vendor"
              class="w-[15rem]" />
          </div>
        </template>
        <template #filter="{ filterModel }">
          <InputText v-model="filterModel.value" type="text" placeholder="Cari Vendor" />
        </template>
      </Column> -->
      <Column sortable header="Tanggal Pesanan" filterField="date" dataType="date" class="min-w-[20rem]">
        <template #body="{ data }">
          {{ formatDate(data.created_at) }}
        </template>
        <template #filter="{ filterModel }">
          <DatePicker v-model="filterModel.value" dateFormat="mm/dd/yy" placeholder="mm/dd/yyyy" />
        </template>
      </Column>
      <Column sortable field="id" header="Action" bodyClass="text-center" class="min-w-[10rem]">
        <template #body="{ data }">
          <div class="flex gap-4 items-center">
            <Button icon="pi pi-external-link" severity="info" text v-tooltip.bottom="'Detail Pesanan'" as="router-link"
              :to="{ name: 'order-detail', params: { id: data.id } }" />
            <Button icon="pi pi-send" severity="success" text v-tooltip.bottom="'Teruskan Pesanan'"
              @click="confirmNext($event)" />
            <Button icon="pi pi-times" severity="danger" text v-tooltip.bottom="'Batalkan'"
              @click="toggleConfirm($event)" />
            <Popover ref="opCancelConfirm" class="p-0 min-w-[20rem]">
              <h6 class="mb-2">Pembatalan Pesanan</h6>
              <div class="flex flex-col gap-4">
                <div class="flex flex-col gap-2">
                  <label for="message">Beri alasan</label>
                  <Textarea id="message" />
                </div>
                <div class="flex gap-2 justify-end">
                  <Button label="Batal" severity="secondary" text @click="toggleConfirm($event)" />
                  <Button label="Submit" @click="confirm2($event)" />
                </div>
              </div>
            </Popover>
          </div>
        </template>
      </Column>
    </DataTable>
  </div>
  <ConfirmPopup></ConfirmPopup>
</template>