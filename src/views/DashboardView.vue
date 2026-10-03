<script setup>
import DashboardHeader from '../components/layout/DashboardHeader.vue'
import LeftPanel from '../components/layout/LeftPanel.vue'
import CenterPanel from '../components/layout/CenterPanel.vue'
import RightPanel from '../components/layout/RightPanel.vue'
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
      <DashboardHeader />

      <div class="dashboard-body">
        <LeftPanel />
        <CenterPanel />
        <RightPanel />
      </div>
    </section>
  </main>
</template>
