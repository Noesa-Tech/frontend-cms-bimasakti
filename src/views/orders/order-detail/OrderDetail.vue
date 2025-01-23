<script setup lang="ts">
import { OrderStore } from '@/store/order'
import { PropertyStore } from '@/store/property'

const route = useRoute();
const $order = OrderStore();
const $property = PropertyStore()

const item = ref({
  noInvoice: "",
  name: "",
  email: "",
  phone: "",
  property_name: "",
  property_fee: 0,
  subtotal_fee: 0,
  ladder_fee: 0,
  total_fee: 0,
  vendorName: "",
  vendor: {
    id: 1000,
    name: "PT. Air Conditioner",
    services: [
      {
        id: 1,
        title: "Service AC",
      },
      {
        id: 2,
        title: "Home Cleaning",
      },
    ],
    location: "Jakarta Timur",
    date: "2015-09-13",
    status: 1,
    code: "XDJEIS",
  },

  location: {
    country: "Jawa Barat",
    city: "Kota Bandung",
    distric: "Ciheulang",
    village: "Sekeloa Selatan",
    address: "Jl. Sekeloa II, No. 50, RT/11 RW/11",
  },
  items: [
    {
      id: 1,
      label: "Service Rutin",
      status: true,
      isDefault: true,
      price: 50000,
      category: [
        { label: "AC 0.5 pk", qty: 3, isDefault: true, price: 50000 },
        { label: "AC 1 pk", desc: "lorem ipsum dolor sit amet", qty: 4, isDefault: true, price: 50000 },
        { label: "AC 1.5 pk", desc: "lorem ipsum dolor sit amet", qty: 5, isDefault: true, price: 50000 },
      ],
    },
    {
      id: 2,
      label: "AC tidak Dingin",
      status: true,
      isDefault: true,
      price: 100000,
      category: [{ label: "AC 0.5 pk", qty: 2, isDefault: true, price: 50000 }],
    },
  ],
  date: "",
  updated_at: "",
  status: 2,
});

function formatDate(value: any) {
  const date = new Date(value);

  const options = {
    day: "2-digit",
    month: "long", 
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Asia/Jakarta", 
    timeZoneName: "short",
  };

  const formatter = new Intl.DateTimeFormat("id-ID", options);
  const formattedDate = formatter.format(date);

  return formattedDate;
}

onMounted(async () => {
  await $order.detailOrder(route.params.id)

  item.value.noInvoice = $order.detail.invoice
  item.value.name = $order.detail.user.name
  item.value.email = $order.detail.user.email
  item.value.phone = $order.detail.user.phone

  item.value.vendor.name = $order.detail?.vendor_id?.name
  item.value.vendor.services = $order.detail.service.name
  item.value.vendor.location = $order.detail.service.name

  item.value.location.address = $order.detail.location

  item.value.date = $order.detail.date_appointment
  item.value.updated_at = formatDate($order.detail.updated_at)
  item.value.property_fee = $order.detail.fee_properties
  item.value.property_name = $order.detail.properties.name
  item.value.subtotal_fee = $order.detail.subtotal_fee
  item.value.total_fee = $order.detail.total_fee
  item.value.ladder_fee = $order.detail.ladder_fee
  item.value.vendorName = $order.detail.vendor_id?.name ?? 'vendor belum ditentukan'

  let orders = []
  $order.detail.order_service.forEach((el: any, index: number) => {
    let serviceOrder = {
      label: el.service_sub_problem.service_problem.name,
      category: []
    }

    let ctg = {
      label: el.service_sub_problem.name,
      qty: el.qty,
      price: el.fee ? parseInt(el.fee) : "harga belum ditentukan"
    }

    serviceOrder.category.push(ctg)
    orders.push(serviceOrder)
  });

  item.value.items = orders
});
</script>
<template>
  <TopBreadcrumb :breadcrumbItems="[{ label: 'Pesanan', route: '/pesanan' }, { label: item.noInvoice }]" />
  <div class="card flex flex-col md:gap-6 gap-1 mt-8">
    <div class="flex items-start justify-between">
      <img src="https://www.bimasakti.homes/_next/image?url=%2Flogo.png&w=1080&q=75" alt="Logo"
        class="md:h-[32px] h-[12px]" />
      <div class="flex flex-col items-end text-right">
        <h5 class="md:text-sm sm:text-base text-[0.5rem] m-0">INVOICE</h5>
        <p class="md:text-sm sm:text-base text-[0.4rem] text-primary m-0">{{ item.noInvoice }}</p>
      </div>
    </div>
    <div class="flex items-start gap-2">
      <div class="w-1/2">
        <h6 class="md:text-sm sm:text-base text-[0.4rem] md:mb-2 mb-1">DITERBITKAN ATAS NAMA</h6>
        <div class="flex flex-col md:gap-2 gap-1">
          <div class="flex">
            <p class="md:text-sm sm:text-base text-[0.4rem] m-0 text-muted-color w-2/12">Jasa</p>
            <p class="md:text-sm sm:text-base text-[0.4rem] m-0 font-semibold">: BIMASAKTI HOMES</p>
          </div>
          <div class="flex">
            <p class="md:text-sm sm:text-base text-[0.4rem] m-0 text-muted-color w-2/12">Vendor</p>
            <p class="md:text-sm sm:text-base text-[0.4rem] m-0 font-semibold">: {{ item.vendorName }}</p>
          </div>
        </div>
      </div>
      <div class="w-1/2">
        <h6 class="md:text-sm sm:text-base text-[0.4rem] md:mb-2 mb-1">UNTUK</h6>
        <div class="flex flex-col md:gap-2 gap-1">
          <div class="flex gap-2">
            <p class="md:text-sm sm:text-base text-[0.4rem] m-0 text-muted-color w-4/12">Pemesan</p>
            <span class="md:text-sm sm:text-base text-[0.4rem] font-semibold">:</span>
            <p class="md:text-sm sm:text-base text-[0.4rem] m-0 font-semibold w-6/12">{{ item.name }}</p>
          </div>
          <div class="flex gap-2">
            <p class="md:text-sm sm:text-base text-[0.4rem] m-0 text-muted-color w-4/12">Tanggal Pemesanan</p>
            <span class="md:text-sm sm:text-base text-[0.4rem] font-semibold">:</span>
            <p class="md:text-sm sm:text-base text-[0.4rem] m-0 font-semibold w-6/12">{{ item.date }}</p>
          </div>
          <div class="flex gap-2">
            <p class="md:text-sm sm:text-base text-[0.4rem] m-0 text-muted-color w-4/12">Alamat Pemesanan</p>
            <span class="md:text-sm sm:text-base text-[0.4rem] font-semibold">:</span>
            <div class="w-6/12">
              <p class="md:text-sm sm:text-base text-[0.4rem] m-0 font-semibold">{{ item.name }} (+{{ item.phone }})</p>
              <p class="md:text-sm sm:text-base text-[0.4rem] m-0">
                {{ item.location.address }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col md:gap-4 gap-1">
      <div class="md:h-1 sm:h-1 h-[0.2rem] bg-surface-500 w-full"></div>
      <div class="flex gap-2 px-4">
        <h6 class="md:text-sm sm:text-base text-[0.4rem] m-0 w-6/12">INFO LAYANAN</h6>
        <h6 class="md:text-sm sm:text-base text-[0.4rem] m-0 w-2/12">JUMLAH</h6>
        <h6 class="md:text-sm sm:text-base text-[0.4rem] m-0 w-2/12 text-end">HARGA SATUAN</h6>
        <h6 class="md:text-sm sm:text-base text-[0.4rem] m-0 w-2/12 text-end">TOTAL HARGA</h6>
      </div>
      <div class="md:h-1 sm:h-1 h-[0.2rem] bg-surface-500 w-full"></div>
      <div class="px-4" v-for="(order, index) in item.items" :key="index">
        <h5 class="md:text-sm sm:text-base text-[0.5rem] m-0 text-primary">{{ order.label }}</h5>
        <div class="flex flex-col md:gap-2 gap-1 md:mt-2 mt-1">
          <div class="flex gap-2 pl-4" v-for="(category, index) in order.category" :key="index">
            <div class="w-6/12">
              <h6 class="md:text-sm sm:text-base text-[0.4rem] m-0 font-normal text-muted-color">• {{ category.label }}
              </h6>
            </div>

            <h6 class="md:text-sm sm:text-base text-[0.4rem] m-0 font-normal w-2/12 text-start">{{ category.qty }}</h6>
            <h6 v-if="typeof category.price === 'string'"
              class="md:text-sm sm:text-base text-[0.4rem] m-0 font-normal w-2/12 text-end">harga belum ditentukan</h6>
            <h6 v-if="typeof category.price === 'string'"
              class="md:text-sm sm:text-base text-[0.4rem] m-0 font-normal w-2/12 text-end">harga belum ditentukan</h6>

            <h6 v-if="typeof category.price === 'number'"
              class="md:text-sm sm:text-base text-[0.4rem] m-0 font-normal w-2/12 text-end">Rp{{
                formatPrice(category.price) }}</h6>
            <h6 v-if="typeof category.price === 'number'"
              class="md:text-sm sm:text-base text-[0.4rem] m-0 font-normal w-2/12 text-end">Rp{{
                formatPrice(category.price * category.qty) }}</h6>
          </div>
        </div>
      </div>
      <Divider />
      <div class="flex gap-2 px-4">
        <div class="w-1/2"></div>
        <div class="w-1/2 flex flex-col md:gap-2 gap-1">
          <div class="flex justify-between gap-2">
            <p class="md:text-sm sm:text-base text-[0.4rem] m-0">Subtotal Harga Barang</p>
            <p class="md:text-sm sm:text-base text-[0.4rem] m-0 text-end">Rp{{ formatPrice(item.subtotal_fee) }}</p>
          </div>
          <div class="flex justify-between gap-2">
            <p class="md:text-sm sm:text-base text-[0.4rem] m-0">Diskon</p>
            <p class="md:text-sm sm:text-base text-[0.4rem] m-0 text-end">{{ item.subtotal_fee < 1
              ? 'harga belum ditentukan' : 'Rp' +formatPrice(0) }}</p>
          </div>
          <div class="flex justify-between items-center gap-2">
            <p class="md:text-sm sm:text-base text-[0.4rem] m-0">Jenis Property<br /><span
                class="font-semibold">({{ item.property_name }})</span></p>
            <p class="md:text-sm sm:text-base text-[0.4rem] m-0 text-end">Rp{{ formatPrice(item.property_fee) }}</p>
          </div>
          <div class="flex justify-between items-center gap-2">
            <p class="md:text-sm sm:text-base text-[0.4rem] m-0">Butuh Tangga<br /><span
                class="font-semibold">(Butuh)</span></p>
            <p class="md:text-sm sm:text-base text-[0.4rem] m-0 text-end">Rp{{ formatPrice(item.ladder_fee) }}</p>
          </div>
          <Divider />
          <div class="flex justify-between gap-2">
            <h5 class="md:text-sm sm:text-base text-[0.5rem] m-0">Total Biaya</h5>
            <h5 class="md:text-sm sm:text-base text-[0.5rem] m-0 text-end">{{ item.total_fee < 1
              ? 'harga belum ditentukan' : 'Rp' + formatPrice(item.total_fee) }}</h5>
          </div>
        </div>
      </div>
      <Divider />
      <div class="flex gap-2 px-4 items-center">
        <div class="w-1/2">
          <p class="md:text-sm sm:text-base text-[0.4rem] m-0"><i class="pi pi-shield mr-2 assurance-icon"></i>Asuransi
            Jasa Bimasakti Homes</p>
          <p class="md:text-xs sm:text-sm text-[0.3rem] m-0 ml-6">Harga sudah termasuk ppn 12%</p>
        </div>
        <div class="w-1/2">
          <p class="md:text-sm sm:text-base text-[0.4rem] m-0 text-muted-color">Metode Pembayaran:</p>
          <h6 class="md:text-sm sm:text-base text-[0.4rem] m-0">Bank Transfer</h6>
        </div>
      </div>
      <Divider />
      <div class="flex gap-2 px-4 items-end">
        <p class="md:text-sm sm:text-base text-[0.4rem] m-0 w-1/2">
          Invoice ini sah dan diproses oleh komputer Silakan hubungi Bimasakti Homes apabila kamu membutuhkan bantuan.
        </p>
        <p class="md:text-sm sm:text-base text-[0.4rem] m-0 w-1/2 italic text-end">Terakhir diupdate: {{ item.updated_at }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media (max-width: 480px) {
  .assurance-icon {
    font-size: 0.5rem !important;
  }
}
</style>
