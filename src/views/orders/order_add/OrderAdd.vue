<script setup lang="ts">
import DatePicker from "primevue/datepicker";
import Fieldset from "primevue/fieldset";
import Tree from "primevue/tree";
import { format } from 'date-fns';
import { ServiceStore } from '@/store/service'
import { OrderStore } from '@/store/order'

const router = useRouter();
const $order = OrderStore()
const $service = ServiceStore()

const expandedKeys = ref<any>({});

const loadingForm = ref<boolean>(false)
const query = reactive<any>({
    selectedService: null,
    date: null,
    name: "",
    phone: "",
    email: "",
    province: null as Province | null | undefined,
    city: null as City | null | undefined,
    subdistrict: null as Subdistrict | null | undefined,
    village: null as Village | null | undefined,
    address: "",
    selectedProperties: null,
    isAccept: false,
    useLadder: false,
});

const itemIssue = ref<any[]>([]);


const items = computed(() => {
    return $service.serviceAll || [];
});

onMounted(async () => {
    await $service.fetchService()
})

async function onServiceClicked(item: any) {
    query.selectedService = item;
    const res = await $service.fetchProblem(query.selectedService.id as number);

    itemIssue.value = res?.data.map((e: any) => ({
        id: e.id,
        label: e.name,
        status: false,
        isDefault: true,
        category: e.sub_problem.map((el: any) => ({
            id: el.id,
            id_parent: e.id,
            label: el.name,
            qty: 0,
            isDefault: true,
        })),
    }));
}

interface Province {
    id: number;
    name: string;
}

interface City {
    id: number;
    name: string;
}

interface Subdistrict {
    id: number;
    name: string;
}

interface Village {
    id: number;
    name: string;
}

const selectedItems = computed(() => {
    if (itemIssue.value.length > 0) {
        return itemIssue.value.filter((item) => item.status && item.category.some((cat: any) => cat.qty >= 1));
    }
    return [];
});

const treeNodes = computed(() => {
    return selectedItems.value.map((item: any) => ({
        key: item.id,
        label: item.label,
        children: item.category
            .filter((category: any) => category.qty >= 1)
            .map((category: any, index: number) => {
                return {
                    id_parent: `${category.id_parent}`,
                    key: `${category.id}`,
                    label: `- ${category.label} (x${category.qty})`,
                    name: `${category.label}`,
                    qty: category.qty,
                };
            }),
    }));
});


const expandAllNodes = (nodes: any) => {
    nodes.forEach((node: any) => {
        expandedKeys.value[node.key] = true;
        if (node.children) {
            expandAllNodes(node.children);
        }
    });
};

const addCategory = (item: any) => {
    item.category.push({
        id_parent: item.id,
        label: "",
        qty: 0,
        isDefault: false,
    });
};

const addService = () => {
    itemIssue.value.push({
        label: "",
        status: false,
        isDefault: false,
        category: [],
    });
};

const removeCategory = (item: any, index: number) => {
    item.category.splice(index, 1);
};
const removeService = (item: any, index: number) => {
    itemIssue.value.splice(index, 1);
};

const notDefaultItems = computed(() => itemIssue.value.filter((item: any) => !item.isDefault));

const toggleInplace = (index: number, e: boolean) => {
    itemIssue.value[index].status = e;

    const inplaceCheckbox = document.getElementById("inplacecheckbox" + index);
    if (e && inplaceCheckbox && itemIssue.value[index].label === "") {
        inplaceCheckbox.click();
    }

    const inplaceUncheckbox = document.getElementById("inplaceuncheckbox" + index);
    if (!e && inplaceUncheckbox) {
        inplaceUncheckbox.click();
    }
};

async function setForm(e: any) {
    loadingForm.value = true

    query.name = e.name;
    query.phone = e.phone;
    (query.email = e.email), (query.address = e.address);
    (query.province = e.selectedProvince), (query.city = e.selectedCity), (query.subdistrict = e.selectedSubdistrict);
    query.village = e.selectedVillage;

    await onSubmit()
    loadingForm.value = false
}

async function onSubmit() {
    const rawService = treeNodes.value.flatMap(item => item.children);
    let fixService = [] as any;
    rawService.forEach(el => {
        let dataService = {
            service_problem: el.id_parent,
            service_sub_problem_id: el.key,
            qty: el.qty,
            name: el.name,
            isCustom: el.key === 'undefined' ? true : false
        }
        fixService.push(dataService)
    });

    const payload = {
        name: query.name,
        email: query.email,
        phone: "+62" + query.phone,
        date_appointment: format(query?.date, 'yyyy-MM-dd HH:mm:ss'),
        properties_id: query?.selectedProperties?.id,
        village_id: query?.village?.id,
        isLadderRequired: query?.useLadder,
        service_id: query.selectedService.id,
        location: `${query.address}, ${provinceName.value}, ${cityName.value}, ${subdistrictName.value}, ${villageName.value}`,
        order_service: JSON.stringify(fixService)
    }

    await $order.createOrder(payload)
    router.push(`/pesanan`);
}

const provinceName = computed(() => {
    return query.province?.name ?? "Province is not selected";
});

const cityName = computed(() => {
    return query.city?.name ?? "City is not selected";
});

const subdistrictName = computed(() => {
    return query.subdistrict?.name ?? "Subdistrict is not selected";
});

const villageName = computed(() => {
    return query.village?.name ?? "Village is not selected";
});

watch(treeNodes, (newTreeNodes: any) => {
    expandedKeys.value = {};
    expandAllNodes(newTreeNodes);
});

</script>
<template>
    <TopBreadcrumb :breadcrumbItems="[{ label: 'Pesanan', route: '/pesanan' }, { label: 'Tambah' }]" />
    <div class="card mt-8">
        <div class="mb-2">
            <h5 class="m-0">Pilih Layanan</h5>
            <p v-if="query.selectedService" class="m-0">{{ query.selectedService.name }}</p>
        </div>
        <div class="grid grid-cols-12 gap-8 auto-rows-[1fr]">
            <div v-for="(item, index) in items" :key="index"
                class="lg:col-span-2 md:col-span-3 sm:col-span-4 col-span-6">
                <div class="flex flex-col items-center gap-2 border cursor-pointer rounded-md p-4 h-full transition-all hover:border-primary-600 hover:bg-primary-100 dark:hover:bg-primary-900"
                    :class="{ 'border-primary ': query.selectedService?.id != item.id, 'border-green-500 bg-green-100 dark:bg-green-900': query.selectedService?.id == item.id }"
                    @click="onServiceClicked(item)">
                    <img :src="item.image_url" :alt="item.name" class="h-16">
                    <h6 class="m-0 text-center">{{ item.name }}</h6>
                </div>
            </div>
        </div>
    </div>
    <div v-if="itemIssue.length > 0" class="card mt-8">
        <h5>Pilih Kategori</h5>
        <div class="flex flex-col">
            <div v-for="(item, index) in itemIssue" :key="index">
                <div class="py-4" :class="{ 'border-t border-surface-200 dark:border-surface-700 ': index !== 0 }">
                    <div class="flex items-center gap-4">
                        <Checkbox v-model="item.status" @update:modelValue="toggleInplace(index, $event)" binary
                            :inputId="item.label" />
                        <label v-if="item.isDefault" :for="item.label" class="text-lg">
                            {{ item.isDefault ? item.label : "Lainnya" }}
                        </label>
                        <Inplace class="w-full inplace-custom-display" :id="'inplace' + index" v-else>
                            <template #display>
                                <label :for="item.label" class="text-lg" :id="`inplacecheckbox${index}`">
                                    {{ item.label.length > 0 ? item.label : "Lainnya" }}
                                </label>
                            </template>
                            <template #content="{ closeCallback }">
                                <InputGroup class="p-0 m-0">
                                    <FloatLabel variant="on">
                                        <InputText id="" v-model="item.label" autocomplete="off" fluid />
                                    </FloatLabel>
                                    <InputGroupAddon class="m-0 p-0">
                                        <button style="display: none" :id="`inplaceuncheckbox${index}`"
                                            @click="closeCallback"></button>
                                        <Button icon="pi pi-check" severity="success" variant="text"
                                            @click="closeCallback" />
                                    </InputGroupAddon>
                                </InputGroup>
                            </template>
                        </Inplace>
                        <Button v-if="!item.isDefault && notDefaultItems.length > 1" icon="pi pi-trash" class="p-0 m-0"
                            severity="danger" text @click="removeService(item, index)" />
                    </div>

                    <div v-if="item.status" class="lg:mx-10 mt-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-950">
                        <p>Pilih Kategori</p>
                        <Divider />
                        <div v-for="(category, i) in item.category" :key="i"
                            class="flex flex-col sm:flex-row sm:items-center justify-between sm:gap-4 gap-2 w-full"
                            :class="{ 'mt-4': i !== 0 }">
                            <div class="flex items-center gap-4 w-full" :class="{ 'text-primary': category.qty > 0 }">
                                <i v-if="category.qty > 0" class="pi pi-check"></i>
                                <div class="w-full">
                                    <p v-if="category.isDefault">{{ category.label }}</p>
                                    <InputGroup v-else class="p-0 m-0">
                                        <FloatLabel variant="on">
                                            <InputText :id="'category' + i" v-model="category.label" autocomplete="off"
                                                fluid />
                                            <label :for="'category' + i">Kategori {{ i + 1 }}</label>
                                        </FloatLabel>
                                        <InputGroupAddon class="m-0 p-0" v-if="!category.isDefault">
                                            <Button icon="pi pi-trash" severity="danger" variant="text"
                                                @click="removeCategory(item, i)" />
                                        </InputGroupAddon>
                                    </InputGroup>
                                    <span class="text-surface-400 dark:text-surface-400 text-sm mt-1">{{ category.desc
                                    }}</span>
                                </div>
                            </div>

                            <InputNumber v-model="category.qty" inputId="horizontal-buttons" showButtons
                                buttonLayout="horizontal" size="small" :min="0" :max="99"
                                inputClass="max-w-12 text-center border-l border-l-red-500 border-r border-r-green-500 bg-transparent"
                                incrementButtonClass="border-green-500" decrementButtonClass="border-red-500">
                                <template #incrementbuttonicon>
                                    <span class="pi pi-plus" />
                                </template>
                                <template #decrementbuttonicon>
                                    <span class="pi pi-minus" />
                                </template>
                            </InputNumber>
                        </div>
                        <Button label="Tambah Kategori" class="mt-4" @click="addCategory(item)" />
                    </div>
                </div>
            </div>
            <Button label="Tambah Layanan" class="mt-4 w-fit" @click="addService" />
        </div>
    </div>
    <div v-if="itemIssue.length > 0" class="card mt-8">
        <h5>Pilih Tanggal Kunjungan</h5>
        <DatePicker v-model="query.date" inline showWeek class="w-full mt-4" showTime hourFormat="24" />
    </div>
    <div v-if="itemIssue.length > 0" class="card mt-8">
        <form-properties @on-click="query.selectedProperties = $event" @ladder="query.useLadder = $event"
            :serviceId="query.selectedService.id" />
    </div>
    <div v-if="itemIssue.length > 0" class="card mt-8">
        <FormOrder :isLoading="loadingForm" @onSave="setForm($event)" />
    </div>
</template>