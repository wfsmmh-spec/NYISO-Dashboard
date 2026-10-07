<script setup>
defineProps({
  outages: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <ul class="recent-outage-list">
    <li v-for="outage in outages" :key="outage.id" class="outage-item">
      <div class="outage-details">
        <p class="outage-line-name">{{ outage.lineName }}</p>
        <p class="outage-meta">
          <span>{{ outage.voltage }}</span>
          <span>{{ outage.type }}</span>
        </p>
      </div>
      <time class="outage-time">{{ outage.time }}</time>
    </li>
  </ul>
</template>

<style scoped>
.recent-outage-list {
  display: grid;
  gap: 12px;
  margin: 24px 0 0;
  padding: 0;
  list-style: none;
}

.outage-item {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 12px;
  align-items: center;
  padding: 12px 14px;
  border: 1px solid rgb(75 175 235 / 24%);
  border-radius: 6px;
  background: rgb(12 43 71 / 85%);
}

.outage-details {
  min-width: 0;
  overflow-wrap: anywhere;
}

.outage-line-name {
  margin: 0;
  color: #dceeff;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.4;
}

.outage-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 4px 12px;
  margin: 4px 0 0;
  color: #8cb4d4;
  font-size: 13px;
  line-height: 1.5;
}

.outage-time {
  color: #48b8ee;
  font-size: 13px;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}
</style>
