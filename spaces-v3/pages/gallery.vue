<script setup lang="ts">
import groq from "groq";

const query = groq`*[_type == "gallery"]{
    _id,
  title,
  "slug": slug.current,
  "categories": categories[]->title,
  "mainImage": mainImage.asset->url,
  "lqip": mainImage.asset->metadata.lqip,
  "blurhash": mainImage.asset->metadata.blurHash
}`;

const { data: posts } = await useSanityQuery<Gallery[]>(query);
</script>

<template>
  <main
    class="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-center w-[min(90rem,calc(100%_-_30px))] mx-auto min-h-[100svh] gap-16 gap-y-16"
  >
    <section
      v-for="post in posts"
      :key="post._id"
      class="flex flex-col text-center items-center"
    >
      <NuxtLink :to="`/photo/${post.slug}`" target="_parent">
        <NuxtImg
          :src="post.mainImage"
          sizes="sm:100vw md:400px"
          densities="x1"
          format="webp"
          loading="lazy"
          :placeholder="post.lqip"
          class="h-[250px] w-[250px] object-cover rounded-lg"
        />
      </NuxtLink>
      <p>{{ post.title }}</p>
    </section>
  </main>
</template>
