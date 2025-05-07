<script setup lang="ts">
import groq from "groq";

const query = groq`*[_type == "gallery"]{
    _id,
  title,
  "slug": slug.current,
  "categories": categories[]->title,
  "mainImage": mainImage.asset->url
}`;

const { data: posts } = await useSanityQuery<Gallery[]>(query);
</script>

<template>
  <main
    class="grid grid-cols-[repeat(auto-fill,minmax(400px,1fr))] items-center justify-items-center w-[min(90rem,calc(100%_-_30px))] mx-auto min-h-[100svh] gap-16 gap-y-16"
  >
    <section
      v-for="post in posts"
      :key="post._id"
      class="[&::-webkit-flex] flex-col text-center"
    >
      <NuxtLink :to="`/photo/${post.slug}`">
        <NuxtImg
          :src="post.mainImage"
          sizes="sm:100vw md:400px"
          densities="x1"
          format="webp"
          loading="lazy"
        />
      </NuxtLink>
      <p>{{ post.title }}</p>
    </section>
  </main>
</template>

<style lang="css" scoped></style>
