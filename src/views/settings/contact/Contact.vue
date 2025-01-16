<script setup lang="ts">
import { SettingStore } from '@/store/setting';

const $setting = SettingStore()
const contact = reactive({
  contact1 : "",
  contact2: "" 
})

async function updateSetting1(closeCallback: any){
  const payload = {
        _method: "PATCH",
        value: contact.contact1
    };

    await $setting.update(payload, 2)
    closeCallback();
    await $setting.fetchAll()
}

async function updateSetting2(closeCallback: any){
  const payload = {
        _method: "PATCH",
        value: contact.contact2
    };

    await $setting.update(payload, 3)
    closeCallback();
    await $setting.fetchAll()
}

onMounted(async() => {
  await $setting.fetchAll()

  const filteredData = $setting.setting.filter(item => item.id === 2 || item.id === 3);
  
  contact.contact1 = filteredData[0].value
  contact.contact2 = filteredData[1].value
})
</script>
<template>
  <TopBreadcrumb :breadcrumbItems="[{ label: 'Pengaturan Kontak' }]" />
  <div class="card mt-8">
    <div class="font-semibold text-xl mb-4">Data Kontak</div>
    <div class="flex flex-col mb-4">
      <label for="desc"><i class="pi pi-whatsapp mr-2"></i>Whatsapp Admin</label>
      <Inplace>
        <template #display>
          <p class="m-0">{{ contact.contact1 }}<i class="pi pi-pencil ml-2"></i> </p>
        </template>
        <template #content="{ closeCallback }">
          <span class="inline-flex items-center gap-2 w-full mt-1">
            <InputGroup>
              <InputGroupAddon>
                +62
              </InputGroupAddon>
              <InputNumber v-model="contact.contact1" inputId="withoutgrouping" :useGrouping="false" fluid autofocus
                class="md:w-1/2 w-full" />
            </InputGroup>
            <Button icon="pi pi-check" label="Simpan" severity="success" @click="updateSetting1(closeCallback)" />
          </span>
        </template>
      </Inplace>
    </div>
    <Divider />
    <div class="flex flex-col mb-4">
      <label for="desc"><i class="pi pi-whatsapp mr-2"></i>Whatsapp Pesanan</label>
      <Inplace>
        <template #display>
          <p class="m-0">{{ contact.contact2 }}<i class="pi pi-pencil ml-2"></i> </p>
        </template>
        <template #content="{ closeCallback }">
          <span class="inline-flex items-center gap-2 w-full mt-1">
            <InputGroup>
              <InputGroupAddon>
                +62
              </InputGroupAddon>
              <InputNumber v-model="contact.contact2" inputId="withoutgrouping" :useGrouping="false" fluid autofocus
                class="md:w-1/2 w-full" />
            </InputGroup>
            <Button icon="pi pi-check" label="Simpan" severity="success" @click="updateSetting2(closeCallback)" />
          </span>
        </template>
      </Inplace>
    </div>
  </div>
</template>
