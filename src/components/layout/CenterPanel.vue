<script setup>
import PanelCard from '../common/PanelCard.vue'
import AnnualTrendChart from '../charts/AnnualTrendChart.vue'
import NyisoCoverageMap from '../charts/NyisoCoverageMap.vue'
</script>

<template>
  <div class="center-panel">
    <PanelCard title="Annual Outage Trend">
      <AnnualTrendChart />
    </PanelCard>

    <PanelCard title="NYISO Coverage Map">
      <NyisoCoverageMap />
    </PanelCard>
  </div>
</template>

<style scoped>
.center-panel {
  display: grid;
  grid-template-rows: minmax(0, 44fr) minmax(0, 56fr);
  gap: 16px;
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;
  overflow: hidden;
}

.center-panel :deep(.panel-card-content) {
  overflow: hidden;
}
</style>
