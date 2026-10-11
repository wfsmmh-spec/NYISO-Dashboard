// 仅用于前端开发演示，不代表真实 NYISO 数据或统计结果。

// Dashboard KPI
export const dashboardKpis = [
  {
    id: 'total',
    label: 'Total Outages',
    value: 1284,
  },
  {
    id: 'automatic',
    label: 'Automatic Outages',
    value: 936,
  },
  {
    id: 'scheduled',
    label: 'Scheduled Outages',
    value: 348,
  },
]

// Annual outage trend
export const annualOutageTrend = [
  { year: '2019', count: 120 },
  { year: '2020', count: 156 },
  { year: '2021', count: 143 },
  { year: '2022', count: 181 },
  { year: '2023', count: 169 },
  { year: '2024', count: 205 },
  { year: '2025', count: 192 },
]

// Voltage level outage distribution
export const voltageLevelOutages = [
  { voltage: '115 kV', count: 320 },
  { voltage: '138 kV', count: 210 },
  { voltage: '230 kV', count: 180 },
  { voltage: '345 kV', count: 96 },
]

// Outage type distribution
export const outageTypeDistribution = [
  { name: 'Automatic', value: 936 },
  { name: 'Scheduled', value: 348 },
]

// Recent outage events
export const recentOutages = [
  {
    id: 1,
    lineName: 'LINE_A',
    voltage: '345 kV',
    type: 'Automatic',
    time: '14:25',
  },
  {
    id: 2,
    lineName: 'LINE_B',
    voltage: '230 kV',
    type: 'Scheduled',
    time: '13:40',
  },
  {
    id: 3,
    lineName: 'LINE_C',
    voltage: '115 kV',
    type: 'Automatic',
    time: '12:18',
  },
]
