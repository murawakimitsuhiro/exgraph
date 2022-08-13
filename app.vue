<script setup lang="ts">
import { computed, ref } from 'vue';
import Splitter from 'primevue/splitter';
import SplitterPanel from 'primevue/splitterpanel';
import Textarea from 'primevue/textarea';
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import Divider from 'primevue/divider';
import DotGraph from '~/components/DotGraph.vue';
import { ContextGraph  } from '~/pkg/context-graph';

const title = "Hello Nuxt3!"

const graphUrl = ref<string>()
const graph = ref<ContextGraph>(new ContextGraph(`digraph {a -> c; b -> d}`))
const loading = ref(false)

const dot = computed(() => graph.value.dot)
const sections = computed(() => graph.value.sections)

const load = () => {
  loading.value = true
  console.debug(sections)
  setTimeout(() => { loading.value = false }, 1000)
}

const editDotCode = (code: string) => {
  graph.value = new ContextGraph(code)
}

const editSection = (before: string, current: string) => {
  graph.value.updateSection(before, current)
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
      <SplitterPanel class="p-4">
        <h3>Dot Content URL</h3>
        <form class="col-12 md:col-4 my-2"  @submit.prevent="load">
          <div class="p-inputgroup">
            <InputText class="" type="text" v-model="graphUrl" placeholder="https://ー" />
            <Button class="p-button" type="submit" label="Load" :loading="loading" />
          </div>
        </form>

        <Accordion :activeIndex="[1]" :multiple="true" class="accordion-editor my-4">
          <AccordionTab>
            <template class="code-tab" #header>
              <i class="pi pi-code"></i>
              <span>Code</span>
            </template>
            <Textarea class="editor w-full rounded-t-none" :autoResize="true" rows="5"
                      :value="dot" @input="editDotCode($event.target.value)"
            />
          </AccordionTab>

          <AccordionTab header="Sections">
            <div class="divide-y-1">
              <div v-for="sec in sections" :key="sec">
                <Textarea class="w-full border-none" :autoResize="true" rows="1"
                          :value="sec" @input="editSection(sec, $event.target.value)" />
              </div>
            </div>
          </AccordionTab>
        </Accordion>
      </SplitterPanel>

      <SplitterPanel class="flex align-items-center justify-content-center">
        <DotGraph :dot=dot />
      </SplitterPanel>
    </Splitter>
  </main>
</template>

<style lang="scss" scoped>
::v-deep(.accordion-editor.p-accordion) {
  i, span { vertical-align: middle; }
  span { margin: 0 .5rem; }

  .p-accordion-header-link, .p-accordion-content { border: none; }

  //.p-accordion-tab:first-child .p-accordion-content {
  .p-accordion-tab .p-accordion-content {
    padding: 0;
    font-size: 0;

    .p-inputtextarea {
      &.border-none { border: none; }
      &.rounded-t-none {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
      }
    }
  }
}
</style>
