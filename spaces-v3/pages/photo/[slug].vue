<script setup lang="ts">
import groq from "groq";

const { slug } = useRoute().params;

const query = groq`
*[_type == "gallery" && slug.current == $slug][0]{
  _id,
  title,
  date,
  "slug": slug.current,
  "categories": categories[]->title,
  "mainImage": mainImage.asset->url,
  "lqip": mainImage.asset->metadata.lqip
  }`;

const { data: images } = useSanityQuery<Gallery>(query, {
  slug: slug,
});
</script>

<template>
  <div class="flex flex-col grow max-w-[50vw] max-md:max-w-[95vw] mx-auto">
    <NuxtLink :to="images?.mainImage">
      <NuxtImg
        :src="images?.mainImage"
        sizes="sm:100vw md:75vw"
        densities="x1 x2"
        format="webp"
        loading="lazy"
        :placeholder="images?.lqip"
        class="w-full h-auto object-contain"
      />
    </NuxtLink>
    <p>Title: {{ images?.title }}</p>
    <p>Date: {{ images?.date }}</p>
    <p>Categories: {{ images?.categories?.join(", ") }}</p>
  </div>
</template>
