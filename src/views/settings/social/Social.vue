<script setup lang="ts">
import { SocialService } from '@/service/SocialService';

import { useConfirm } from "primevue/useconfirm";
import { useToast } from "primevue/usetoast";
import ConfirmPopup from "primevue/confirmpopup";
const socials = ref<any>(null);
const confirm = useConfirm();
const toast = useToast();
const visibleEdit = ref<boolean>(false);
const visibleAdd = ref<boolean>(false);
const searchText = ref('');

const confirmDelete = (event: any) => {
    confirm.require({
        target: event.currentTarget,
        message: "Yakin ingin menghapus data ini?",
        icon: "pi pi-info-circle",
        rejectProps: {
            label: "Batal",
            severity: "secondary",
            outlined: true,
        },
        acceptProps: {
            label: "Yakin",
            severity: "danger",
        },
        accept: () => {
            toast.add({ severity: "info", summary: "Confirmed", detail: "Data Dihapus", life: 3000 });
        },
    });
};

onMounted(() => {
    SocialService.getSocial().then((data) => (socials.value = data));
});
</script>
<template>
    <TopBreadcrumb :breadcrumbItems="[{ label: 'Pengaturan Media Sosial' }]" />
    <div class="card mt-8">
        <h5 class="mb-4">Daftar Media Sosial</h5>
        <div class="flex flex-col gap-2 w-full">

            <Inplace v-for="(item, index) in socials" :key="index" class="inplace-custom-display-full">
                <template #display>
                    <div class="flex items-center justify-between gap-4 ">
                        <div class="">
                            <p class="m-0"> {{ item.name }}</p>
                            <p class="m-0">Link: <span class=" font-semibold">{{ item.link }}</span></p>
                        </div>
                        <i class="pi pi-pencil" />
                    </div>
                </template>
                <template #content="{ closeCallback }">
                    <div class="mb-4 flex flex-col gap-1">
                        <label for="account-holder">Nama Platform</label>
                        <InputText v-model="item.name" id="account-holder" placeholder="Nama Pemegang Akun"
                            class=" w-auto" />
                    </div>
                    <div class="mb-4 flex flex-col gap-1">
                        <label for="bank-name">Link Platform</label>
                        <InputText v-model="item.link" id="bank-name" placeholder="Nama Bank" class=" w-auto" />
                    </div>
                    <div class="flex justify-end">
                        <Button icon="pi pi-check" label="Simpan" severity="primary" @click="closeCallback"
                            size="small" />
                    </div>
                </template>
            </Inplace>

        </div>
    </div>
    <ConfirmPopup></ConfirmPopup>
</template>