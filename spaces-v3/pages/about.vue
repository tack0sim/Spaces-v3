<script setup lang="ts">
import { PortableText } from "@portabletext/vue";

const query = groq`*[_type == "author"][0]{
  name,
  "image": image.asset->url
}`;

const queryAbout = groq`*[_type == "about"][0]{
  body
}`;

const { data: item } = await useSanityQuery<Author>(query);
const { data: post } = await useSanityQuery<About>(queryAbout);
</script>

<template>
  <div
    class="prose dark:prose-invert ml-6 max-md:w-[90vw] max-md:mx-auto min-md:flex min-md:flex-col min-md:justify-start"
  >
    <h2>About me</h2>
    <div
      class="min-md:flex flex-row-reverse min-md:gap-x-4 justify-between min-md:w-[90vw]"
    >
      <div v-if="$viewport.isLessThan('tablet')" class="relative w-full">
        <NuxtImg
          v-if="$viewport.isLessThan('tablet')"
          :src="item?.image"
          sizes="sm:100vw"
          format="webp"
          densities="x1"
          class="w-screen max-sm:h-96 min-sm:h-64 object-cover min-sm:object-[90%_43%] rounded-full min-sm:rounded-none"
        />
      </div>
      <div class="relative w-full">
        <NuxtImg
          v-if="$viewport.isGreaterOrEquals('tablet')"
          :src="item?.image"
          sizes="sm:100vw"
          format="webp"
          densities="x1"
          class="w-screen h-64 object-cover min-md:object-[90%_43%] rounded-3xl"
        />
      </div>
      <p class="text-justify">
        <PortableText :value="post.body" />
      </p>
    </div>
  </div>
</template>
