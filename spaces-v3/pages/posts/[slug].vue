<script setup lang="ts">
import { PortableText } from "@portabletext/vue";
import groq from "groq";

const { slug } = useRoute().params;

const query = groq`
*[_type == "post" && slug.current == $slug][0]{
    _id,
    "slug": slug.current,
    title,
    "author": author->name,
    body,
    "mainImage": mainImage.asset->url,
    "lqip": mainImage.asset->metadata.lqip,
    "blurhash": mainImage.asset->metadata.blurHash
    }`;

const { data: post } = await useSanityQuery<Posts>(query, {
  slug: slug,
});
</script>

<template>
  <div>
    <section class="prose max-w-[75vw] mx-auto dark:prose-invert">
      <h2>{{ post?.title }}</h2>
      <NuxtLink v-if="post?.mainImage" :to="post?.mainImage">
        <NuxtImg
          v-if="post.mainImage"
          :src="post.mainImage"
          size="sm:100vw md:75vw"
          densities="x1 x2"
          format="webp"
          loading="lazy"
          :placeholder="post.lqip"
          class="h-auto md:h-[50vh] w-full object-cover"
        />
      </NuxtLink>
      <PortableText :value="post.body" />
    </section>
  </div>
</template>
