<script setup>
import { useScreenScale } from '../composables/useScreenScale'

const { scale } = useScreenScale()
</script>

<template>
  <main class="dashboard-viewport">
    <section
      class="dashboard-screen"
      :style="{ transform: `translate(-50%, -50%) scale(${scale})` }"
      aria-labelledby="dashboard-title"
    >
      <header class="dashboard-header">
        <h1 id="dashboard-title">NYISO TRANSMISSION OUTAGE MONITORING SYSTEM</h1>
      </header>

      <p class="dashboard-placeholder">Dashboard Framework</p>
    </section>
  </main>
</template>
