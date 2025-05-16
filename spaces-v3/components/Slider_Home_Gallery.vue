<script setup lang="ts">
import groq from "groq";

defineProps<{
  prevIcon?: string;
  nextIcon?: string;
}>();

const query = groq`*[_type == "gallery"]{
    _id,
  "slug": slug.current,
  "mainImage": mainImage.asset->url
}`;

const { data: images } = await useSanityQuery<Gallery[]>(query);
</script>

<template>
  <UCarousel
    v-show="$viewport.isLessOrEquals('mobileWide')"
    arrows
    dots
    loop
    :prev-icon="prevIcon"
    :next-icon="nextIcon"
    :items="images"
    :ui="{ item: 'basis-1/2' }"
    class="w-full md:max-w-3xl lg:max-w-5xl mx-auto mb-8"
  >
    <template #default="{ item }">
      <NuxtImg
        :src="item?.mainImage"
        format="webp"
        densities="x1"
        width="420"
        height="420"
        class="rounded-lg mx-auto"
      />
    </template>
  </UCarousel>
  <!-- tablet and desktop gallery carousel -->
  <UCarousel
    v-show="$viewport.isGreaterThan('mobileWide')"
    arrows
    dots
    loop
    :prev-icon="prevIcon"
    :next-icon="nextIcon"
    :items="images"
    :ui="{ item: 'basis-1/3' }"
    class="w-full md:max-w-3xl lg:max-w-5xl mx-auto"
  >
    <template #default="{ item }">
      <NuxtImg
        :src="item?.mainImage"
        format="webp"
        densities="x1"
        width="420"
        height="420"
        class="rounded-lg mx-auto"
      />
    </template>
  </UCarousel>
</template>
