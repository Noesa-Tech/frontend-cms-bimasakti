<script setup lang="ts">
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';

</script>
<template>
    <TopBreadcrumb :breadcrumbItems="[{ label: 'Master' }, { label: 'Lokasi' }]" />
    <div class="card mt-8">
        <Tabs value="0" scrollable>
            <TabList>
                <Tab value="0">Provinsi</Tab>
                <Tab value="1">Kabupaten/Kota</Tab>
                <Tab value="2">Kecamatan</Tab>
                <Tab value="3">Kelurahan</Tab>
            </TabList>
            <TabPanels>
                <TabPanel value="0">
                    <MasterProvinceTable />
                </TabPanel>
                <TabPanel value="1">
                    <MasterCityTable />
                </TabPanel>
                <TabPanel value="2">
                    <MasterDistrictTable />
                </TabPanel>
                <TabPanel value="3">
                    <MasterVillageTable />
                </TabPanel>
            </TabPanels>
        </Tabs>
    </div>
</template>