<script setup lang="ts">
import { computed, ref } from 'vue';
import Splitter from 'primevue/splitter';
import SplitterPanel from 'primevue/splitterpanel';
import Textarea from 'primevue/textarea';
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import DotGraph from '~/components/DotGraph.vue';
import { ContextGraph } from '~/pkg/context-graph';

const title = "Hello Nuxt3!"

const graphUrl = ref<string>()
const graph = ref<ContextGraph>(new ContextGraph(`digraph {a ->  c}`))
const loading = ref(false)
const dot = computed(() => graph.value.dot)

const load = () => {
  loading.value = true
  graph.value = new ContextGraph()
  setTimeout(() => { loading.value = false }, 1000)
}

const editDotCode = (code: string) => {
  graph.value = new ContextGraph(code)
}
</script>

<template>
  <Html lang="ja">
  <Head>
    <Title>exgraph | {{ title }}</Title>
    <Meta name="description" :content="`This is ${title} page`" />
  </Head>
  </Html>
  <main>
    <Splitter class="h-screen">
      <SplitterPanel class="p4">
        <h3>Dot Content URL</h3>
        <form class="col-12 md:col-4 my-2"  @submit.prevent="load">
          <div class="p-inputgroup">
            <InputText class="" type="text" v-model="graphUrl" placeholder="https://ー" />
            <Button class="p-button" type="submit" label="Load" :loading="loading" />
          </div>
        </form>

        <Accordion :activeIndex="[1]" :multiple="true" class="my-4">
          <AccordionTab header="Code">
            <Textarea class="editor w-full" :autoResize="true" rows="5"
                      :value="dot" @input="editDotCode($event.target.value)"
            />
          </AccordionTab>
          <AccordionTab header="Nodes">
            Content
          </AccordionTab>
        </Accordion>
      </SplitterPanel>

      <SplitterPanel class="flex align-items-center justify-content-center">
        <DotGraph :dot=dot />
      </SplitterPanel>
    </Splitter>
  </main>
</template>
