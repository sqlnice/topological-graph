export const data = {
  // 点集
  nodes: [
    {
      id: 'DC1node',
      label: 'SDN H3C S10508X-V',
      comboId: 'DC1大数据管理中心',
    },
    {
      id: 'DC2node',
      label: 'SDN H3C S10508X-V',
      comboId: 'SDN教育网',
    },
    {
      id: '星洲小学',
      label: '星洲小学',
      type: 'image',
      size: 30,
    },
  ],
  // 边集
  edges: [{ source: 'DC1node', target: '星洲小学' }],
  combos: [
    {
      id: 'DC1大数据管理中心',
      label: 'DC1大数据管理中心',
    },
    {
      id: 'SDN教育网',
      label: 'SDN教育网',
    },
  ],
}
