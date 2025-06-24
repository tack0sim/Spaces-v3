<script setup lang="ts">
import { NuxtImg } from "#components";

console.log("page mounted");

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
  <main>
    <article
      class="w-[min(90rem,calc(100%_-_30px))] mx-auto p-2 mb-8 rounded-lg bg-gray-100 dark:bg-[#bababc]-100"
    >
      <h3 class="text-2xl font-medium dark:text-black mb-1">
        Art Institute of Chicago Artworks
      </h3>
      <p class="dark:text-black">
        The Art Institute of Chicago has made available some of its public
        artworks for use in external projects including web development projects
        through their API. This API and the artworks can be accessed
        <NuxtLink
          to="https://api.artic.edu/docs/#introduction"
          class="underline hover:text-highlighted"
          >here</NuxtLink
        >. No admission to ownership of these artworks on this site is declared
        and due credit is given to said artists/organisation.
      </p>
    </article>
    <article
      class="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-center w-[min(90rem,calc(100%_-_30px))] mx-auto min-h-[100svh] gap-16 gap-y-16"
    >
      <section v-for="post in posts?.data" :key="post.id">
        <!-- Get imageURL -->
        <NuxtLink
          :to="`${posts?.config.iiif_url}/${post.image_id}/full/843,/0/default.jpg`"
          target="_blank"
          rel="noreferrer"
        >
          <NuxtImg
            :src="`${posts?.config.iiif_url}/${post.image_id}/full/843,/0/default.jpg`"
            sizes="sm:100vw"
            densities="x1"
            :alt="post.thumbnail?.alt_text"
            loading="lazy"
            :placeholder="post.thumbnail?.lqip"
            class="w-full h-auto rounded-2xl"
          />
        </NuxtLink>
        <p>Title: {{ post.title }}</p>
        <p>Artist: {{ post.artist_title }}</p>
      </section>
    </article>
    <Pagination
      :current="posts?.pagination.current_page"
      :total="posts?.pagination.total_pages"
      @update:page="refetch"
    />
  </main>
</template>
