<script setup lang="ts">
import groq from "groq";

const query = groq`*[_type == "post"] | order(publishedAt desc)[0..4]{
    _id,
    "slug": slug.current,
    title,
    body,
    "mainImage": mainImage.asset->url
    }`;

const { data: posts } = await useSanityQuery<Posts[]>(query);
</script>

<template>
  <div>
    <section v-for="post in posts" :key="post._id" class="block">
      <h3 class="font-bold">{{ post.title }}</h3>
      <UButton
        label="Read more"
        :to="`/posts/${post.slug}`"
        color="neutral"
        variant="outline"
        size="md"
        class="font-bold hover:underline"
      />
    </section>
  </div>
</template>
