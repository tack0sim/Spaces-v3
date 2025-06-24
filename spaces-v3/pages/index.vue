<script setup lang="ts">
import { CardHomeHero } from "#components";

definePageMeta({
  title: "Spaces",
});
</script>

<template>
  <div>
    <div
      class="flex flex-col justify-center md:flex-row md:justify-evenly items-start gap-4 mb-8 md:mr-2"
    >
      <div class="md:basis-3/5 w-full">
        <CardHomeHero />
      </div>
      <div class="md:basis-2/5 w-screen">
        <CardHomeBlog />
      </div>
    </div>
    <SliderHomeGallery />
  </div>
</template>
