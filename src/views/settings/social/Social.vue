<script setup lang="ts">
import { SocialMediaStore } from '@/store/socialMedia';

const $social = SocialMediaStore()

onMounted(async() => {
    await $social.getAll()
});

async function onUpdate(closeCallback: () => void, item:any){

const payload = {
      _method: "PATCH",
      key: item.key,
      value: item.value,
  };

  await $social.update(payload, item.id)
  closeCallback();
  await $social.getAll()
}
</script>
<template>
    <TopBreadcrumb :breadcrumbItems="[{ label: 'Pengaturan Media Sosial' }]" />
    <div class="card mt-8">
        <h5 class="mb-4">Daftar Media Sosial</h5>
        <div class="flex flex-col gap-2 w-full">

            <Inplace v-for="(item, index) in $social.allSocial" :key="index" class="inplace-custom-display-full">
                <template #display>
                    <div class="flex items-center justify-between gap-4 ">
                        <div class="">
                            <p class="m-0"> {{ item.key }}</p>
                            <p class="m-0">Link: <span class=" font-semibold">{{ item.value }}</span></p>
                        </div>
                        <i class="pi pi-pencil" />
                    </div>
                </template>
                <template #content="{ closeCallback }">
                    <div class="mb-4 flex flex-col gap-1">
                        <label for="account-holder">Nama Platform</label>
                        <InputText v-model="item.key" id="account-holder" placeholder="Nama Pemegang Akun"
                            class=" w-auto" />
                    </div>
                    <div class="mb-4 flex flex-col gap-1">
                        <label for="bank-name">Link Platform</label>
                        <InputText v-model="item.value" id="bank-name" placeholder="Nama Bank" class=" w-auto" />
                    </div>
                    <div class="flex justify-end">
                        <Button icon="pi pi-check" :loading="$social.isLoading" :disabled="$social.isLoading" label="Simpan" severity="primary" @click="onUpdate(closeCallback, item)"
                            size="small" />
                    </div>
                </template>
            </Inplace>

        </div>
    </div>
    <ConfirmPopup></ConfirmPopup>
</template>