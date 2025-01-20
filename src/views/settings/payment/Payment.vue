<script setup lang="ts">
import { PaymentStore } from '@/store/payment';

const $payment = PaymentStore()

const query = reactive({
  id: null,
  name: '',
  bankName: '',
  accountNumber: '',
})

onMounted(async() => {
  await $payment.getAll()

  if ($payment?.allPayment?.length) {
    query.id = $payment.allPayment[0].id
    query.name = $payment.allPayment[0].bank_account
    query.bankName = $payment.allPayment[0].bank_name
    query.accountNumber = $payment.allPayment[0].no_rekening
  }
})

async function onUpdate(closeCallback: () => void){

  const payload = {
        _method: "PATCH",
        bank_name: query.bankName,
        bank_account: query.name,
        no_rekening: query.accountNumber,
    };

    await $payment.update(payload, query.id)
    closeCallback();
    await $payment.getAll()
}
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
          <Button icon="pi pi-check" :loading="$payment.isLoading" :disabled="$payment.isLoading" label="Simpan" severity="primary" @click="onUpdate(closeCallback)" />
        </div>
      </template>
    </Inplace>
  </div>
</template>
