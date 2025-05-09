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
    "mainImage": mainImage.asset->url
    }`;

const { data: post } = await useSanityQuery<Posts>(query, {
  slug: slug,
});
</script>

<template>
  <div>
    <section>
      <h3 class="font-bold">{{ post?.title }}</h3>
      <PortableText :value="post?.body" />
    </section>
  </div>
</template>
