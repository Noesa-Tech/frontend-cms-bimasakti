<script setup lang="ts">
import mixins from "@/mixins";
import { PropertyStore } from '@/store/property'

const props = defineProps({
  serviceId: {
    type: Number,
    required: true,
  },
});

const emit = defineEmits(["on-click", 'ladder']);

const route = useRoute();
const $property = PropertyStore();

const { formatPrice } = mixins.methods;

const selectedProperty = ref<any>({});
const useLadder = ref<boolean>(false);

const onPropertyClick = (item: any) => {
  selectedProperty.value = item;

  emit("on-click", item);
};

const items = computed(() => {
  return $property.properties || [];
});

onMounted(async () => {
  await $property.fetchProperties(props?.serviceId)
});

</script>

<template>

  <h5>Pilih Property</h5>
  <div>
    <div v-for="(item, index) in items" :key="item.id"
      class="flex items-center border rounded-lg px-4 py-2 gap-4 cursor-pointer hover:border-primary transition-all"
      :class="{
        'mt-2': index != 0,
        'border-surface-200': item.id != selectedProperty.id,
        'border-primary  bg-primary-100 dark:bg-primary-900': item.id == selectedProperty.id,
      }" @click="onPropertyClick(item)">
      <img :src="item.icon_url" :alt="item.name" :srcset="item.icon_url" class="h-[3rem] w-[3rem]" />
      <div class="w-full">
        <p class="font-medium">{{ item.name }}</p>
        <p v-if="item.fee > 0" class="text-muted-color text-sm">Terdapat biaya tambahan untuk properti ini.</p>
        <p class="text-primary mt-2">Rp.{{ formatPrice(item.fee) }}</p>
      </div>
      <i v-if="item.id == selectedProperty.id" class="pi pi-check text-primary"></i>
    </div>
  </div>
  <div class="mt-8">
    <h5 class="font-medium">Butuh Tangga?</h5>
    <p class="text-sm text-muted-color">Terdapat biaya tambahan untuk menggunakan tangga dari kami</p>
    <div class="flex gap-4 items-center mt-4">
      <div class="flex items-center gap-2">
        <RadioButton v-model="useLadder" @update:modelValue="emit('ladder', false)" inputId="no" name="pizza"
          :value="false" />
        <label for="no">Tidak</label>
      </div>
      <div class="flex items-center gap-2">
        <RadioButton v-model="useLadder" @update:modelValue="emit('ladder', true)" inputId="yes" name="pizza"
          :value="true" />
        <label for="yes">Butuh</label>
      </div>
    </div>
  </div>
</template>
