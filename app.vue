<script setup lang="ts">
import { ref } from 'vue'

const title = "Hello Nuxt3!"

const graphUrl = ref<string>()
const loading = ref(false)

const load = () => {
  loading.value = true;
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
    <h2>Load Graph URL</h2>
    <div class="grid p-fluid">
      <form class="col-12 md:col-4"  @submit.prevent="load">
        <div class="p-inputgroup">
          <InputText class="" type="text" v-model="graphUrl" placeholder="https://ー" />
          <Button class="p-button" type="submit" label="Load" :loading="loading" />
        </div>
      </form>
    </div>
  </main>
</template>

<style scoped>
main {
  max-width: 1200px;
  margin: 0 auto;
}

.p-inputgroup {
  max-width: 1000px
}

</style>
