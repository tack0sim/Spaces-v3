<script setup lang="ts">
import { NuxtImg } from "#components";

const config = useRuntimeConfig();
const page = ref(1);

const { data: posts, refresh } = await useAsyncData<Artworks>(
  "posts",
  () => $fetch(`${config.public.API_URL_public}?page=${page.value}`),
  { watch: [page] }
);

function refetch(currentPage: number) {
  page.value = currentPage;
  refresh();
}
</script>

<template>
  <main
    class="grid grid-cols-[repeat(auto-fill,minmax(400px,1fr))] items-center justify-items-center w-[min(90rem,calc(100%_-_30px))] min-h-[100svh] gap-16"
  >
    <section v-for="post in posts?.data" :key="post.id">
      <!-- Get imageURL -->
      <a
        :href="`${posts?.config.iiif_url}/${post.image_id}/full/843,/0/default.jpg`"
      >
        <NuxtImg
          :src="`${posts?.config.iiif_url}/${post.image_id}/full/843,/0/default.jpg`"
          sizes="100vw sm: md:400px"
          :alt="`${post.thumbnail?.alt_text}`"
          loading="lazy"
        />
      </a>
      <p>Title: {{ post.title }}</p>
      <p>Artist: {{ post.artist_title }}</p>
    </section>
    <Pagination
      :current="posts?.pagination.current_page"
      :total="posts?.pagination.total_pages"
      @update:page="refetch"
    />
  </main>
</template>
