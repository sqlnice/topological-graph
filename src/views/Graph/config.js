import nodeImg from '../../assets/node.png'
import { legendData } from './data'
import G6 from '@antv/g6'
const legend = new G6.Legend({
  data: legendData,
  layout: 'vertical',
  align: 'left',
  title: '图例',
  titleConfig: {
    position: 'left',
    offsetX: 0,
    offsetY: 12,
  },
  position: 'bottom-right',
  padding: [4, 16, 8, 16],
  margin: [0, 100, 100, 0],
  filter: {
    enable: true,
    trigger: 'click',
    graphActiveState: 'activeByLegend',
    graphInactiveState: 'inactiveByLegend',
    filterFunctions: {
      绿色边: (d) => {
        return d.legendType === '绿色边'
      },
      红色边: (d) => {
        return d.legendType === '红色边'
      },
      紫色边: (d) => {
        return d.legendType === '紫色边'
      },
    },
  },
})
export const graphConfig = {
  fitView: true, // 是否开启画布自适应
  autoPaint: true,
  fitCenter: true,
  modes: {
    default: ['drag-combo', 'drag-canvas', 'zoom-canvas'],
  },
  plugins: [legend],
  defaultNode: {
    type: 'image',
    img: nodeImg,
    size: [30, 30],
    // labelCfg: {
    //   style: {
    //     fill: '#fff',
    //   },
    // },
  },
  defaultEdge: {
    style: {
      lineWidth: 2,
    },
  },
  defaultCombo: {
    type: 'rect',
    size: [300, 100],
    style: {
      fill: '',
    },
    labelCfg: {
      // style: {
      //   fill: '#fff',
      // },
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
      opacity: 0.5,
    },
  },
}
