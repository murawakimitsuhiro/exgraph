<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Graphviz, graphviz } from 'd3-graphviz';
import { wasmFolder } from "@hpcc-js/wasm";

const graphDivRef = ref<HTMLDivElement>()

let graph: Graphviz<any, any, any, any>

function render() {
  if (!graphDivRef.value) return
  graph = graphviz(graphDivRef.value, { useWorker: false })
      .dot(`digraph {a -> b}`)
      .render()
      .onerror((em) => console.log('graph error', em))
}

onMounted(async () => {
  wasmFolder('/@hpcc-js/wasm/dist');
  render()
});
</script>

<template>
  <div class="graph" ref="graphDivRef" />
</template>

<style scoped>
.graph {
  min-height: 500px;
}
</style>
