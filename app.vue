<script setup lang="ts">
const title = "Hello Nuxt3!";
</script>

<template>
  <Html lang="ja">
  <Head>
    <Title>exgraph | {{ title }}</Title>
    <ColorModePicker />
    <Meta name="description" :content="`This is ${title} page`" />
  </Head>
  </Html>

  <h1>{{ title }}</h1>
</template>
