<script setup lang="ts">
import Splitter from 'primevue/splitter';
import SplitterPanel from 'primevue/splitterpanel';
import Textarea from 'primevue/textarea';
import { onMounted, ref } from 'vue';
import DotGraph from '~/components/DotGraph.vue';
import { ContextGraph } from '~/pkg/context-graph';

const title = "Hello Nuxt3!"

const graphUrl = ref<string>()
const dot = ref<string>(`digraph {a ->  c}`)

const loading = ref(false)

const load = () => {
  loading.value = true
  const sampleDot = new ContextGraph()

  dot.value = sampleDot.dot
  setTimeout(() => { loading.value = false }, 1000)
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
        <Textarea class="editor w-full my-2" v-model="dot" :autoResize="true" rows="5" />
      </SplitterPanel>

      <SplitterPanel class="flex align-items-center justify-content-center">
        <DotGraph :dot=dot />
      </SplitterPanel>
    </Splitter>
  </main>
</template>
