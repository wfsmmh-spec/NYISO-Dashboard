<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import * as echarts from 'echarts'
import { annualOutageTrend } from '../../mock/dashboardMock.js'

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
    tooltip: {
      trigger: 'axis',
      backgroundColor: '#0c2b47',
      borderColor: '#48b8ee',
      textStyle: { color: '#dceeff' },
    },
    grid: {
      left: 16,
      right: 16,
      top: 24,
      bottom: 16,
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: annualOutageTrend.map((item) => item.year),
      axisLine: { lineStyle: { color: '#315a7a' } },
      axisTick: { show: false },
      axisLabel: { color: '#8cb4d4' },
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
        type: 'line',
        data: annualOutageTrend.map((item) => item.count),
        symbolSize: 6,
        lineStyle: { width: 2 },
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
  <div ref="chartRef" class="annual-trend-chart"></div>
</template>

<style scoped>
.annual-trend-chart {
  width: 100%;
  height: 100%;
}
</style>
