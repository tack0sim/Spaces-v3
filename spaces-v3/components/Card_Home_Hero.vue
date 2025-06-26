<script setup lang="ts">
const query = groq`*[_type == "gallery" && title == "Bus stop"][0]{
  title,
  "mainImage": mainImage.asset->url,
  "lqip": mainImage.asset->metadata.lqip
}`;

const { data } = await useSanityQuery<Gallery>(query);
</script>

<template>
  <div class="flex flex-col justify-center items-start mb-4">
    <div class="relative bg-[#c7c7c7] sm:rounded-r-2xl">
      <NuxtImg
        :src="data?.mainImage"
        format="webp"
        loading="lazy"
        :placeholder="data?.lqip"
        densities="x1 x2"
        class="opacity-65 w-screen h-[300px] object-cover md:object-[35%_70%] sm:rounded-r-2xl"
      />
      <div
        class="flex flex-col items-start absolute right-2 sm:right-10 md:right-10 bottom-5 sm:bottom-10 md:bottom-10 z-10"
      >
        <p class="text-white">Welcome to my portfolio!</p>
        <UButton
          label="gallery"
          to="/gallery"
          color="neutral"
          variant="outline"
          size="md"
          trailing-icon="i-lucide-arrow-right"
        />
      </div>
    </div>
    <div>
      <div class="self-end mt-4 ml-2">
        <h2 class="text-2xl font-bold mb-2">Welcome to the Spaces Project</h2>
        <p>
          You have just landed at the spaces project homepage. This site is the
          brainchild and manifestation of years of personal creative and
          exploratory projects. It is my intention to make navigating through
          this space(s) an immersive, inspiring and thought-provoking
          experience. Therefore, I am thrilled to hear about your feedback.
        </p>
        <UButton
          label="tell me more"
          to="/about"
          color="neutral"
          variant="outline"
          size="md"
          trailing-icon="i-lucide-arrow-right"
          class="mt-2"
        />
      </div>
    </div>
  </div>
</template>
