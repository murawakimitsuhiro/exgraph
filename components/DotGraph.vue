<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Graphviz, graphviz } from 'd3-graphviz';
import { wasmFolder, GraphvizSync } from "@hpcc-js/wasm";
import * as d3 from 'd3'

const graphDivRef = ref<HTMLDivElement>()

let graph: Graphviz<any, any, any, any>


function render() {
  if (!graphDivRef.value) return
  graph = graphviz(graphDivRef.value)
      .dot(`digraph {a -> b}`)
      .render()
      .onerror((em) => console.log('graph error', em))

  // d3.select(graphDivRef.value)
  //     .append("svg")
  //     .append("line")
  //     .attr("x1", 20)
  //     .attr("y1", 5)
  //     .attr("x2", 300)
  //     .attr("y2", 200)
  //     .attr("stroke", "red")
}

onMounted(async () => {
  render()
});
</script>

<template>
  <Html>
    <Script src="https://unpkg.com/@hpcc-js/wasm/dist/index.min.js" type="javascript/worker" />
  </Html>
  <div class="graph" ref="graphDivRef" />
</template>

<style scoped>
.graph {
  min-height: 500px;
}
</style>
