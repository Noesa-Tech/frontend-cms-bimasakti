<script setup lang="ts">
    const code = ref('');

</script>
<template>
    <div
        class="bg-surface-50 dark:bg-surface-950 flex items-center justify-center min-h-screen min-w-[100vw] overflow-hidden">
        <div class="flex flex-col items-center justify-center">
            <div
                style="border-radius: 56px; padding: 0.3rem; background: linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)">
                <div class="w-full bg-surface-0 dark:bg-surface-900 py-20 px-8 sm:px-20" style="border-radius: 53px">
                    <div class="text-center mb-8">
                        <div class="flex items-center justify-center mb-4">
                            <img src="https://www.bimasakti.homes/_next/image?url=%2Flogo.png&w=1080&q=75" alt="Logo"
                                class="h-[32px]" />
                        </div>
                        <div class="text-surface-900 dark:text-surface-0 text-3xl font-medium mb-4 text-center">Order
                            INV-2321324-2321</div>
                        <span class="text-muted-color font-medium">Masukkan Kode Untuk Melanjutkan</span>
                    </div>
                    <div class="w-full">
                        <label for="code"
                            class="block text-surface-900 dark:text-surface-0 text-xl font-medium mb-2">Kode
                            Akses</label>
                        <InputText id="code" type="text" placeholder="Masukkan Kode" class="w-full mb-8"
                            v-model="code" />

                        <Button label="Masuk" class="w-full mt-8" as="router-link"
                            :to="{ name: 'vendor-order', params: { id: 1 } }"></Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>