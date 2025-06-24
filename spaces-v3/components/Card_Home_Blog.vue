<script setup lang="ts">
import { PortableText } from "@portabletext/vue";
import groq from "groq";

const query = groq`*[_type == "post"] | order(publishedAt desc)[0..2]{
    _id,
    "slug": slug.current,
    title,
    body,
    blurb,
    "mainImage": mainImage.asset->url
    }`;

const { data: posts } = await useSanityQuery<Posts[]>(query);
</script>

<template>
  <div
    class="prose bg-gray-100 dark:bg-[#bababc] rounded-2xl p-2 mr-2 ml-2 w-fit prose-a:no-underline prose-p:mb-[0.25rem]"
  >
    <h2 class="mb-0">Latest Posts</h2>
    <article v-for="post in posts" :key="post._id" class="mb-4">
      <h3 class="mt-0 mb-0">{{ post.title }}</h3>
      <PortableText :value="post.blurb" />
      <UButton
        label="read more"
        :to="`/posts/${post.slug}`"
        color="neutral"
        variant="outline"
        size="md"
      />
    </article>
  </div>
</template>
