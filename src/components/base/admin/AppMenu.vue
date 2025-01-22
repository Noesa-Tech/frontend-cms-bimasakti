<script setup lang="ts">
import { AuthStore } from '@/store/auth'
import AppMenuItem from "./AppMenuItem.vue";

const $auth = AuthStore()
const router = useRouter();

const model = ref([
  {
    label: "Home",
    items: [{ label: "Dashboard", icon: "pi pi-fw pi-th-large", to: "/dashboard" }],
  },
  {
    label: "Management",
    items: [
      {
        label: "Data Master", icon: "pi pi-fw pi-server", items: [
          {
            label: "Layanan",
            icon: "pi pi-fw pi-wrench",
            to: "/master/layanan",
          },
          {
            label: "Benefit",
            icon: "pi pi-fw pi-check-circle",
            to: "/master/benefit",
          },
          {
            label: "Kategori",
            icon: "pi pi-fw pi-list",
            to: "/master/kategori",
          },
          {
            label: "Sub Kategori",
            icon: "pi pi-fw pi-box",
            to: "/master/sub-kategori",
          },
          {
            label: "Properti",
            icon: "pi pi-fw pi-building",
            to: "/master/properti",
          },
        ],
      },
      { label: "Admin", icon: "pi pi-fw pi-id-card", to: "/admin" },
      { label: "Vendor", icon: "pi pi-fw pi-user", to: "/vendors" },
      { label: "Pelanggan", icon: "pi pi-fw pi-users", to: "/pelanggan" },
    ],
  },
  {
    label: "Pemesanan",
    items: [
      { label: "Pesanan", icon: "pi pi-fw pi-book", to: "/pesanan" },
      { label: "Tambah Pesanan", icon: "pi pi-fw pi-file-plus", to: "/pesanan/tambah" },
      { label: "Pesanan Diproses", icon: "pi pi-spin pi-spinner", to: "/pesanan-diproses" },
    ],
  },
  {
    label: "Keuangan",
    items: [{ label: "Laporan Keuangan", icon: "pi pi-fw pi-receipt", to: "/laporan-keuangan" }],
  },
  {
    label: "Pengaturan",
    items: [
      { label: "CMS Landing Page", icon: "pi pi-fw pi-desktop", to: "/pengaturan/landing-page" },
      { label: "Kontak", icon: "pi pi-fw pi-phone", to: "/pengaturan/kontak" },
      { label: "Review", icon: "pi pi-fw pi-star", to: "/pengaturan/ulasan" },
      { label: "Pembayaran", icon: "pi pi-fw pi-credit-card", to: "/pengaturan/pembayaran" },
      { label: "Media Sosial", icon: "pi pi-fw pi-at", to: "/pengaturan/media-sosial" },
    ],
  },
  {
    separator: true
  },
  {
    items: [{ label: "Keluar", icon: "pi pi-fw pi-sign-out", to: "/", danger: true }],
  },
]);

const query = reactive({
  name: "",
  email: "",
  location:""
})

onMounted(async () => {
  const users = localStorage.getItem('AuthStore');

  if (users) {
    const parsedData = JSON.parse(users);

    query.name = parsedData.users.name;
    query.email = parsedData.users.email;
    query.location = parsedData.users.city.nama;
  } else {

    await $auth.logout()
    localStorage.removeItem('AuthStore');

    router.push(`/pesanan`);
  }
});
</script>

<template>
  <div class="flex items-center justify-start gap-2">
    <Avatar :label="initials(query.name)" size="xlarge" />
    <div>
      <h6 class="m-0">{{ query.name }}</h6>
      <p class="text-sm m-0">{{ query.email }}</p>
      <p class="text-sm m-0 text-primary font-semibold mt-1">Admin {{ query.location }}</p>
    </div>
  </div>

  <Divider />
  <ul class="layout-menu">
    <template v-for="(item, i) in model" :key="item">
      <app-menu-item v-if="!item.separator" :item="item" :index="i"></app-menu-item>
      <Divider v-if="item.separator" class="menu-separator" />
    </template>
  </ul>
</template>

<style lang="scss" scoped></style>