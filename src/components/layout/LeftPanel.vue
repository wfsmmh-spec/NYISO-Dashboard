<script setup>
import PanelCard from '../common/PanelCard.vue'
import KpiCard from '../common/KpiCard.vue'
import VoltageLevelBarChart from '../charts/VoltageLevelBarChart.vue'
import { dashboardKpis } from '@/mock/dashboardMock.js'
</script>

<template>
  <PanelCard title="Left Panel">
    <div class="kpi-grid">
      <KpiCard
        v-for="item in dashboardKpis"
        :key="item.id"
        :label="item.label"
        :value="item.value"
      />
    </div>

    <VoltageLevelBarChart />
  </PanelCard>
</template>

<style scoped>
.kpi-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  margin-bottom: 24px;
}
</style>
