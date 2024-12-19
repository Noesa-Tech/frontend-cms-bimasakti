<script setup lang="ts">
const admin = ref<any>('82117233422');
const order = ref<any>('82117233422');
</script>
<template>
  <TopBreadcrumb :breadcrumbItems="[{ label: 'Pengaturan Kontak' }]" />
  <div class="card mt-8">
    <div class="font-semibold text-xl mb-4">Data Kontak</div>
    <div class="flex flex-col mb-4">
      <label for="desc"><i class="pi pi-whatsapp mr-2"></i>Whatsapp Admin</label>
      <Inplace>
        <template #display>
          <p class="m-0">{{ admin }}<i class="pi pi-pencil ml-2"></i> </p>
        </template>
        <template #content="{ closeCallback }">
          <span class="inline-flex items-center gap-2 w-full mt-1">
            <InputGroup>
              <InputGroupAddon>
                +62
              </InputGroupAddon>
              <InputNumber v-model="admin" inputId="withoutgrouping" :useGrouping="false" fluid autofocus
                class="md:w-1/2 w-full" />
            </InputGroup>
            <Button icon="pi pi-check" label="Simpan" severity="success" @click="closeCallback" />
          </span>
        </template>
      </Inplace>
    </div>
    <Divider />
    <div class="flex flex-col mb-4">
      <label for="desc"><i class="pi pi-whatsapp mr-2"></i>Whatsapp Pesanan</label>
      <Inplace>
        <template #display>
          <p class="m-0">{{ order }}<i class="pi pi-pencil ml-2"></i> </p>
        </template>
        <template #content="{ closeCallback }">
          <span class="inline-flex items-center gap-2 w-full mt-1">
            <InputGroup>
              <InputGroupAddon>
                +62
              </InputGroupAddon>
              <InputNumber v-model="order" inputId="withoutgrouping" :useGrouping="false" fluid autofocus
                class="md:w-1/2 w-full" />
            </InputGroup>
            <Button icon="pi pi-check" label="Simpan" severity="success" @click="closeCallback" />
          </span>
        </template>
      </Inplace>
    </div>
  </div>
</template>
