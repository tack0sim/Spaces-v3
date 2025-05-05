<script setup lang="ts">
import { PortableText } from "@portabletext/vue"; // library for rendering text from Sanity withouht flattening (join()) the (content) array
import groq from "groq";

const query = groq`*[_type == "post"]{
    _id,
  title,
  "author": author->name,
  body,
  "mainImage": mainImage.asset->url
}`;

const { data: posts } = await useSanityQuery<Posts>(query);
</script>

<template>
  <main>
    <section v-for="post in posts" :key="post._id">
      <h1 class="font-bold text-lg italic">Title: {{ post.title }}</h1>
      <p class="font-bold text-lg italic">Author: {{ post.author }}</p>
      <p class="font-bold text-lg italic">Post:</p>
      <NuxtImg
        :src="post.mainImage"
        sizes="sm:100vw md:300px lg:500px"
        loading="lazy"
        densities="x1"
        format="webp"
      />
      <PortableText :value="post.body" />
    </section>
  </main>
</template>
