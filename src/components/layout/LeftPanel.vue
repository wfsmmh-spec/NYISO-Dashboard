<script setup>
import PanelCard from '../common/PanelCard.vue'
import { dashboardSummary } from '@/mock/dashboardMock.js'
</script>

<template>
  <PanelCard title="Left Panel">
    <p>Total Outages: {{ dashboardSummary.totalOutages }}</p>
    <p>Automatic Outages: {{ dashboardSummary.automaticOutages }}</p>
    <p>Scheduled Outages: {{ dashboardSummary.scheduledOutages }}</p>
  </PanelCard>
</template>
