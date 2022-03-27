<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { Graphviz, graphviz } from 'd3-graphviz';
import { wasmFolder } from "@hpcc-js/wasm";

interface Props {
  dot: string
}

const props = withDefaults(defineProps<Props>(), {  dot: `digraph {a -> b}` })
const graphDivRef = ref<HTMLDivElement>()

let graph: Graphviz<any, any, any, any>

const initGraphViz = () => {
  wasmFolder('/@hpcc-js/wasm/dist');
  if (!graphDivRef.value) return
  graph = graphviz(graphDivRef.value, { useWorker: false })
  render(props.dot)
}

const render = (content: string) => {
  graph.dot(content)
      .render()
      .onerror((em) => console.log('graph error', em))
}

watch(() => props.dot, (current, before) => render(current))
onMounted(async () => initGraphViz());
</script>

<template>
  <div class="graph" ref="graphDivRef" />
</template>

<style>
.graph {
  height: 100%;
}

.graph svg {
  width: 100%;
  height: 100%;
}
</style>
