<script setup>
import PanelCard from '../common/PanelCard.vue'
import RecentOutageList from '../common/RecentOutageList.vue'
import OutageTypePieChart from '../charts/OutageTypePieChart.vue'
import { recentOutages } from '@/mock/dashboardMock.js'
</script>

<template>
  <PanelCard title="Recent Outages">
    <OutageTypePieChart />

    <RecentOutageList :outages="recentOutages" />
  </PanelCard>
</template>
