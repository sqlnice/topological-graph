const 紫色 = '#873bf4'
const 绿色 = 'green'
const 红色 = 'red'
const 紫色边 = {
  style: {
    width: 50,
    stroke: 紫色,
  },
}
const 绿色边 = {
  style: {
    stroke: 绿色,
  },
}
const 红色边 = {
  style: {
    lineDash: [2, 2],
    stroke: 红色,
  },
}

export const legendData = {
  edges: [
    {
      type: 'line',
      id: '紫色边',
      label: '紫色边',
      ...紫色边,
    },
  ],
}
export const data = {
  // 点集
  nodes: [
    {
      id: 'DC1node',
      label: 'SDN H3C S10508X-V',
      comboId: 'DC1大数据管理中心',
      x: 300,
      y: 100,
    },
    {
      id: 'DC2node',
      label: 'SDN H3C S10508X-V',
      comboId: 'SDN教育网',
      x: 700,
      y: 100,
    },
    {
      id: '星洲小学',
      label: '星洲小学',
      type: 'image',
      x: 100,
      y: 400,
    },
    {
      id: '星海小学',
      label: '星海小学',
      type: 'image',
      x: 100,
      y: 450,
    },
  ],
  // 边集
  edges: [
    {
      source: 'DC1node',
      target: '星洲小学',
      legendType: '绿色边',
      ...绿色边,
    },
    {
      source: 'DC2node',
      target: '星洲小学',
      legendType: '红色边',
      ...红色边,
    },
    {
      source: 'DC1node',
      target: '星海小学',
      legendType: '紫色边',
      ...紫色边,
    },
  ],
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
