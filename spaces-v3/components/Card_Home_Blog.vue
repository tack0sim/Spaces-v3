<script setup lang="ts">
import { PortableText } from "@portabletext/vue";
import groq from "groq";

const query = groq`*[_type == "post"] | order(publishedAt desc)[0..4]{
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
  <!-- <UCard v-for="post in posts" :key="post._id" class="h-auto">
      <Placeholder class="h-32 text-lg font-bold">{{ post.title }}</Placeholder>

      <Placeholder class="h-32">
        <PortableText :value="post.blurb" />
        <UButton
          label="Read more"
          :to="`/posts/${post.slug}`"
          color="neutral"
          variant="outline"
          size="md"
          class="font-bold block w-min"
        />
      </Placeholder>
    </UCard> -->
  <aside class="w-full mb-4">
    <h2 class="text-2xl font-bold">Latest Posts</h2>
    <section>
      <article v-for="post in posts" :key="post._id" class="py-4">
        <div class="mb-2">
          <h3 class="font-bold">{{ post.title }}</h3>
          <PortableText :value="post.blurb" />
        </div>
        <UButton
          label="Read more"
          :to="`/posts/${post.slug}`"
          color="neutral"
          variant="outline"
          size="md"
          class="font-bold hover:underline"
        />
      </article>
    </section>
  </aside>
</template>
