<script setup lang="ts">
import Select from "primevue/select";
import { useToast } from 'primevue/usetoast';
import { VendorStore } from '@/store/vendor'

const props = defineProps({
  city: {
    type: Array as PropType<{ code: any; name: any }[]>,
    required: true,
  },
  service: {
    type: Array as PropType<any>,
    required: true,
  },
});

const emit = defineEmits(["on-close","on-save"]);

const $vendor = VendorStore()

const query = reactive({
  name: "",
  city_id: null,
  service_id : null,
})

async function onSave(){
  const payload = {
    ...query,
    service_id: JSON.stringify(query.service_id),
  };

  $vendor.addVendor(payload)
  emit('on-save')
}
</script>

<template>
  <div class="flex flex-col gap-2 mb-4">
    <label for="name">Nama Vendor</label>
    <InputText v-model="query.name" id="name" aria-describedby="name-help" />
  </div>
  <div class="flex flex-col gap-2 mb-4">
    <label for="name">Lokasi</label>
    <Select v-model="query.city_id" :options="props.city" filter optionLabel="name" optionValue="code" placeholder="Select a Country" fluid> </Select>
  </div>
  <div class="flex flex-col gap-2 mb-4">
    <label for="name">Layanan</label>
    <div class="flex flex-wrap justify-start gap-4">
      <div v-for="(item, index) in props.service" :key="index" class="flex items-center gap-2">
        <Checkbox v-model="query.service_id" :inputId="item.name" :name="item.name" :value="item.id" />
        <label :for="item.name"> {{ item.name }} </label>
      </div>
    </div>
  </div>
  <div class="flex justify-end gap-2 mt-6">
    <Button type="button" label="Batal" text severity="secondary" @click="emit('on-close')"></Button>
    <Button type="button" label="Simpan" @click="onSave()"></Button>
  </div>
</template>
