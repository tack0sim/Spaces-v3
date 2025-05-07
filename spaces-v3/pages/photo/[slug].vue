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
  "mainImage": mainImage.asset->url
  }`;

const { data: images } = useSanityQuery<Gallery>(query, {
  slug: slug,
});
</script>

<template>
  <div>
    <Transition>
      <NuxtImg
        :src="images?.mainImage"
        sizes="sm:100vw md:400px"
        densities="x1"
        format="webp"
        loading="lazy"
      />
    </Transition>
    <p>Title: {{ images?.title }}</p>
    <p>Date: {{ images?.date }}</p>
    <p>Categories: {{ images?.categories.join(", ") }}</p>
  </div>
</template>
