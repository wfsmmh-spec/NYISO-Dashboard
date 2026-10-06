<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import * as echarts from 'echarts'
import { voltageLevelOutages } from '../../mock/dashboardMock.js'

const chartRef = ref(null)
let chart = null

function handleResize() {
  chart.resize()
}

onMounted(() => {
  chart = echarts.init(chartRef.value)
  chart.setOption({
    animation: false,
    color: ['#48b8ee'],
    title: {
      text: 'Voltage Level Outage Distribution',
      left: 'center',
      textStyle: { color: '#dceeff', fontSize: 14, fontWeight: 500 },
    },
    tooltip: {
      trigger: 'axis',
      backgroundColor: '#0c2b47',
      borderColor: '#48b8ee',
      textStyle: { color: '#dceeff' },
    },
    grid: {
      left: 16,
      right: 16,
      top: 48,
      bottom: 16,
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      data: voltageLevelOutages.map((item) => item.voltage),
      axisLine: { lineStyle: { color: '#315a7a' } },
      axisTick: { show: false },
      axisLabel: { color: '#8cb4d4', interval: 0 },
    },
    yAxis: {
      type: 'value',
      minInterval: 1,
      axisLabel: { color: '#8cb4d4' },
      splitLine: { lineStyle: { color: '#24445e' } },
    },
    series: [
      {
        name: 'Outages',
        type: 'bar',
        data: voltageLevelOutages.map((item) => item.count),
        barMaxWidth: 40,
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
  <div ref="chartRef" class="voltage-level-bar-chart"></div>
</template>

<style scoped>
.voltage-level-bar-chart {
  width: 100%;
  height: 300px;
}
</style>
