<script setup lang="ts">
import { Analytics } from "@vercel/analytics/nuxt";

useHead({
  htmlAttrs: { lang: "en-US" },
  title: "Spaces Art",
});
</script>

<template>
  <Analytics />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
