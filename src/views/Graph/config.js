import nodeImg from '../../assets/node.png'
import { legendData } from './data'
import G6 from '@antv/g6'
export const legend = new G6.Legend({
  data: legendData,
  layout: 'vertical',
  align: 'center',
  title: '图例',
  titleConfig: {
    position: 'center',
    style: {
      fill: '#fff',
    },
    offsetX: 30,
    offsetY: 20,
  },
  containerStyle: {
    fill: '#0c1932',
    stroke: '#4fcff7',
    lineWidth: 1,
    radius: 1,
    lineDash: [2],
  },
  position: 'bottom-right',
  padding: [10, 0, 30, 70],
  margin: [0, 10, 10, 0],
  filter: {
    enable: true,
    trigger: 'click',
    multiple: true,
    graphActiveState: 'activeByLegend',
    graphInactiveState: 'inactiveByLegend',
    filterFunctions: {
      供应商2光纤线路40G: d => {
        return d.legendType === '供应商2光纤线路40G'
      },
      供应商1光纤线路40G: d => {
        return d.legendType === '供应商1光纤线路40G'
      },
      供应商1光纤线路10G: d => {
        return d.legendType === '供应商1光纤线路10G'
      },
      供应商3光纤线路10G: d => {
        return d.legendType === '供应商3光纤线路10G'
      },
    },
  },
})

const 默认节点样式 = {
  type: 'image',
  img: nodeImg,
  size: [30, 30],
  labelCfg: {
    style: {
      fill: '#71b0db',
    },
  },
}
const 默认边样式 = {
  type: 'cubic-vertical',
  curveOffset: [-50, 0],
  style: {
    lineWidth: 1,
  },
}
export const graphConfig = {
  fitView: true, // 是否开启画布自适应
  autoPaint: true,
  fitCenter: true,
  modes: {
    default: ['drag-canvas', 'zoom-canvas'],
  },
  plugins: [legend],
  defaultNode: 默认节点样式,
  defaultEdge: 默认边样式,
  edgeStateStyles: {
    activeByLegend: {
      lineWidth: 2,
    },
    inactiveByLegend: {
      opacity: 0.2,
    },
  },
}
