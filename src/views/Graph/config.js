import nodeImg from '../../assets/node.png'
import { legendData } from './data'
import G6 from '@antv/g6'
console.log(G6.Legend)
const legend = new G6.Legend({
  data: legendData,
  layout: 'vertical',
  align: 'left',
  title: '图例',
  titleConfig: {
    style: {
      fill: '#fff',
    },
    offsetX: -15,
    offsetY: 10,
  },
  containerStyle: {
    fill: '#031547',
    lineWidth: 1,
  },
  position: 'bottom-right',
  padding: [4, 0, 10, 40],
  margin: [0, 10, 10, 0],
  filter: {
    enable: true,
    trigger: 'click',
    graphActiveState: 'activeByLegend',
    graphInactiveState: 'inactiveByLegend',
    filterFunctions: {
      电信光纤线路40G: (d) => {
        return d.legendType === '电信光纤线路40G'
      },
      联通光纤线路40G: (d) => {
        return d.legendType === '联通光纤线路40G'
      },
      联通光纤线路10G: (d) => {
        return d.legendType === '联通光纤线路10G'
      },
      广电光纤线路10G: (d) => {
        return d.legendType === '广电光纤线路10G'
      },
    },
  },
})
export const graphConfig = {
  fitView: true, // 是否开启画布自适应
  autoPaint: true,
  fitCenter: true,
  modes: {
    default: ['drag-combo', 'drag-canvas', 'zoom-canvas', 'drag-node'],
  },
  plugins: [legend],
  defaultNode: {
    type: 'image',
    img: nodeImg,
    size: [30, 30],
    labelCfg: {
      style: {
        fill: '#fff',
      },
    },
  },
  defaultEdge: {
    type: 'cubic-vertical',
    style: {
      lineWidth: 2,
    },
  },
  defaultCombo: {
    type: 'rect',
    size: [300, 100],
    style: {
      fill: '',
      stroke: '#203b69',
      shadowBlur: 20,
      shadowColor: 'blue',
    },
    labelCfg: {
      style: {
        fill: '#fff',
      },
      position: 'top',
    },
  },
  nodeStateStyles: {
    activeByLegend: {
      lineWidth: 10,
      strokeOpacity: 0.5,
    },
    inactiveByLegend: {
      opacity: 0.5,
    },
  },
  edgeStateStyles: {
    activeByLegend: {
      lineWidth: 3,
    },
    inactiveByLegend: {
      opacity: 0.05,
    },
  },
}
