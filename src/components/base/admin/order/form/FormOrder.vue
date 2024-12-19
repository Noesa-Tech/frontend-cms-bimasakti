<script setup lang="ts">
import Select from "primevue/select";
import { LocationStore } from '@/store/location'
import InputMask from "primevue/inputmask";

const emit = defineEmits(["onSave"]);

const $location = LocationStore()

const provinceList = computed(() =>
  $location.provinces.map((province: any) => ({
    id: province.id,
    name: province.nama,
  }))
);

const cityList = computed(() =>
  $location.cities.map((city: any) => ({
    id: city.id,
    name: city.nama,
  }))
);

const subdistrictList = computed(() =>
  $location.districts.map((city: any) => ({
    id: city.id,
    name: city.nama,
  }))
);

const villageList = computed(() =>
  $location.villages.map((village: any) => ({
    id: village.id,
    name: village.nama,
  }))
);

const query = reactive<any>({
  date: null,
  name: "",
  phone: "",
  email: "",
  address: "",
  selectedProvince: "",
  selectedCity: "",
  selectedSubdistrict: "",
  selectedVillage: "",
});

async function fetchCity(e: any) {
  await $location.fetchCities(e.value.id)
}

async function fetchSubDistrict(e: any) {
  await $location.fetchDistricts(e.value.id)
}

async function fetchVillage(e: any) {
  await $location.fetchVillages(e.value.id)
}

onMounted(async () => {
  await $location.fetchProvinces();
});
</script>

<template>
  <Card class="lg:sticky lg:top-20">
    <template #content>
      <h5>Formulir</h5>
      <h5 class="font-medium mb-2">Informasi Pelanggan</h5>
      <InputGroup class="mb-4">
        <InputGroupAddon>+62</InputGroupAddon>
        <FloatLabel variant="on">
          <InputNumber v-model="query.phone" :useGrouping="false" :allowEmpty="true" inputId="integeronly" />
          <label for="on_label">Nomor Hp</label>
        </FloatLabel>
      </InputGroup>
      <FloatLabel variant="on" class="mb-4">
        <InputText id="nama" v-model="query.name" autocomplete="off" fluid />
        <label for="nama">Nama Lengkap</label>
      </FloatLabel>

      <FloatLabel variant="on">
        <InputText id="email" v-model="query.email" autocomplete="off" fluid />
        <label for="email">Alamat Email</label>
      </FloatLabel>
      <Divider class="my-4" />
      <h5 class="font-medium mb-2">Alamat Tujuan</h5>

      <FloatLabel class="mb-4" variant="on">
        <Select inputId="prov" v-model="query.selectedProvince" :loading="$location.isLoadingProvince"
          @change="fetchCity($event)" :disabled="provinceList.length < 1" :options="provinceList" filter
          optionLabel="name" fluid>
        </Select>
        <label for="prov">Provinsi</label>
      </FloatLabel>
      <FloatLabel class="mb-4" variant="on">
        <Select inputId="city" v-model="query.selectedCity" :loading="$location.isLoadingCities"
          @change="fetchSubDistrict($event)" :disabled="cityList.length < 1" :options="cityList" filter
          optionLabel="name" fluid>
        </Select>
        <label for="city">Kota/Kabupaten</label>
      </FloatLabel>
      <FloatLabel class="mb-4" variant="on">
        <Select inputId="district" v-model="query.selectedSubdistrict" :loading="$location.isLoadingDistrict"
          @change="fetchVillage($event)" :disabled="subdistrictList.length < 1" :options="subdistrictList" filter
          optionLabel="name" fluid>
        </Select>
        <label for="district">Kecamatan</label>
      </FloatLabel>
      <FloatLabel class="mb-4" variant="on">
        <Select inputId="village" v-model="query.selectedVillage" :loading="$location.isLoadingVillage"
          :disabled="villageList.length < 1" :options="villageList" filter optionLabel="name" fluid>
        </Select>
        <label for="village">Keluarahan</label>
      </FloatLabel>
      <FloatLabel variant="on">
        <Textarea v-model="query.address" id="address" fluid rows="2" cols="30" autoResize />
        <label for="address">Alamat Lengkap</label>
      </FloatLabel>

      <Divider class="my-4" />
      <div class="mb-4">
        <FloatLabel variant="on">
          <InputText id="voucher" fluid />
          <label for="voucher">Kode Voucher</label>
        </FloatLabel>
        <p class="text-sm italic font-thin mt-1">*Masukkan kode voucher untuk mendapatkan potongan.</p>
      </div>
      <Button label="Pesan Layanan" fluid @click="emit('onSave', query)" />
    </template>
  </Card>
</template>
