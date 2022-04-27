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
  graph = new G6.Graph({
    container: 'mountNode',
    ...graphConfig,
  })
  graph.data(data)
  graph.render()
}
</script>

<style>
#mountNode {
  background-color: #000;
}
</style>
