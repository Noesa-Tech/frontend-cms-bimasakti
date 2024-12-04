<script setup>
import { OrderService } from "@/service/OrderService";
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
const opPhone = ref();
const confirm = useConfirm();
const toast = useToast();
const dt = ref();
const orderData = ref(null);
const filters1 = ref(null);
const loading1 = ref(null);
const vendorsData = ref(null);

const statuses = reactive([1, 2, 3, 4, 5]);

function getSeverity(status) {
  switch (status) {
    case 1:
      return "contrast";
    case 2:
      return "secondary";
    case 3:
      return "warn";
    case 4:
      return "info";
    case 5:
      return "success";
    case 6:
      return "danger";
  }
}

function getStatusName(status) {
  switch (status) {
    case 1:
      return "Menunggu Pembayaran";
    case 2:
      return "Diproses";
    case 3:
      return "Jasa Menuju Alamat";
    case 4:
      return "Memulai Pekerjaan";
    case 5:
      return "Selesai";
    case 6:
      return "Dibatalkan";
  }
}

onBeforeMount(() => {
  OrderService.getOrders().then((data) => {
    orderData.value = data;
    loading1.value = false;
    orderData.value.forEach((order) => (order.date = new Date(order.date)));
  });
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
    noInvoice: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
    name: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
    email: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
    phone: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
    vendor: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
    // "location.address,  location.village,  location.distric,  location.city, location.country": {
    //   operator: FilterOperator.AND,
    //   constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
    // },
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
    message: "Yakin ingin membatalkan pesanan ini?",
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
      toast.add({ severity: "info", summary: "Confirmed", detail: "Pesanan dibatalkan", life: 3000 });
    },
    reject: () => {
      toast.add({ severity: "error", summary: "Rejected", detail: "You have rejected", life: 3000 });
    },
  });
};
const confirmNext = (event) => {
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
      toast.add({ severity: "info", summary: "Confirmed", detail: "Pesanan sudah diteruskan", life: 3000 });
    },
    // reject: () => {
    //   toast.add({ severity: "error", summary: "Rejected", detail: "You have rejected", life: 3000 });
    // },
  });
};

const toggle = (event) => {
  op.value.toggle(event);
};
const togglePhone = (event) => {
  opPhone.value.toggle(event);
};
</script>
<template>
  <div class="card">
    <div class="font-semibold text-xl mb-4">Data Pesanan</div>
    <DataTable
      ref="dt"
      :value="orderData"
      :paginator="true"
      :rows="10"
      dataKey="id"
      :rowHover="true"
      v-model:filters="filters1"
      filterDisplay="menu"
      :loading="loading1"
      :filters="filters1"
      :globalFilterFields="['noInvoice', 'name', 'email', 'items', 'phone', 'location', 'vendor', 'date', 'status']"
      showGridlines
      scrollable
    >
      <template #header>
        <div class="flex flex-col md:flex-row items-center justify-between gap-4">
          <h4 class="m-0 p-0"></h4>
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
      <Column sortable field="noInvoice" header="Invoice" class="min-w-[15rem]">
        <template #body="{ data }">
          {{ data.noInvoice }}
        </template>
        <template #filter="{ filterModel }">
          <InputText v-model="filterModel.value" type="text" placeholder="Cari Invoice" />
        </template>
      </Column>
      <Column sortable field="name" header="Nama Pemesan" class="min-w-[15rem]">
        <template #body="{ data }">
          {{ data.name }}
        </template>
        <template #filter="{ filterModel }">
          <InputText v-model="filterModel.value" type="text" placeholder="Cari Nama" />
        </template>
      </Column>
      <Column sortable field="email" header="Email" class="min-w-[15rem]">
        <template #body="{ data }">
          {{ data.email }}
        </template>
        <template #filter="{ filterModel }">
          <InputText v-model="filterModel.value" type="text" placeholder="Cari Email" />
        </template>
      </Column>
      <Column sortable field="phone" header="Nomor Hp" class="min-w-[15rem]">
        <template #body="{ data }">
          <Button :label="'+' + data.phone" text @click="togglePhone" iconPos="right" icon="pi pi-angle-down" />
          <Popover ref="opPhone">
            <div class="flex flex-col gap-4 w-[25rem]">
              <div>
                <h6 class="mb-0">Opsi Nomor Telepon</h6>
                <Divider />
              </div>
              <InputGroup>
                <InputText :value="'+' + data.phone" readonly class="w-[25rem]"></InputText>
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
        </template>
        <template #filter="{ filterModel }">
          <InputText v-model="filterModel.value" type="text" placeholder="Cari Nomor HP" />
        </template>
      </Column>
      <Column sortable header="Lokasi" filterField="location" class="min-w-[20rem]">
        <template #body="{ data }">
          <p>
            {{ data.location.address }},{{ data.location.village }},{{ data.location.distric }},{{ data.location.city }},{{ data.location.country }}
          </p>
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
      <Column sortable header="Layanan" filterField="items" class="min-w-[12rem]">
        <template #body="{ data }">
          <Button @click="toggle" :label="data.items.length + ' Layanan'" severity="info" outlined icon="pi pi-angle-down" iconPos="right" />
          <Popover ref="op" class="p-0 min-w-[20rem]">
            <div class="flex flex-col gap-6">
              <div v-for="(item, index) in data.items" :key="index">
                <div class="flex items-start gap-1 mb-2">
                  <p class="m-0 font-semibold">{{ index + 1 }}.</p>
                  <p class="m-0 font-semibold">{{ item.label }}</p>
                </div>
                <div class="flex flex-col gap-2 pl-4">
                  <li v-for="(category, index) in item.category" :key="index">{{ category.label }} (x{{ category.qty }})</li>
                </div>
              </div>
            </div>
          </Popover>
        </template>
        <!-- <template #filter="{ filterModel }">
          <InputText v-model="filterModel.value" type="text" placeholder="Cari Layanan" />
        </template> -->
      </Column>

      <Column sortable header="Status" field="status" :filterMenuStyle="{ width: '14rem' }" class="min-w-[20rem]">
        <template #body="{ data }">
          <Tag :value="getStatusName(data.status)" :severity="getSeverity(data.status)" class="whitespace-nowrap" />
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
      <Column sortable field="vendor" header="Vendor Pilihan" class="min-w-[15rem]">
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
            <Select v-model="data.vendor" :options="vendorsData" filter optionLabel="name" placeholder="Pilih Vendor" class="w-[15rem]" />
          </div>
        </template>
        <template #filter="{ filterModel }">
          <InputText v-model="filterModel.value" type="text" placeholder="Cari Vendor" />
        </template>
      </Column>
      <Column sortable header="Tanggal Pesanan" filterField="date" dataType="date" class="min-w-[20rem]">
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
            <Button
              icon="pi pi-external-link"
              severity="info"
              text
              v-tooltip.bottom="'Detail Pesanan'"
              as="router-link"
              :to="{ name: 'order-detail', params: { id: data.id } }"
            />
            <Button icon="pi pi-send" severity="success" text v-tooltip.bottom="'Teruskan Pesanan'" @click="confirmNext($event)" />
            <Button icon="pi pi-times" severity="danger" text v-tooltip.bottom="'Batalkan'" @click="confirm2($event)" />
          </div>
        </template>
      </Column>
    </DataTable>
  </div>
  <Toast />
  <ConfirmPopup></ConfirmPopup>
</template>
