<template>
  <Html lang="ja">
  <Head>
    <Title>exgraph | {{ title }}</Title>
    <Meta name="description" :content="`This is ${title} page`" />
  </Head>
  </Html>

  <h1>{{ title }}</h1>

  <div>
    <form @submit.prevent="load">
      <InputText type="text" v-model="graphUrl" />
      <Button type="submit" label="Submit" :loading="loading" />
    </form>
  </div>

</template>

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

