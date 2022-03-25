<script setup lang="ts">
import Splitter from 'primevue/splitter';
import SplitterPanel from 'primevue/splitterpanel';
import Textarea from 'primevue/textarea';
import { onMounted, ref } from 'vue';
import DotGraph from '~/components/DotGraph.vue';

const title = "Hello Nuxt3!"

const graphUrl = ref<string>()
const dot = ref<string>(`digraph {a ->  c}`)

const loading = ref(false)

const load = () => {
  loading.value = true;
  // console.log(d3.select("#graph").graphviz())
  setTimeout(() => {
    loading.value = false
    alert(`Hello ${graphUrl.value}`)
  }, 1000);
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
    <Splitter style="height: 100vh" class="mb-5">

      <SplitterPanel class="flex align-items-center justify-content-center editor-wrapper">
        <h3>Dot Content URL</h3>
        <div class="grid p-fluid">
          <div class="grid p-fluid">
            <form class="col-12 md:col-4"  @submit.prevent="load">
              <div class="p-inputgroup">
                <InputText class="" type="text" v-model="graphUrl" placeholder="https://ー" />
                <Button class="p-button" type="submit" label="Load" :loading="loading" />
              </div>
            </form>
          </div>
        </div>

        <h3>Customized</h3>
        <Textarea class="editor" v-model="dot" :autoResize="true" rows="5" />
      </SplitterPanel>

      <SplitterPanel class="flex align-items-center justify-content-center">
        <DotGraph :dot=dot />
      </SplitterPanel>
    </Splitter>
  </main>
</template>

<style scoped>
.editor-wrapper {
  padding: 1.2em;
  min-width: 300px;
}

.editor {
  width: 100%;
}

h3 {
  margin: 12px 0 4px 0;
}
</style>
