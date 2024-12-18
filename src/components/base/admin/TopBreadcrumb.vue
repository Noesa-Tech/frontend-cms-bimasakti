<script setup lang="ts">
import { ref } from "vue";


interface BreadcrumbItem {
  label: string;
  route?: string; 
  url?: string;   
  target?: string; 
  icon?: string;  
}


defineProps<{
  breadcrumbItems: BreadcrumbItem[];
}>();


const breadcrumbHome = ref<BreadcrumbItem>({
  label: "Home",
  icon: "pi pi-th-large",
  route: "/dashboard",
});
</script>

<template>
  <div class="rounded-md overflow-hidden px-4 bg-surface-0 dark:bg-surface-900">
    <!-- Breadcrumb Component -->
    <Breadcrumb :home="breadcrumbHome" :model="breadcrumbItems">
      <!-- Custom template for breadcrumb items -->
      <template #item="{ item, props }">
        <!-- Use router-link for internal routes -->
        <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
          <a :href="href" v-bind="props.action" @click="navigate" class="flex items-center">
            <span :class="item.icon" class="mr-2" />
            <span>{{ item.label }}</span>
          </a>
        </router-link>
        
        <!-- Use standard anchor tag for external links -->
        <a v-else :href="item.url" :target="item.target" v-bind="props.action" class="flex items-center">
          <span :class="item.icon" class="mr-2" />
          <span class="font-semibold">{{ item.label }}</span>
        </a>
      </template>
    </Breadcrumb>
  </div>
</template>

<style scoped>
a {
  text-decoration: none;
  color: inherit;
  transition: color 0.3s ease;
}

a:hover {
  color: var(--primary-color, #007bff);
}

.flex {
  display: flex;
  align-items: center;
}

.mr-2 {
  margin-right: 0.5rem;
}
</style>
