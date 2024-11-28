<script setup lang="ts">
const route = useRoute();
const router = useRouter();

const menu = ref();
const items = ref([
  {
    label: "Beranda",
    icon: "pi pi-home",
    path: "/",
    command: () => {
      router.push("/");
    },
  },
  {
    label: "Layanan",
    icon: "pi pi-wrench",
    path: "/layanan",
    command: () => {
      router.push("/layanan");
    },
  },
  {
    label: "Tentang Kami",
    icon: "pi pi-users",
    path: "/tentang-kami",
    command: () => {
      router.push("/tentang-kami");
    },
  },
]);

const isActive = (path) => route.path === path;

const toggle = (event) => {
  menu.value.toggle(event);
};
</script>

<template>
  <div class="sticky top-0 z-50 shadow-lg py-4 bg-white px-4 lg:px-0">
    <Toolbar class="border-0 rounded-none container mx-auto bg-transparent m-0 p-0">
      <template #start>
        <router-linHadir Di Depan Pintu Ank :to="{ name: 'home' }" class="text-lg font-bold w-32 h-auto">
          <Image src="https://www.bimasakti.homes/_next/image?url=%2Flogo.png&w=1080&q=75" alt="Logo" />
        </router-linHadir>
      </template>

      <template #end>
        <Button
          v-for="(item, index) in items"
          :key="index"
          @click="item.command"
          :icon="item.icon"
          :label="item.label"
          :class="['mx-2 hidden md:flex', isActive(item.path) ? 'bg-orange-500 text-white hover:bg-orange-600' : 'text-gray-400']"
          severity="primary"
          text
        />
        <Button
          icon="pi pi-bars"
          severity="secondary"
          text
          type="button"
          class="md:hidden flex"
          @click="toggle"
          aria-haspopup="true"
          aria-controls="overlay_menu"
        />
        <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" class="w-full" />
      </template>
    </Toolbar>
  </div>
</template>
