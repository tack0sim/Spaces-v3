<script setup lang="ts">
import { NuxtImg } from "#components";

const url = "https://api.artic.edu/api/v1/artworks";

const { data: posts } = await useAsyncData<Artworks>("posts", () =>
  $fetch(url)
);
</script>

<template>
  <main
    class="grid grid-cols-[repeat(auto-fill,minmax(400px,1fr))] items-center justify-items-center w-[min(90rem,calc(100%_-_30px))] min-h-[100svh] gap-16"
  >
    <section v-for="post in posts?.data" :key="post.id">
      <a
        :href="`${posts?.config.iiif_url}/${post.image_id}/full/843,/0/default.jpg`"
      >
        <NuxtImg
          :src="`${posts?.config.iiif_url}/${post.image_id}/full/843,/0/default.jpg`"
          sizes="100vw sm: md:400px"
          alt=""
          loading="lazy"
        />
      </a>
      <p>Title: {{ post.title }}</p>
      <p>Artist: {{ post.artist_title }}</p>
    </section>
  </main>
</template>
