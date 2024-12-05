<script setup>
defineProps({
  breadcrumbItems: {
    type: Array,
    required: true,
    default: () => [],
  },
});

const breadcrumbHome = ref({ icon: "pi pi-th-large", route: "/dashboard" });
</script>
<template>
  <div class="rounded-md overflow-hidden px-4 bg-surface-0">
    <Breadcrumb :home="breadcrumbHome" :model="breadcrumbItems">
      <template #item="{ item, props }">
        <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
          <a :href="href" v-bind="props.action" @click="navigate">
            <span :class="[item.icon]" />
            <span>{{ item.label }}</span>
          </a>
        </router-link>
        <a v-else :href="item.url" :target="item.target" v-bind="props.action">
          <span class="font-semibold">{{ item.label }}</span>
        </a>
      </template>
    </Breadcrumb>
  </div>
</template>
