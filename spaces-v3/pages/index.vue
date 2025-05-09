<script setup lang="ts">
definePageMeta({
  title: "Spaces",
});
</script>

<template>
  <div>
    <div>
      <p class="text-red-800 font-extrabold">Index page</p>
    </div>
    <div class="md:grid md:grid-cols-[70%_30%_1fr] md:gap-2">
      <CardHomeGallery class="flex shadow-2xl rounded-lg" />
      <CardHomeBlog class="grid grid-rows-auto shadow-lg rounded-lg h-auto" />
    </div>
  </div>
</template>
