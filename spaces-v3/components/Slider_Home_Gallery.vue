<script setup lang="ts">
import groq from "groq";

defineProps<{
  prevIcon?: string;
  nextIcon?: string;
}>();

const query = groq`*[_type == "gallery"]{
    _id,
  "slug": slug.current,
  "mainImage": mainImage.asset->url,
  "lqip": mainImage.asset->metadata.lqip,
  "blurhash": mainImage.asset->metadata.blurHash
}`;

const { data: images } = await useSanityQuery<Gallery[]>(query);
</script>

<template>
  <div
    v-if="$viewport.isLessOrEquals('mobileWide')"
    class="prose dark:prose-invert"
  >
    <h2 class="mb-4 ml-2">Featured works</h2>
  </div>
  <UCarousel
    v-if="$viewport.isLessOrEquals('mobileWide')"
    arrows
    dots
    loop
    :prev-icon="prevIcon"
    :next-icon="nextIcon"
    :items="images"
    :ui="{ item: 'basis-1/2' }"
    class="w-full max-w-xl mx-auto mb-12"
  >
    <template #default="{ item }">
      <NuxtImg
        :src="(item as Gallery).mainImage"
        format="webp"
        densities="x1"
        width="300"
        height="300"
        loading="lazy"
        :placeholder="(item as Gallery).lqip"
        class="w-[250px] h-[250px] object-cover rounded-lg mx-auto"
      />
    </template>
  </UCarousel>
  <!-- tablet and desktop gallery carousel -->
  <div
    v-if="$viewport.isGreaterThan('mobileWide')"
    class="prose dark:prose-invert"
  >
    <h2 class="mb-4 ml-2">Featured works</h2>
  </div>
  <UCarousel
    v-if="$viewport.isGreaterThan('mobileWide')"
    arrows
    loop
    dots
    :prev-icon="prevIcon"
    :next-icon="nextIcon"
    :items="images"
    :ui="{ item: 'basis-1/3' }"
    class="w-full sm:max-w-3xl mx-auto mb-12"
  >
    <template #default="{ item }">
      <NuxtImg
        :src="(item as Gallery).mainImage"
        width="400"
        height="450"
        format="webp"
        densities="x1"
        loading="lazy"
        :placeholder="(item as Gallery).lqip"
        class="rounded-lg object-cover mx-auto"
      />
    </template>
  </UCarousel>
</template>
