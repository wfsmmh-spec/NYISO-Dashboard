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
  border: 1px solid rgb(75 175 235 / 32%);
  border-radius: 6px;
  background: linear-gradient(180deg, rgb(12 43 71 / 70%), rgb(5 19 36 / 85%));
  box-shadow: inset 0 0 32px rgb(36 124 185 / 8%);
}

.panel-card-header {
  padding: 18px 24px;
  border-bottom: 1px solid rgb(75 175 235 / 24%);
  background: linear-gradient(90deg, rgb(31 108 162 / 18%), transparent);
}

.panel-card-title {
  margin: 0;
  padding-left: 12px;
  border-left: 3px solid #48b8ee;
  color: #dceeff;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.4;
  letter-spacing: 1px;
  overflow-wrap: anywhere;
}

.panel-card-content {
  min-width: 0;
  min-height: 0;
  padding: 24px;
  overflow: auto;
  color: #8cb4d4;
  font-size: 18px;
  line-height: 1.6;
}
</style>
