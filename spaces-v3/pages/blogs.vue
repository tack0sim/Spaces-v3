<script setup lang="ts">
import { PortableText } from "@portabletext/vue"; // library for rendering text from Sanity withouht flattening (join()) the (content) array
import groq from "groq";

const query = groq`*[_type == "post"] | order(publishedAt desc){
    _id,
    "slug": slug.current,
  title,
  "author": author->name,
  body,
  "mainImage": mainImage.asset->url
}`;

const { data: posts } = await useSanityQuery<Posts[]>(query);
</script>

<template>
  <main>
    <section
      v-for="post in posts"
      :key="post._id"
      class="prose max-w-[75vw] mx-auto mb-12 dark:prose-invert prose-a:no-underline"
    >
      <NuxtLink :to="`/posts/${post.slug}`" class="inline-block">
        <h2 class="mt-0 mb-0">
          {{ post.title }}
        </h2>
      </NuxtLink>
      <!-- <p class="text-xl italic mt-0 mb-0">{{ post.author }}</p> -->
      <NuxtLink :to="`/posts/${post.slug}`">
        <NuxtImg
          v-show="post?.mainImage"
          :src="post?.mainImage"
          sizes="sm:100vw md:50vw"
          loading="lazy"
          densities="x1"
          format="webp"
          class="w-screen h-[200px] min-md: object-cover rounded-r-2xl"
        />
      </NuxtLink>
      <PortableText :value="post.body" />
    </section>
  </main>
</template>
