<script setup lang="ts">
const colorMode = useColorMode();

const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set(_isDark) {
    colorMode.preference = _isDark ? "dark" : "light";
  },
});
</script>

<template>
  <header class="bg-[#333] h-16">
    <nav class="flex max-w-2xl mx-auto p-0.5">
      <div>
        <!-- <Icon icon="mdi-light:camera" width="24" height="24" /> -->
      </div>
      <div class="flex content-start justify-evenly">
        <NuxtLink to="/" class="text-2xl text-white">Home</NuxtLink>
        <NuxtLink to="/gallery" class="text-2xl text-white">Gallery</NuxtLink>
        <NuxtLink to="/blogs" class="text-2xl text-white">Blog</NuxtLink>
        <NuxtLink to="/artwork" class="text-2xl text-white">Artworks</NuxtLink>
      </div>
      <div>
        <ClientOnly v-if="!colorMode?.forced">
          <UButton
            :icon="isDark ? 'i-lucide-moon' : 'i-lucide-sun'"
            color="primary"
            variant="ghost"
            @click="isDark = !isDark"
          />
        </ClientOnly>
      </div>
    </nav>
  </header>
</template>
