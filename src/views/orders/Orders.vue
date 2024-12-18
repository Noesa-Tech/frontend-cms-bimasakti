<script setup lang="ts">
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

  import { OrderStore } from '@/store/order'

  const popovers = ref<Record<number, HTMLElement | null>>({}); 
  const opPhone = ref();
  const opCancelConfirm = ref();
  const confirm = useConfirm();
  const toast = useToast();
  const dt = ref();
  const $order = OrderStore()

  const reactiveKey = ref<number>(0);
  const filters1 = ref<any>({
      global: { value: null, matchMode: FilterMatchMode.CONTAINS },
      noInvoice: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
      name: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
      email: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
      phone: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
      vendor: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
      date: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }] },
      status: { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
      paymentMethod: { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
  });

  const statuses = reactive([1, 2, 3, 4, 5]);
  const paymentMethods = reactive(["Transfer Bank", "Virtual Account(VA)", "GoPay", "OVO"]);

  function getSeverity(status: string) {
    if(status === "order_confirmed"){
      return "contrast";
    }else if(status === "in_process"){
      return "warn";
    }else if(status === "on_the_way"){
      return "info";
    }else if(status === "work_started"){
      return "help";
    }else if(status === "waiting_for_payment"){
      return "secondary";
    }else if(status === "completed"){
      return "success";
    }else{
      "unknown"
    }
  }

  const items = computed(() => {
    return $order.allOrder || []
  });

  onMounted(async() => {
    await $order.fetchOrder()
  })

  function formatDate(value:any) {
    return value.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  }

  const exportCSV = () => {
    dt.value.exportCSV();
  };

  const confirm2 = (event:any) => {
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
  const confirmNext = (event:any) => {
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

  const togglePhone = (event) => {
    opPhone.value.toggle(event);
  };
  const toggleConfirm = (event) => {
    opCancelConfirm.value.toggle(event);
  };
  const expandedRows = ref({});
</script>
<template>
  <TopBreadcrumb :breadcrumbItems="[{ label: 'Pesanan' }]" />
  <div class="card mt-8">
    <div class="font-semibold text-xl mb-4">Data Pesanan</div>
    <!-- :filters="filters1" -->
    <DataTable ref="dt" :key="reactiveKey" v-model:expandedRows="expandedRows" :value="items" :paginator="true" :rows="10" dataKey="id"
      :rowHover="true" v-model:filters="filters1" filterDisplay="menu" :loading="$order.isLoading"
      :globalFilterFields="['noInvoice', 'name', 'email', 'items', 'phone', 'location', 'vendor', 'date', 'status']"
      showGridlines scrollable>
      <template #header>
        <div class="flex flex-col md:flex-row items-center justify-between gap-4">
          <h4 class="m-0 p-0"></h4>
          <div class="flex items-center gap-4 md:order-2 order-1">
            <div class="hidden md:flex"><Button type="button" icon="pi pi-download" outlined label="Unduh"
                @click="exportCSV()" /></div>
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
      <template #empty> No order found. </template>
      <template #loading> Loading order data. Please wait. </template>
      <Column expander class="w-[5rem]" />
      <Column sortable field="noInvoice" header="Invoice" class="min-w-[15rem]">
        <template #body="{ data }">
          {{ data.invoice }}
        </template>
        <template #filter="{ filterModel }">
          <InputText v-model="filterModel.value" type="text" placeholder="Cari Invoice" />
        </template>
      </Column>
      <Column sortable field="name" header="Nama Pemesan" class="min-w-[15rem]">
        <template #body="{ data }">
          {{ data.user.name }}
        </template>
        <template #filter="{ filterModel }">
          <InputText v-model="filterModel.value" type="text" placeholder="Cari Nama" />
        </template>
      </Column>
      <Column sortable field="email" header="Email" class="min-w-[15rem]">
        <template #body="{ data }">
          {{ data.user.email }}
        </template>
        <template #filter="{ filterModel }">
          <InputText v-model="filterModel.value" type="text" placeholder="Cari Email" />
        </template>
      </Column>
      <Column sortable field="phone" header="Nomor Hp" class="min-w-[15rem]">
        <template #body="{ data }">
          <Button :label="data.user.phone" text @click="togglePhone" iconPos="right" icon="pi pi-angle-down" />
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
        </template>
        <template #filter="{ filterModel }">
          <InputText v-model="filterModel.value" type="text" placeholder="Cari Nomor HP" />
        </template>
      </Column>
      <Column sortable header="Lokasi" filterField="location" class="min-w-[20rem]">
        <template #body="{ data }">
          <p>
            {{ data.location }}
            <!-- {{ data.location.address }},{{ data.location.village }},{{ data.location.distric }},{{ data.location.city
            }},{{ data.location.country }} -->
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
          <Button @click="toggle($event, data.id)" :label="data.order_service.length + ' Layanan'" severity="info" outlined
            icon="pi pi-angle-down" iconPos="right" />
          <Popover :ref="el => setPopoverRef(data.id, el as any)" class="p-0 min-w-[20rem]">
            <div class="flex flex-col gap-6">
              <div>
                <div class="flex items-start gap-1 mb-2">
                  <p class="m-0 font-semibold">{{ data.service.name }}</p>
                </div>
                <div class="flex flex-col gap-2 pl-4">
                  <li v-for="(category, index) in data.order_service" :key="index">{{ category.service_sub_problem.name }} (x{{ category.qty }})
                  </li>
                </div>
              </div>
            </div>
          </Popover>
        </template>
      </Column>
      <Column sortable field="total" header="Total Harga" class="min-w-[15rem]">
        <template #body="{ data }">
          <span v-if="data.total_fee">Rp{{ formatPrice(data.total_fee) }}</span>
          <span v-else>Harga belum ditentukan</span>
        </template>
        <template #filter="{ filterModel }">
          <InputText v-model="filterModel.value" type="text" placeholder="Cari Nama" />
        </template>
      </Column>
      <Column sortable header="Status" field="status" :filterMenuStyle="{ width: '14rem' }" class="min-w-[20rem]">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="getSeverity(data.status)" class="whitespace-nowrap" />
        </template>
        <template #filter="{ filterModel }">
          <Select v-model="filterModel.value" :options="statuses" placeholder="Pilih" showClear>
            <template #value="slotProps">
              <Tag v-if="slotProps.value" :value="slotProps.value"
                :severity="getSeverity(slotProps.value)" />
            </template>
            <template #option="slotProps">
              <Tag :value="slotProps.option" :severity="getSeverity(slotProps.option)" />
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
          {{ data.created_at }}
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
      <template #expansion="slotProps">
        <div class="pl-[2.8rem] flex flex-col gap-4">
          <div v-for="(item, index) in slotProps.data.order_service" :key="index" class="">
            <DataTable :value="item.category" class="max-w-fit">
              <template #header>
                <div class="flex justify-between gap-4 items-center">
                  <h6 class="m-0">{{ index + 1 }}. Layanan {{ item.service_sub_problem.name }}</h6>
                  <Button label="Simpan" icon="pi pi-save" />
                </div>
              </template>
              <Column field="label" header="Jenis" class="min-w-[20rem]" sortable>
                <template #body="slotProps">
                 usedhjbeb tes tes tes
                  </template>
              </Column>
              <!-- <Column field="qty" header="Qty" class="min-w-[20rem]" sortable>
                <template #body="{ data }">
                  <Inplace>
                    <template #display>{{ formatPrice(data.qty) }} <span class="pi pi-pencil"></span> </template>
                    <template #content="{ closeCallback }">
                      <span class="inline-flex items-center gap-2">
                        <InputNumber v-model="data.qty" autofocus inputId="integeronly" :min="0" :max="100" />
                        <Button icon="pi pi-times" text severity="danger" @click="closeCallback" />
                      </span>
                    </template>
                  </Inplace>
                </template>
              </Column> -->
              <!-- <Column field="price" header="Harga Satuan" class="min-w-[20rem]" sortable>
                <template #body="{ data }">
                  <Inplace>
                    <template #display>Rp{{ formatPrice(data.price) }} <span class="pi pi-pencil"></span> </template>
                    <template #content="{ closeCallback }">
                      <span class="inline-flex items-center gap-2">
                        <InputNumber v-model="data.price" autofocus inputId="integeronly" />
                        <Button icon="pi pi-check" outlined severity="success" @click="closeCallback" />
                      </span>
                    </template>
                  </Inplace>
                </template>
              </Column>
              <Column field="subTotal" header="Sub Total" class="min-w-[20rem]" sortable>
                <template #body="{ data }"> Rp{{ formatPrice(data.qty * data.price) }} </template>
              </Column>
              <ColumnGroup type="footer">
                <Row>
                  <Column footer="Totals:" :colspan="3" footerStyle="text-align:right" />
                  <Column :footer="'Rp' + formatPrice(200000)" />
                </Row>
              </ColumnGroup> -->
            </DataTable>
          </div>
        </div>
      </template>
    </DataTable>
  </div>
  <ConfirmPopup></ConfirmPopup>
</template>