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
  graph.fitCenter()

  graph.on('combo:mouseenter', (evt) => {
    const { item } = evt
    graph.setItemState(item, 'active', true)
  })

  graph.on('combo:mouseleave', (evt) => {
    const { item } = evt
    graph.setItemState(item, 'active', false)
  })
  graph.on('combo:click', (evt) => {
    const { item } = evt
    graph.setItemState(item, 'selected', true)
  })
  graph.on('canvas:click', (evt) => {
    graph.getCombos().forEach((combo) => {
      graph.clearItemStates(combo)
    })
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
