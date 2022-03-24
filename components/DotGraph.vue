<script setup lang="ts">
// import { wasmFolder } from "@hpcc-js/wasm";
import * as d3 from 'd3'
import { onMounted, ref } from 'vue';
import { Graphviz, graphviz } from 'd3-graphviz';



const graphSvg = ref<HTMLDivElement>();
let graph: Graphviz<any, any, any, any>;

const render = () => {
  // const canvas = d3.select(graphSvg.value as HTMLDivElement)
  //     .append("svg")
      // .attr("width", 320)
      // .attr("height", 240)
      // .append("line")
      // .attr("x1", 20)
      // .attr("y1", 5)
      // .attr("x2", 300)
      // .attr("y2", 200)
      // .attr("stroke", "red")
      // .attr("stroke-width", 2)

  graph = graphviz(graphSvg.value as HTMLDivElement, {
    useWorker: true,
  })
      // .engine('neato')
      .dot(`digraph {a -> b}`)
      .render()
}

onMounted(async () => {
  // console.log('mounted', graph)
  await render()

  setTimeout(() => {
    console.log('mounted rendered', graph)
  }, 3000)

  graph.onerror((errorMessage) => {
    console.log('graph vis error', errorMessage)
  })
});
</script>

<template>
  <Html>
    <Script src="https://unpkg.com/@hpcc-js/wasm/dist/index.min.js"></Script>
  </Html>
  <div class="graph" ref="graphSvg" />
  <div id="wasm-graph"></div>
</template>

<style scoped>
.graph {
  min-height: 500px;
}
</style>
