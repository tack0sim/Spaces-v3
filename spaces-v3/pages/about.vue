<script setup lang="ts">
import { PortableText } from "@portabletext/vue";

const query = groq`*[_type == "author"][0]{
  name,
  "image": image.asset->url
}`;

const queryAbout = groq`*[_type == "about"][0]{
  body
}`;

const { data: item } = await useSanityQuery<Author>(query);
const { data: post } = await useSanityQuery<About>(queryAbout);
</script>

<template>
  <div
    class="prose dark:prose-invert ml-6 max-md:w-[90vw] min-md:max-w-[75vw] min-md:mx-auto max-md:mx-auto min-md:flex min-md:flex-col min-md:justify-start h-fit"
  >
    <div
      class="min-md:flex flex-row-reverse min-md:gap-x-4 justify-between min-md:w-[75vw]"
    >
      <div v-if="$viewport.isLessThan('tablet')" class="relative w-full">
        <NuxtImg
          v-if="$viewport.isLessThan('tablet')"
          :src="item?.image"
          sizes="sm:100vw"
          format="webp"
          densities="x1"
          class="w-screen max-sm:h-96 min-sm:h-64 object-cover min-sm:object-[90%_43%] rounded-full min-sm:rounded-none"
        />
      </div>
      <div class="relative w-full">
        <NuxtImg
          v-if="$viewport.isGreaterOrEquals('tablet')"
          :src="item?.image"
          sizes="sm:100vw"
          format="webp"
          densities="x1"
          class="w-screen h-64 object-cover min-md:object-[90%_43%] rounded-3xl"
        />
      </div>
      <p class="text-justify">
        <PortableText :value="post?.body" />
      </p>
    </div>
    <hr />
    <!-- contact form -->
    <div>
      <h2 class="mt-1">let's talk:</h2>
      <form class="">
        <div class="flex flex-col justify-start items-start">
          <div class="my-1">
            <label for="name">name:</label>
            <input
              id="name"
              type="text"
              class="rounded-sm max-sm:w-[60vw] max-md:w-[60vw] md:w-[25vw] ml-11 p-1 bg-[#0f0f0f]/10"
            />
          </div>
          <div class="my-1">
            <label for="name">email:</label>
            <input
              id="email"
              type="email"
              class="rounded-sm max-sm:w-[60vw] max-md:w-[60vw] md:w-[25vw] ml-[45px] p-1 bg-[#0f0f0f]/10"
            />
          </div>
          <div class="flex justify-start items-start my-1">
            <label for="name">message:</label>
            <textarea
              id="message"
              type="textarea"
              rows="5"
              class="rounded-sm max-sm:w-[60vw] max-md:w-[60vw] md:w-[25vw] ml-4.5 p-1 bg-[#0f0f0f]/10"
            />
          </div>
        </div>
        <div class="max-sm:ml-[45%] max-md:ml-[40%] md:ml-[22%] mt-3">
          <UButton label="submit" size="md" color="neutral" variant="subtle" />
        </div>
      </form>
    </div>
  </div>
</template>
