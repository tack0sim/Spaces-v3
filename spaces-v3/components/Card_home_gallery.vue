<script setup lang="ts"></script>

<template>
  <div
    class="bg-[#c7c7c7] bg-[url(/assets/images/19A.jpg)] bg-position-[15%_70%] sm:bg-position-[15%_70%] md:bg-position-[35%_70%] bg-cover sm:bg-auto opacity-65 h-75 relative"
  >
    <div
      class="absolute right-2 sm:right-10 md:right-10 bottom-5 sm:bottom-10 md:bottom-10"
    >
      <p class="text-blue-500">Welcome to my portfolio!</p>
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
</template>
