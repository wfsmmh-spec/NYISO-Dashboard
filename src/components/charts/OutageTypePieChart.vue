<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import * as echarts from 'echarts'
import { outageTypeDistribution } from '../../mock/dashboardMock.js'

const chartRef = ref(null)
let chart = null

function handleResize() {
  chart.resize()
}

onMounted(() => {
  chart = echarts.init(chartRef.value)
  chart.setOption({
    animation: false,
    color: ['#48b8ee', '#2878b5'],
    title: {
      text: 'Outage Type Distribution',
      left: 'center',
      textStyle: { color: '#dceeff', fontSize: 14, fontWeight: 500 },
    },
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {c} ({d}%)',
      backgroundColor: '#0c2b47',
      borderColor: '#48b8ee',
      textStyle: { color: '#dceeff' },
    },
    legend: {
      left: 'center',
      bottom: 0,
      textStyle: { color: '#8cb4d4' },
    },
    series: [
      {
        name: 'Outages',
        type: 'pie',
        radius: '60%',
        center: ['50%', '48%'],
        data: outageTypeDistribution,
        label: {
          position: 'inside',
          formatter: '{d}%',
          color: '#dceeff',
        },
        itemStyle: { borderColor: '#0c2b47', borderWidth: 2 },
      },
    ],
  })

  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
  chart.dispose()
  chart = null
})
</script>

<template>
  <div ref="chartRef" class="outage-type-pie-chart"></div>
</template>

<style scoped>
.outage-type-pie-chart {
  width: 100%;
  height: 260px;
}
</style>
