<script setup>
const item = ref({
  id: 1001,
  noInvoice: "INV-0938483-20241505",
  name: "Hari Nurah Nahrani",
  email: "hari@gmail.com",
  phone: "6282117688166",
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
  date: "2015-09-14",
  status: 2,
});

function formatDate(value) {
  return value.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}
</script>
<template>
  <TopBreadcrumb :breadcrumbItems="[{ label: 'Pesanan', route: '/pesanan' }, { label: item.noInvoice }]" />
  <div class="card flex flex-col md:gap-6 gap-1 mt-8">
    <div class="flex items-start justify-between">
      <img src="https://www.bimasakti.homes/_next/image?url=%2Flogo.png&w=1080&q=75" alt="Logo" class="md:h-[32px] h-[12px]" />
      <div class="flex flex-col items-end text-right">
        <h5 class="md:text-sm sm:text-base text-[0.5rem] m-0">INVOICE</h5>
        <p class="md:text-sm sm:text-base text-[0.4rem] text-primary m-0">{{ item.noInvoice }}</p>
      </div>
    </div>
    <div class="flex items-start gap-2">
      <div class="w-1/2">
        <h6 class="md:text-sm sm:text-base text-[0.4rem] md:mb-2 mb-1">DITERBITKAN ATAS NAMA</h6>
        <div class="flex">
          <p class="md:text-sm sm:text-base text-[0.4rem] m-0 text-muted-color w-2/12">Jasa</p>
          <p class="md:text-sm sm:text-base text-[0.4rem] m-0 font-semibold">: BIMASAKTI HOMES</p>
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
                {{ item.location.address }}, {{ item.location.village }}, {{ item.location.distric }}, {{ item.location.city }},
                {{ item.location.country }}
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
              <h6 class="md:text-sm sm:text-base text-[0.4rem] m-0 font-normal text-muted-color">• {{ category.label }}</h6>
            </div>
            <h6 class="md:text-sm sm:text-base text-[0.4rem] m-0 font-normal w-2/12 text-start">{{ category.qty }}</h6>
            <h6 class="md:text-sm sm:text-base text-[0.4rem] m-0 font-normal w-2/12 text-end">Rp{{ formatPrice(category.price) }}</h6>
            <h6 class="md:text-sm sm:text-base text-[0.4rem] m-0 font-normal w-2/12 text-end">Rp{{ formatPrice(category.price * category.qty) }}</h6>
          </div>
        </div>
      </div>
      <Divider />
      <div class="flex gap-2 px-4">
        <div class="w-1/2"></div>
        <div class="w-1/2 flex flex-col md:gap-2 gap-1">
          <div class="flex justify-between gap-2">
            <p class="md:text-sm sm:text-base text-[0.4rem] m-0">Subtotal Harga Barang</p>
            <p class="md:text-sm sm:text-base text-[0.4rem] m-0 text-end">Rp{{ formatPrice(200000) }}</p>
          </div>
          <div class="flex justify-between gap-2">
            <p class="md:text-sm sm:text-base text-[0.4rem] m-0">Diskon</p>
            <p class="md:text-sm sm:text-base text-[0.4rem] m-0 text-end">Rp{{ formatPrice(0) }}</p>
          </div>
          <div class="flex justify-between items-center gap-2">
            <p class="md:text-sm sm:text-base text-[0.4rem] m-0">Jenis Property<br /><span class="font-semibold">(Rumah)</span></p>
            <p class="md:text-sm sm:text-base text-[0.4rem] m-0 text-end">Rp{{ formatPrice(0) }}</p>
          </div>
          <Divider />
          <div class="flex justify-between gap-2">
            <h5 class="md:text-sm sm:text-base text-[0.5rem] m-0">Total Biaya</h5>
            <h5 class="md:text-sm sm:text-base text-[0.5rem] m-0 text-end">Rp{{ formatPrice(200000) }}</h5>
          </div>
        </div>
      </div>
      <Divider />
      <div class="flex gap-2 px-4 items-center">
        <p class="md:text-sm sm:text-base text-[0.4rem] m-0 w-1/2"><i class="pi pi-shield mr-2 assurance-icon"></i>Asuransi Jasa Bimasakti Homes</p>
        <div class="w-1/2">
          <p class="md:text-sm sm:text-base text-[0.4rem] m-0 text-muted-color">Metode Pembayaran:</p>
          <h6 class="md:text-sm sm:text-base text-[0.4rem] m-0">Transfer</h6>
        </div>
      </div>
      <Divider />
      <div class="flex gap-2 px-4 items-end">
        <p class="md:text-sm sm:text-base text-[0.4rem] m-0 w-1/2">
          Invoice ini sah dan diproses oleh komputer Silakan hubungi Bimasakti Homes apabila kamu membutuhkan bantuan.
        </p>
        <p class="md:text-sm sm:text-base text-[0.4rem] m-0 w-1/2 italic text-end">Terakhir diupdate: 03 Desember 2024 06:26 WIB</p>
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
