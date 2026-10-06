// 仅用于前端开发阶段的 Mock 测试，不代表真实 NYISO 统计结果。
export const dashboardSummary = {
  totalOutages: 1284,
  automaticOutages: 936,
  scheduledOutages: 348,
}

export const recentOutages = [
  {
    id: 1,
    lineName: 'LINE_A',
    voltage: 345,
  },
  {
    id: 2,
    lineName: 'LINE_B',
    voltage: 230,
  },
  {
    id: 3,
    lineName: 'LINE_C',
    voltage: 115,
  },
]

// 仅用于前端开发演示，不代表真实 NYISO 统计结果。
export const annualOutageTrend = [
  { year: '2019', count: 120 },
  { year: '2020', count: 156 },
  { year: '2021', count: 143 },
  { year: '2022', count: 181 },
  { year: '2023', count: 169 },
  { year: '2024', count: 205 },
  { year: '2025', count: 192 },
]

// 仅用于前端开发演示，不代表真实 NYISO 统计结果。
export const voltageLevelOutages = [
  { voltage: '115 kV', count: 320 },
  { voltage: '138 kV', count: 210 },
  { voltage: '230 kV', count: 180 },
  { voltage: '345 kV', count: 96 },
]

// 仅用于前端开发演示，不代表真实 NYISO 统计结果。
export const outageTypeDistribution = [
  { name: 'Automatic', value: 936 },
  { name: 'Scheduled', value: 348 },
]
