<script setup lang="ts">
    import Inplace from 'primevue/inplace';

    const visiblePrice = ref(false);
    const perItem = reactive({
        label: "",
        category: "",
        price: 0,
    })
    const visibleQty = ref(false);
    const perItemQty = reactive({
        label: "",
        category: "",
        qty: 0,
    })
    const visibleProperty = ref(false);
    const visibleLadder = ref(false);
    const item = ref({
        id: 1001,
        noInvoice: "INV-0938483-20241505",
        name: "Hari Nurah Nahrani",
        email: "hari@gmail.com",
        phone: "6282117688166",
        useLadder: true,
        ladderPrice: 50000,
        property: {
            id: 1,
            label: 'Rumah Pribadi',
            price: 50000,
        },
        vendor: {
            id: 1000,
            name: "PT. Air Conditioner",
            services: [
                {
                    id: 1,
                    title: "Service AC",
                },
                {
                    id: 2,
                    title: "Home Cleaning",
                },
            ],
            location: "Jakarta Timur",
            date: "2015-09-13",
            status: 1,
            code: "XDJEIS",
        },

        location: {
            country: "Jawa Barat",
            city: "Kota Bandung",
            distric: "Ciheulang",
            village: "Sekeloa Selatan",
            address: "Jl. Sekeloa II, No. 50, RT/11 RW/11",
        },
        items: [
            {
                id: 1,
                label: "Service Rutin",
                status: true,
                isDefault: true,
                price: 50000,
                category: [
                    { label: "AC 0.5 pk", qty: 3, isDefault: true, price: 50000 },
                    { label: "AC 1 pk", desc: "lorem ipsum dolor sit amet", qty: 4, isDefault: true, price: 50000 },
                    { label: "AC 1.5 pk", desc: "lorem ipsum dolor sit amet", qty: 5, isDefault: true, price: 50000 },
                ],
            },
            {
                id: 2,
                label: "AC tidak Dingin",
                status: true,
                isDefault: true,
                price: 100000,
                category: [{ label: "AC 0.5 pk", qty: 2, isDefault: true, price: 50000 }],
            },
        ],
        date: "2015-09-14",
        status: 2,
    });

    const onEditPrice = (order, category) => {
        perItem.label = order.label;
        perItem.category = category.label;
        perItem.price = category.price;
        visiblePrice.value = true;
    }

    const onEditQty = (order, category) => {
        perItemQty.label = order.label;
        perItemQty.category = category.label;
        perItemQty.qty = category.qty;
        visibleQty.value = true;
    }
</script>
<template>
    <div class="card flex flex-col gap-4 h-full max-w-screen-md mx-auto min-h-[100vh] ">
        <div class="flex items-start justify-between">
            <img src="https://www.bimasakti.homes/_next/image?url=%2Flogo.png&w=1080&q=75" alt="Logo"
                class="h-[32px]" />
            <div class="flex flex-col items-end text-right">
                <h5 class=" m-0">INVOICE</h5>
                <p class=" text-primary m-0">{{ item.noInvoice }}</p>
            </div>
        </div>
        <div class="flex flex-col md:gap-4 gap-1">
            <div class="h-1 bg-surface-500 w-full"></div>
            <div class="flex gap-2 px-2">
                <p class="font-medium m-0 w-4/12">HARGA SATUAN</p>
                <p class="font-medium m-0 w-4/12 text-center">QTY</p>
                <p class="font-medium m-0 w-4/12 text-end">TOTAL HARGA</p>
            </div>
            <div class="h-1 bg-surface-500 w-full"></div>
            <div class="flex flex-col gap-6">
                <div class="px-2" v-for="(order, index) in item.items" :key="index">
                    <h6 class="m-0 text-primary">{{ order.label }}</h6>
                    <div class="flex flex-col gap-4 mt-1">
                        <div class="pl-2" v-for="(category, index) in order.category" :key="index">
                            <p class="mb-1 font-normal text-muted-color">• {{ category.label }} </p>
                            <div class="flex gap-2">
                                <p class="m-0 font-normal w-4/12 text-start inline-flex justify-start gap-2 md:hidden hover:bg-surface-100 transition-all rounded-md p-1 cursor-pointer"
                                    @click="onEditPrice(order, category)">
                                    Rp{{formatPrice(category.price) }}<i class="pi pi-pencil"
                                        style="font-size: 0.8rem"></i>
                                </p>
                                <Inplace
                                    class="m-0 p-0 font-normal w-4/12 text-start inplace-custom-display md:block hidden">
                                    <template #display>
                                        <p class="inline-flex gap-2">Rp{{ formatPrice(category.price) }} <i
                                                class="pi pi-pencil"></i></p>
                                    </template>
                                    <template #content="{ closeCallback }">
                                        <span class="inline-flex flex-auto items-center gap-2">
                                            <InputNumber v-model="category.price" autofocus inputId="locale-indonesia"
                                                mode="currency" currency="IDR" locale="id-ID" />
                                            <Button icon="pi pi-check" outlined severity="success" class="m-0 p-0"
                                                @click="closeCallback" />
                                        </span>
                                    </template>
                                </Inplace>
                                <div class="w-4/12 flex justify-center">
                                    <p class="text-center inline-flex justify-start gap-2 md:hidden hover:bg-surface-100 transition-all rounded-md p-1 cursor-pointer"
                                        @click="onEditQty(order, category)">
                                        x({{formatPrice(category.qty) }})<i class="pi pi-pencil"
                                            style="font-size: 0.8rem"></i>
                                    </p>
                                    <Inplace class="inplace-custom-display md:block hidden">
                                        <template #display>
                                            <p class="inline-flex gap-2">x({{ formatPrice(category.qty) }}) <i
                                                    class="pi pi-pencil"></i></p>
                                        </template>
                                        <template #content="{ closeCallback }">
                                            <span class="inline-flex flex-auto items-center gap-2">
                                                <InputNumber v-model="category.qty" inputId="horizontal-buttons"
                                                    showButtons buttonLayout="horizontal" size="small" :min="0"
                                                    :max="99"
                                                    inputClass="max-w-12 text-center border-l border-l-red-500 border-r border-r-green-500 bg-transparent"
                                                    incrementButtonClass="border-green-500"
                                                    decrementButtonClass="border-red-500">
                                                    <template #incrementbuttonicon>
                                                        <span class="pi pi-plus" />
                                                    </template>
                                                    <template #decrementbuttonicon>
                                                        <span class="pi pi-minus" />
                                                    </template>
                                                </InputNumber>
                                                <Button icon="pi pi-check" outlined severity="success" class="m-0 p-0"
                                                    @click="closeCallback" />
                                            </span>
                                        </template>
                                    </Inplace>

                                </div>
                                <p class="m-0 md:p-0 py-1 font-normal w-4/12 text-end">Rp{{ formatPrice(category.price *
                                    category.qty)}}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Divider />
            <div class="flex flex-col gap-2 px-4">
                <div class="flex flex-col gap-2">
                    <div class="flex justify-between gap-2">
                        <p class="m-0">Subtotal Harga Barang</p>
                        <p class="m-0 text-end">Rp{{ formatPrice(200000) }}</p>
                    </div>
                    <div class="flex justify-between gap-2">
                        <p class="m-0">Diskon</p>
                        <p class="m-0 text-end">Rp{{ formatPrice(0) }}</p>
                    </div>
                    <div class="flex justify-between items-center gap-2">
                        <p class="m-0">Jenis Property<br /><span class="font-semibold">({{item.property.label}})</span>
                        </p>
                        <p class="text-end inline-flex justify-end gap-2 md:hidden hover:bg-surface-100 transition-all rounded-md p-1 cursor-pointer"
                            @click="visibleProperty=true">
                            Rp({{formatPrice(item.property.price) }})<i class="pi pi-pencil"
                                style="font-size: 0.8rem"></i>
                        </p>
                        <Inplace class="m-0 p-0 font-normal w-4/12 text-end inplace-custom-display md:block hidden">
                            <template #display>
                                <p class="m-0 text-end inline-flex flex-auto gap-2">Rp{{
                                    formatPrice(item.property.price) }}<i class="pi pi-pencil"></i></p>
                            </template>
                            <template #content="{ closeCallback }">
                                <span class="inline-flex flex-auto items-center gap-2">
                                    <InputNumber v-model="item.property.price" autofocus inputId="locale-indonesia"
                                        mode="currency" currency="IDR" locale="id-ID" />
                                    <Button icon="pi pi-check" outlined severity="success" class="m-0 p-0"
                                        @click="closeCallback" />
                                </span>
                            </template>
                        </Inplace>
                    </div>
                    <div class="flex justify-between items-center gap-2">
                        <p class="m-0">Butuh Tangga<br /><span class="font-semibold">({{item.useLadder? 'Butuh' : 'Tidak Butuh'}})</span></p>
                        <p class="text-center inline-flex justify-start gap-2 md:hidden hover:bg-surface-100 transition-all rounded-md p-1 cursor-pointer"
                            @click="visibleLadder=true">
                            Rp({{formatPrice(item.ladderPrice) }})<i class="pi pi-pencil"
                                style="font-size: 0.8rem"></i>
                        </p>
                        <Inplace class="m-0 p-0 font-normal w-4/12 text-end inplace-custom-display md:block hidden">
                            <template #display>
                                <p class="m-0 text-end inline-flex flex-auto gap-2">Rp{{ formatPrice(item.ladderPrice) }}<i class="pi pi-pencil"></i></p>
                            </template>
                            <template #content="{ closeCallback }">
                                <span class="inline-flex flex-auto items-center gap-2">
                                    <InputNumber v-model="item.ladderPrice" autofocus inputId="locale-indonesia"
                                        mode="currency" currency="IDR" locale="id-ID" />
                                    <Button icon="pi pi-check" outlined severity="success" class="m-0 p-0"
                                        @click="closeCallback" />
                                </span>
                            </template>
                        </Inplace>
                    </div>
                    <Divider />
                    <div class="flex justify-between gap-2">
                        <h6 class="m-0">Total Biaya</h6>
                        <h6 class="m-0 text-end">Rp{{ formatPrice(250000) }}</h6>
                    </div>
                </div>
            </div>
            <Divider />
            <Button label="Hubungi Admin" severity="success" icon="pi pi-whatsapp" class="max-w-fit mx-auto" />
        </div>
    </div>

    <!-- PRICE -->
    <Dialog v-model:visible="visiblePrice" position="bottom" modal header="Ubah Harga" :style="{ width: '25rem' }">
        <span class="text-muted-color block">Harga untuk {{perItem.label}}.</span>
        <span class="text-muted-color text-sm block mb-8">({{perItem.category}}).</span>
        <InputNumber v-model="perItem.price" autofocus inputId="locale-indonesia" mode="currency" currency="IDR"
            locale="id-ID" fluid class="mb-8" />

        <div class="flex justify-end gap-2">
            <Button type="button" label="Cancel" severity="secondary" @click="visiblePrice = false"></Button>
            <Button type="button" label="Save" @click="visiblePrice = false"></Button>
        </div>
    </Dialog>
    <!-- QTY -->
    <Dialog v-model:visible="visibleQty" position="bottom" modal header="Ubah QTY" :style="{ width: '25rem' }">
        <span class="text-muted-color block">QTY untuk {{perItemQty.label}}.</span>
        <span class="text-muted-color text-sm block mb-8">({{perItemQty.category}}).</span>
        <InputNumber v-model="perItemQty.qty" inputId="horizontal-buttons" showButtons buttonLayout="horizontal"
            :min="0" :max="99"
            inputClass=" text-center border-l border-l-red-500 border-r border-r-green-500 bg-transparent"
            incrementButtonClass="border-green-500" decrementButtonClass="border-red-500" class="mb-8" fluid>
            <template #incrementbuttonicon>
                <span class="pi pi-plus" />
            </template>
            <template #decrementbuttonicon>
                <span class="pi pi-minus" />
            </template>
        </InputNumber>
        <div class="flex justify-end gap-2">
            <Button type="button" label="Cancel" severity="secondary" @click="visibleQty = false"></Button>
            <Button type="button" label="Save" @click="visibleQty = false"></Button>
        </div>
    </Dialog>
    <Dialog v-model:visible="visibleProperty" position="bottom" modal header="Ubah Harga Property" :style="{ width: '25rem' }">
        <span class="text-muted-color block mb-8">Harga untuk property {{item.property.label}}.</span>
        <InputNumber v-model="item.property.price" autofocus inputId="locale-indonesia" mode="currency" currency="IDR"
            locale="id-ID" fluid class="mb-8" />
        <div class="flex justify-end gap-2">
            <Button type="button" label="Cancel" severity="secondary" @click="visibleProperty = false"></Button>
            <Button type="button" label="Save" @click="visibleProperty = false"></Button>
        </div>
    </Dialog>
    <Dialog v-model:visible="visibleLadder" position="bottom" modal header="Ubah Harga Kebutuhan Tangga" :style="{ width: '25rem' }">
        <span class="text-muted-color block mb-8">Harga untuk membutuhkan tangga di {{item.property.label}}.</span>
        <InputNumber v-model="item.ladderPrice" autofocus inputId="locale-indonesia" mode="currency" currency="IDR"
            locale="id-ID" fluid class="mb-8" />
        <div class="flex justify-end gap-2">
            <Button type="button" label="Cancel" severity="secondary" @click="visibleLadder = false"></Button>
            <Button type="button" label="Save" @click="visibleLadder = false"></Button>
        </div>
    </Dialog>
</template>