<script setup lang="ts">
import { CardHomeHero } from "#components";

definePageMeta({
  prerender: true,
});
</script>

<template>
  <div class="min-2xl:max-w-[1440px] min-2xl:mx-auto">
    <div
      class="flex flex-col justify-center md:flex-row md:justify-evenly items-start gap-4 mb-8 md:mr-2"
    >
      <div class="md:basis-3/5 w-full">
        <CardHomeHero hydrate-on-idle />
      </div>
      <div class="md:basis-2/5 w-full">
        <CardHomeBlog />
      </div>
    </div>
    <LazySliderHomeGallery hydrate-on-visible />
  </div>
</template>
