<script setup>
import { ref } from "vue";

import AppMenuItem from "./AppMenuItem.vue";

const model = ref([
  {
    label: "Home",
    items: [{ label: "Dashboard", icon: "pi pi-fw pi-th-large", to: "/dashboard" }],
  },
  {
    label: "Management",
    items: [
      {
        label: "Data Master", icon: "pi pi-fw pi-server", to: "/master", items: [
          {
            label: "Layanan",
            icon: "pi pi-fw pi-list",
            to: "/master/layanan",
          },
          {
            label: "Benefit",
            icon: "pi pi-fw pi-list",
            to: "/master/benefit",
          },
          {
            label: "Kategori",
            icon: "pi pi-fw pi-list",
            to: "/master/kategori",
          },
          {
            label: "Sub Kategori",
            icon: "pi pi-fw pi-list",
            to: "/master/sub-kategori",
          },
        ],
      },
      { label: "Vendor", icon: "pi pi-fw pi-user", to: "/vendors" },
      { label: "Pelanggan", icon: "pi pi-fw pi-users", to: "/pelanggan" },
    ],
  },
  {
    label: "Pemesanan",
    items: [{ label: "Pesanan", icon: "pi pi-fw pi-book", to: "/pesanan" },
    { label: "Tambah Pesanan", icon: "pi pi-fw pi-file-plus", to: "/pesanan/tambah" }
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
    ],
  },
  // {
  //   label: "UI Components",
  //   items: [
  //     { label: "Form Layout", icon: "pi pi-fw pi-id-card", to: "/uikit/formlayout" },
  //     { label: "Input", icon: "pi pi-fw pi-check-square", to: "/uikit/input" },
  //     { label: "Button", icon: "pi pi-fw pi-mobile", to: "/uikit/button", class: "rotated-icon" },
  //     { label: "Table", icon: "pi pi-fw pi-table", to: "/uikit/table" },
  //     { label: "List", icon: "pi pi-fw pi-list", to: "/uikit/list" },
  //     { label: "Tree", icon: "pi pi-fw pi-share-alt", to: "/uikit/tree" },
  //     { label: "Panel", icon: "pi pi-fw pi-tablet", to: "/uikit/panel" },
  //     { label: "Overlay", icon: "pi pi-fw pi-clone", to: "/uikit/overlay" },
  //     { label: "Media", icon: "pi pi-fw pi-image", to: "/uikit/media" },
  //     { label: "Menu", icon: "pi pi-fw pi-bars", to: "/uikit/menu" },
  //     { label: "Message", icon: "pi pi-fw pi-comment", to: "/uikit/message" },
  //     { label: "File", icon: "pi pi-fw pi-file", to: "/uikit/file" },
  //     { label: "Chart", icon: "pi pi-fw pi-chart-bar", to: "/uikit/charts" },
  //     { label: "Timeline", icon: "pi pi-fw pi-calendar", to: "/uikit/timeline" },
  //     { label: "Misc", icon: "pi pi-fw pi-circle", to: "/uikit/misc" },
  //   ],
  // },
  // {
  //   label: "Pages",
  //   icon: "pi pi-fw pi-briefcase",
  //   to: "/pages",
  //   items: [
  //     {
  //       label: "Landing",
  //       icon: "pi pi-fw pi-globe",
  //       to: "/landing",
  //     },
  //     {
  //       label: "Auth",
  //       icon: "pi pi-fw pi-user",
  //       items: [
  //         {
  //           label: "Login",
  //           icon: "pi pi-fw pi-sign-in",
  //           to: "/",
  //         },
  //         {
  //           label: "Error",
  //           icon: "pi pi-fw pi-times-circle",
  //           to: "/login-gagal",
  //         },
  //         {
  //           label: "Access Denied",
  //           icon: "pi pi-fw pi-lock",
  //           to: "/auth/access",
  //         },
  //       ],
  //     },
  //     {
  //       label: "Crud",
  //       icon: "pi pi-fw pi-pencil",
  //       to: "/pages/crud",
  //     },
  //     {
  //       label: "Not Found",
  //       icon: "pi pi-fw pi-exclamation-circle",
  //       to: "/pages/notfound",
  //     },
  //     {
  //       label: "Empty",
  //       icon: "pi pi-fw pi-circle-off",
  //       to: "/pages/empty",
  //     },
  //   ],
  // },
  // {
  //   label: "Hierarchy",
  //   items: [
  //     {
  //       label: "Submenu 1",
  //       icon: "pi pi-fw pi-bookmark",
  //       items: [
  //         {
  //           label: "Submenu 1.1",
  //           icon: "pi pi-fw pi-bookmark",
  //           items: [
  //             { label: "Submenu 1.1.1", icon: "pi pi-fw pi-bookmark" },
  //             { label: "Submenu 1.1.2", icon: "pi pi-fw pi-bookmark" },
  //             { label: "Submenu 1.1.3", icon: "pi pi-fw pi-bookmark" },
  //           ],
  //         },
  //         {
  //           label: "Submenu 1.2",
  //           icon: "pi pi-fw pi-bookmark",
  //           items: [{ label: "Submenu 1.2.1", icon: "pi pi-fw pi-bookmark" }],
  //         },
  //       ],
  //     },
  //     {
  //       label: "Submenu 2",
  //       icon: "pi pi-fw pi-bookmark",
  //       items: [
  //         {
  //           label: "Submenu 2.1",
  //           icon: "pi pi-fw pi-bookmark",
  //           items: [
  //             { label: "Submenu 2.1.1", icon: "pi pi-fw pi-bookmark" },
  //             { label: "Submenu 2.1.2", icon: "pi pi-fw pi-bookmark" },
  //           ],
  //         },
  //         {
  //           label: "Submenu 2.2",
  //           icon: "pi pi-fw pi-bookmark",
  //           items: [{ label: "Submenu 2.2.1", icon: "pi pi-fw pi-bookmark" }],
  //         },
  //       ],
  //     },
  //   ],
  // },
]);
</script>

<template>
  <ul class="layout-menu">
    <template v-for="(item, i) in model" :key="item">
      <app-menu-item v-if="!item.separator" :item="item" :index="i"></app-menu-item>
      <li v-if="item.separator" class="menu-separator"></li>
    </template>
  </ul>
</template>

<style lang="scss" scoped></style>