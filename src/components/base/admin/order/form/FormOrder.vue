<script setup lang="ts">
import Select from "primevue/select";
import { LocationStore } from '@/store/location'

const props = defineProps({
  isLoading: {
    type: Boolean,
    required: false,
  },
});

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
      <div class="flex flex-col gap-2">
        <label for="on_label">Nomor Hp</label>
        <InputGroup class="mb-4">
          <InputGroupAddon>+62</InputGroupAddon>
          <InputNumber v-model="query.phone" :useGrouping="false" :allowEmpty="true" inputId="integeronly" />
        </InputGroup>
      </div>
      <div class="flex flex-col gap-2 mb-4">
        <label for="nama">Nama Lengkap</label>
        <InputText id="nama" v-model="query.name" autocomplete="off" placeholder="Masukkan nama lengkap" fluid />
      </div>
      <div class="flex flex-col gap-2">
        <label for="email">Alamat Email</label>
        <InputText id="email" v-model="query.email" autocomplete="off" placeholder="Masukkan alamat email" fluid />
      </div>
      <Divider class="my-4" />
      <h5 class="font-medium mb-2">Alamat Tujuan</h5>
      <div class="mb-4 flex flex-col gap-2">
        <label for="prov">Provinsi</label>
        <Select inputId="prov" v-model="query.selectedProvince" :loading="$location.isLoadingProvince"
          @change="fetchCity($event)" :disabled="provinceList.length < 1" :options="provinceList" filter
          optionLabel="name" fluid placeholder="Pilih provinsi">
        </Select>
      </div>
      <div class="mb-4 flex flex-col gap-2">
        <label for="city">Kota/Kabupaten</label>
        <Select inputId="city" v-model="query.selectedCity" :loading="$location.isLoadingCities"
          @change="fetchSubDistrict($event)" :disabled="cityList.length < 1" :options="cityList" filter
          optionLabel="name" fluid placeholder="Pilih kabupaten/kota">
        </Select>
      </div>
      <div class="mb-4 flex flex-col gap-2">
        <label for="district">Kecamatan</label>
        <Select inputId="district" v-model="query.selectedSubdistrict" :loading="$location.isLoadingDistrict"
          @change="fetchVillage($event)" :disabled="subdistrictList.length < 1" :options="subdistrictList" filter
          optionLabel="name" fluid placeholder="Pilih kecamatan">
        </Select>
      </div>
      <div class="mb-4 flex flex-col gap-2">
        <label for="village">Keluarahan</label>
        <Select inputId="village" v-model="query.selectedVillage" :loading="$location.isLoadingVillage"
          :disabled="villageList.length < 1" :options="villageList" filter optionLabel="name" fluid
          placeholder="Pilih kelurahan">
        </Select>
      </div>
      <div class="flex flex-col gap-2">
        <label for="address">Alamat Lengkap</label>
        <Textarea v-model="query.address" id="address" placeholder="Masukkan alamat lengkap" fluid rows="2" cols="30"
          autoResize />
      </div>

      <Divider class="my-4" />
      <div class="mb-4">
        <div class="flex flex-col gap-2">
          <label for="voucher">Kode Voucher</label>
          <InputText id="voucher" placeholder="Masukkan kode voucher" fluid />
        </div>
        <p class="text-sm italic font-thin mt-1">*Masukkan kode voucher untuk mendapatkan potongan.</p>
      </div>
      <Button :loading="props.isLoading" label="Pesan Layanan" fluid @click="emit('onSave', query)" />
    </template>
  </Card>
</template>
