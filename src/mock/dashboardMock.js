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
