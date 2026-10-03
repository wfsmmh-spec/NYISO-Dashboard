<script setup>
import PanelCard from '../common/PanelCard.vue'
import { recentOutages } from '@/mock/dashboardMock.js'
</script>

<template>
  <PanelCard title="Recent Outages">
    <div v-for="outage in recentOutages" :key="outage.id">
      {{ outage.lineName }} - {{ outage.voltage }} kV
    </div>
  </PanelCard>
</template>
