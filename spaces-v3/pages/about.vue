<script setup lang="ts">
const query = groq`*[_type == "author"][1]{
  name,
  "image": image.asset->url
}`;

const { data } = await useSanityQuery<Author>(query);
</script>

<template>
  <div
    class="prose dark:prose-invert ml-6 max-md:w-[90vw] max-md:mx-auto min-md:flex min-md:flex-col min-md:justify-start"
  >
    <h2>About me</h2>
    <div
      class="min-md:flex flex-row-reverse min-md:gap-x-4 justify-between min-md:w-[90vw]"
    >
      <div v-if="$viewport.isLessThan('tablet')" class="relative w-full">
        <NuxtImg
          v-if="$viewport.isLessThan('tablet')"
          :src="data?.image"
          sizes="sm:100vw"
          format="webp"
          densities="x1"
          class="w-screen max-sm:h-96 min-sm:h-64 object-cover min-sm:object-[90%_43%] rounded-full min-sm:rounded-none"
        />
      </div>
      <div class="relative w-full">
        <NuxtImg
          v-if="$viewport.isGreaterOrEquals('tablet')"
          :src="data?.image"
          sizes="sm:100vw"
          format="webp"
          densities="x1"
          class="w-screen h-64 object-cover min-md:object-[90%_43%] rounded-3xl"
        />
      </div>
      <p class="text-justify">
        Hi there!
        <br />
        <br />
        I am Talha. I am a frontend developer from Germany. I share here some of
        my creative projects in various mediums, mostly analogue photography,
        software projects, and free-verse poetry. I am also an avid cyclist. So,
        you might see from time to time some content on bikes and bike tours. I
        hope you will find some pleasure visiting this site. Let me know what
        you think. Cheers!
      </p>
    </div>
  </div>
</template>
