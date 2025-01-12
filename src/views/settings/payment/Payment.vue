<script setup>

const query = reactive({
  name: 'Bimasakti Home',
  bankName: 'Bank BCA',
  accountNumber: '1039438492',
})
</script>
<template>
  <TopBreadcrumb :breadcrumbItems="[{ label: 'Pengaturan Pembayaran' }]" />
  <div class="card mt-8">
    <h5 class="mb-4">Informasi Akun Bank</h5>
    <Inplace class="inplace-custom-display">
      <template #display>
        <div class="flex items-start gap-4">
          <div>
            <p>Pemegang akun: <span class=" font-semibold">{{ query.name }}</span></p>
            <p>Nama Bank: <span class=" font-semibold">{{ query.bankName }}</span></p>
            <p>Nomor Rekening: <span class=" font-semibold">{{ query.accountNumber }}</span></p>
            <Button icon="pi pi-pencil" label="Ubah Informasi" severity="primary" />
          </div>

        </div>

      </template>
      <template #content="{ closeCallback }">
        <div class="mb-4 flex flex-col gap-1">
          <label for="account-holder">Nama Pemegang Akun</label>
          <InputText v-model="query.name" id="account-holder" placeholder="Nama Pemegang Akun" class=" w-auto" />
        </div>
        <div class="mb-4 flex flex-col gap-1">
          <label for="bank-name">Nama Bank</label>
          <InputText v-model="query.bankName" id="bank-name" placeholder="Nama Bank" class=" w-auto" />
        </div>
        <div class="mb-4 flex flex-col gap-1">
          <label for="bank-name">Nomor Rekening</label>
          <InputText v-model="query.accountNumber" id="bank-name" placeholder="Nama Bank" class=" w-auto" />
        </div>
        <div class="flex justify-end">
          <Button icon="pi pi-check" label="Simpan" severity="primary" @click="closeCallback" />
        </div>
      </template>
    </Inplace>
  </div>
</template>
