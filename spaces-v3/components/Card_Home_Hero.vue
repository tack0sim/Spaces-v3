<script setup lang="ts">
import { PortableText } from "@portabletext/vue";

const query = groq`
{
  "gallery": *[_type == "gallery" && title == "bus stop"][0]{
    title,
    "mainImage": mainImage.asset->url,
    "lqip": mainImage.asset->metadata.lqip
  },
  "hero": *[_type == "hero"][0]{
    heroHead,  
    heroText
  }
}`;

const { data } = await useLazySanityQuery<{
  gallery: Gallery;
  hero: Hero;
}>(query);

const gallery = computed(() => data?.value?.gallery);
const hero = computed(() => data?.value?.hero);
</script>

<template>
  <div class="flex flex-col justify-center items-start mb-4">
    <div class="relative bg-[#c7c7c7] sm:rounded-r-2xl">
      <NuxtImg
        :src="gallery?.mainImage"
        format="webp"
        loading="lazy"
        :placeholder="gallery?.lqip"
        densities="x1 x2"
        class="opacity-65 w-screen h-[300px] object-cover md:object-[35%_70%] sm:rounded-r-2xl"
      />

      <div
        class="flex flex-col items-start absolute right-2 sm:right-10 md:right-10 bottom-5 sm:bottom-10 md:bottom-10 z-10"
      >
        <p class="text-white">welcome to my portfolio!</p>
        <UButton
          label="gallery"
          to="/gallery"
          color="neutral"
          variant="outline"
          size="md"
          trailing-icon="i-lucide-arrow-right"
        />
      </div>
    </div>
    <div>
      <div class="self-end mt-4 ml-2">
        <h2 class="text-2xl font-bold mb-2">{{ hero?.heroHead }}</h2>
        <PortableText :value="hero?.heroText" />
        <UButton
          label="tell me more"
          to="/about"
          color="neutral"
          variant="outline"
          size="md"
          trailing-icon="i-lucide-arrow-right"
          class="mt-2"
        />
      </div>
    </div>
  </div>
</template>
