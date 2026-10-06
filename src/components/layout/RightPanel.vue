<script setup>
import PanelCard from '../common/PanelCard.vue'
import OutageTypePieChart from '../charts/OutageTypePieChart.vue'
import { recentOutages } from '@/mock/dashboardMock.js'
</script>

<template>
  <PanelCard title="Recent Outages">
    <OutageTypePieChart />

    <div v-for="outage in recentOutages" :key="outage.id">
      {{ outage.lineName }} - {{ outage.voltage }} kV
    </div>
  </PanelCard>
</template>
