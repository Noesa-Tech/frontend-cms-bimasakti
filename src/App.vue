<script lang="ts">
const sidebarVisible = ref(true);

const toggleSidebar = () => {
  sidebarVisible.value = !sidebarVisible.value;
};
</script>

<template>
  <div>
    <h1>Dashboard Admin CMS</h1>
  </div>
</template>

<style scoped></style>
