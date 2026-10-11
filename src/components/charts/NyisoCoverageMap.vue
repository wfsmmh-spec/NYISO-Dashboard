<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import * as echarts from 'echarts'

const chartRef = ref(null)
const loading = ref(true)
const loadError = ref('')
const abortController = new AbortController()

let chart = null
let resizeObserver = null
let isUnmounted = false

function handleResize() {
  chart?.resize()
}

onMounted(async () => {
  window.addEventListener('resize', handleResize)

  try {
    const response = await fetch('/maps/new-york-state.geojson', {
      signal: abortController.signal,
    })

    if (!response.ok) {
      throw new Error('GeoJSON request failed')
    }

    const geoJson = await response.json()

    if (isUnmounted || !chartRef.value) {
      return
    }

    if (
      geoJson?.type !== 'FeatureCollection' ||
      !Array.isArray(geoJson.features) ||
      geoJson.features.length === 0
    ) {
      throw new Error('Invalid GeoJSON FeatureCollection')
    }

    echarts.registerMap('newYorkState', geoJson)
    chart = echarts.getInstanceByDom(chartRef.value) || echarts.init(chartRef.value)
    chart.setOption({
      animation: false,
      backgroundColor: 'transparent',
      series: [
        {
          type: 'map',
          map: 'newYorkState',
          roam: false,
          selectedMode: false,
          left: '3%',
          right: '3%',
          top: '3%',
          bottom: '3%',
          preserveAspect: true,
          label: { show: false },
          itemStyle: {
            areaColor: '#0c2b47',
            borderColor: '#48b8ee',
            borderWidth: 1.2,
          },
          emphasis: {
            label: { show: false },
            itemStyle: {
              areaColor: '#153e5c',
              borderColor: '#6ccefa',
            },
          },
        },
      ],
    })

    resizeObserver = new ResizeObserver(handleResize)
    resizeObserver.observe(chartRef.value)
  } catch {
    if (isUnmounted) {
      return
    }

    loadError.value = 'Unable to load the New York State map. Please refresh the page.'
    resizeObserver?.disconnect()
    resizeObserver = null
    chart?.dispose()
    chart = null
  } finally {
    if (!isUnmounted) {
      loading.value = false
    }
  }
})

onBeforeUnmount(() => {
  isUnmounted = true
  abortController.abort()
  window.removeEventListener('resize', handleResize)
  resizeObserver?.disconnect()
  resizeObserver = null
  chart?.dispose()
  chart = null
})
</script>

<template>
  <div class="nyiso-coverage-map">
    <div class="map-chart-container">
      <div ref="chartRef" class="map-chart" role="img" aria-label="Map of New York State"></div>
      <p
        v-if="loading || loadError"
        class="map-status"
        :class="{ 'map-error': loadError }"
        :role="loadError ? 'alert' : 'status'"
      >
        {{ loadError || 'Loading New York State map...' }}
      </p>
    </div>

    <div class="map-caption">
      <p>New York State Base Map</p>
      <p>NYISO A–K zone boundaries not yet included.</p>
    </div>
  </div>
</template>

<style scoped>
.nyiso-coverage-map {
  display: grid;
  grid-template-rows: minmax(0, 1fr) auto;
  gap: 8px;
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;
  padding: 12px;
  overflow: hidden;
  border: 1px solid rgb(75 175 235 / 20%);
  border-radius: 6px;
  background-color: #071b31;
}

.map-chart-container {
  position: relative;
  min-width: 0;
  min-height: 0;
}

.map-chart {
  width: 100%;
  height: 100%;
}

.map-status {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 16px;
  color: #8cb4d4;
  font-size: 14px;
  line-height: 1.5;
  text-align: center;
}

.map-error {
  color: #e5b5b5;
}

.map-caption {
  color: #8cb4d4;
  font-size: 12px;
  line-height: 1.5;
  text-align: center;
}

.map-caption p {
  margin: 0;
}
</style>
