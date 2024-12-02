<script setup>
import Select from "primevue/select";
import MultiSelect from "primevue/multiselect";
const selectedLocation = ref();
const location = ref([
  { name: "Jakarta Pusat", code: "" },
  { name: "Jakarta Barat", code: "" },
  { name: "Jakarta Selatan", code: "" },
  { name: "Jakarta Timur", code: "" },
  { name: "Jakarta Utara", code: "" },
  { name: "Bandung Barat", code: "" },
  { name: "Bandung Selatan", code: "" },
  { name: "Cimahi", code: "" },
]);
const services = ref([
  { name: "Service AC", selected: false },
  { name: "Home Cleaning AC", selected: false },
  { name: "Kelistrikan", selected: false },
  { name: "Cuci AC", selected: false },
]);
</script>
<template>
  <div class="flex flex-col gap-2 mb-4">
    <label for="name">Nama Vendor</label>
    <InputText id="name" aria-describedby="name-help" />
  </div>
  <div class="flex flex-col gap-2 mb-4">
    <label for="name">Lokasi</label>
    <Select v-model="selectedLocation" :options="location" filter optionLabel="name" placeholder="Select a Country" fluid> </Select>
  </div>
  <div class="flex flex-col gap-2 mb-4">
    <label for="name">Layanan</label>
    <div class="flex flex-wrap justify-start gap-4">
      <div v-for="(item, index) in services" :key="index" class="flex items-center gap-2">
        <Checkbox v-model="item.status" :inputId="item.name" :name="item.name" :value="item.name" />
        <label :for="item.name"> {{ item.name }} </label>
      </div>
    </div>
  </div>
  <div class="flex justify-end gap-2 mt-6">
    <Button type="button" label="Batal" text severity="secondary" @click="visibleAdd = false"></Button>
    <Button type="button" label="Simpan" @click="visibleAdd = false"></Button>
  </div>
</template>
