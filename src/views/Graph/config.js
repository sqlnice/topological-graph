export const graphConfig = {
  width: 600,
  height: 500,
  fitView: true, // 是否开启画布自适应
  fitViewPadding: 50,
  modes: {
    default: ['drag-combo', 'drag-node', 'drag-canvas', 'zoom-canvas'],
  },
  layout: {
    type: 'comboForce',
    onTick: () => console.log('onTick'),
    onLayoutEnd: () => console.log('end'),
  },
}
