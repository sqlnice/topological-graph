<template>
  <div id="mountNode"></div>
</template>

<script setup>
import { onMounted } from 'vue'
import G6 from '@antv/g6'
import { graphConfig } from './config'
import { data } from './data'
let graph = null

onMounted(() => {
  initGraph()
})
const initGraph = () => {
  const width = document.getElementById('mountNode').scrollWidth
  const height = document.getElementById('mountNode').scrollHeight || 500

  graph = new G6.Graph({
    container: 'mountNode',
    width,
    height,
    ...graphConfig,
  })
  graph.data(data)
  graph.render()
  graph.fitView()
  graph.on('node:click', (evt) => {
    // 当前点上存在线
    // if (item.getEdges().length) {
    //   graph.getEdges().forEach((edge) => {
    //     // 线的目标是此节点
    //     if (edge.getTarget() === item) {
    //       graph.setItemState(edge, 'inactiveByLegend', false)
    //       graph.setItemState(edge, 'activeByLegend', true)
    //       console.log(edge)
    //     } else if (edge.getSource() === item) {
    //       // 线的起点是此节点
    //       graph.setItemState(edge, 'inactiveByLegend', false)
    //       graph.setItemState(edge, 'activeByLegend', true)
    //     } else {
    //       // 其他无关线
    //       graph.setItemState(edge, 'activeByLegend', false)
    //       graph.setItemState(edge, 'inactiveByLegend', true)
    //     }
    //   })
    // }
  })
  graph.on('canvas:click', (evt) => {
    // graph.getEdges().forEach((edge) => {
    //   graph.setItemState(edge, 'activeByLegend', false)
    //   graph.setItemState(edge, 'inactiveByLegend', false)
    // })
  })
}
</script>

<style>
#app {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

#mountNode {
  background-color: #0c1932;
  width: 100%;
  height: 100%;
}
</style>
