<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
  value: {
    type: [Number, String],
    required: true,
  },
})
</script>

<template>
  <div class="kpi-card">
    <p class="kpi-label">{{ label }}</p>
    <p class="kpi-value">{{ value }}</p>
  </div>
</template>

<style scoped>
.kpi-card {
  display: grid;
  grid-template-rows: 1fr auto;
  gap: 8px;
  min-width: 0;
  padding: 14px 12px;
  border: 1px solid rgb(75 175 235 / 32%);
  border-radius: 6px;
  background: rgb(12 43 71 / 85%);
}

.kpi-label {
  margin: 0;
  color: #8cb4d4;
  font-size: 12px;
  line-height: 1.5;
  overflow-wrap: anywhere;
}

.kpi-value {
  margin: 0;
  color: #48b8ee;
  font-size: 28px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  line-height: 1.2;
  overflow-wrap: anywhere;
}
</style>
