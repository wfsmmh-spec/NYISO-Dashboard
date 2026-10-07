<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <section class="panel-card" :aria-label="title">
    <header class="panel-card-header">
      <h2 class="panel-card-title">{{ title }}</h2>
    </header>

    <div class="panel-card-content">
      <slot />
    </div>
  </section>
</template>

<style scoped>
.panel-card {
  display: grid;
  grid-template-rows: auto minmax(0, 1fr);
  min-width: 0;
  min-height: 0;
  overflow: hidden;
  border: 1px solid rgb(75 175 235 / 28%);
  border-radius: 8px;
  background: linear-gradient(180deg, rgb(12 43 71 / 82%), rgb(5 19 36 / 92%));
  box-shadow: inset 0 0 24px rgb(36 124 185 / 6%);
}

.panel-card-header {
  padding: 16px 24px;
  border-bottom: 1px solid rgb(75 175 235 / 20%);
  background: linear-gradient(90deg, rgb(31 108 162 / 14%), transparent);
}

.panel-card-title {
  margin: 0;
  padding-left: 12px;
  border-left: 2px solid #48b8ee;
  color: #dceeff;
  font-size: 22px;
  font-weight: 600;
  line-height: 1.4;
  letter-spacing: 0.8px;
  overflow-wrap: anywhere;
}

.panel-card-content {
  min-width: 0;
  min-height: 0;
  padding: 20px 24px;
  overflow: auto;
  color: #8cb4d4;
  font-size: 18px;
  line-height: 1.6;
}
</style>
