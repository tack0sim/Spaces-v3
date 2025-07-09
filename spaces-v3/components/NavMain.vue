<script setup lang="ts">
// import { Icon } from "@iconify/vue";
import type { DropdownMenuItem, NavigationMenuItem } from "@nuxt/ui";

const items = ref<NavigationMenuItem[][]>([
  [
    {
      label: "gallery",
      icon: "i-lucide-image",
      to: "/gallery",
    },
    {
      label: "blog",
      icon: "i-lucide-text",
      to: "/blogs",
    },
    // {
    //   label: "Artworks",
    //   icon: "i-lucide-brush",
    //   to: "/artwork",
    // },
    {
      label: "about",
      icon: "i-lucide-user",
      to: "/about",
    },
  ],
]);

const hamburgerItems = ref<DropdownMenuItem[][]>([
  [
    {
      link: "Gallery",
      icon: "i-lucide-image",
      to: "/gallery",
      label: "gallery",
    },
    {
      link: "Blog",
      icon: "i-lucide-text",
      to: "/blogs",
      label: "blog",
    },
    // {
    //   link: "Artworks",
    //   icon: "i-lucide-brush",
    //   to: "/artwork",
    //   label: "Artworks",
    // },
    {
      link: "About",
      icon: "i-lucide-user",
      to: "/about",
      label: "about",
    },
  ],
]);

const viewport = useViewport();

watch(viewport.breakpoint, () => {});

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
  <header
    class="sticky top-0 z-50 w-full py-4 px-6 gap-4 mb-4 bg-white/90 shadow-xs backdrop-blur-md dark:bg-[#0f0f0f]/75 dark:shadow-xs dark:backdrop-blur-md"
  >
    <nav>
      <div class="max-w-[1440px] mx-auto flex items-center justify-between">
        <!-- Icon, title, menu -->
        <div class="flex items-center gap-4">
          <!-- <Icon icon="mdi-light:camera" width="33" height="33" color="black" /> -->
          <NuxtLink to="/" class="text-2xl font-bold">
            <h2>spaces</h2>
          </NuxtLink>
          <!-- Desktop menu -->
          <UNavigationMenu
            v-if="viewport.isGreaterOrEquals('tablet')"
            color="neutral"
            :items="items"
            class="w-full"
          />
        </div>
        <!-- Search bar and dark mode toggle element -->
        <div class="flex items-center gap-4">
          <!-- search bar functionality paused at the moment -->
          <!-- will come back to it later -->
          <!-- <div
        v-if="viewport.isGreaterOrEquals('tablet')"
        class="md:flex items-center bg-gray-100 rounded-lg px-3 py-1 gap-2"
        >
        <Icon
        icon="circum:search"
        width="16"
        height="16"
        class="text-gray-500"
        />
        <UInput color="primary" variant="soft" placeholder="Search..." />
      </div> -->
          <ClientOnly v-if="!colorMode?.forced">
            <UButton
              :icon="isDark ? 'i-lucide-moon' : 'i-lucide-sun'"
              color="neutral"
              variant="soft"
              class="rounded-full"
              @click="isDark = !isDark"
            />
          </ClientOnly>
          <!-- Mobile menu -->
          <UDropdownMenu
            v-if="$viewport.isLessThan('tablet')"
            :items="hamburgerItems"
            :ui="{
              content: 'w-72',
            }"
            :content="{
              align: 'end',
              side: 'bottom',
              sideOffset: 8,
            }"
          >
            <UButton
              v-if="viewport.isLessThan('tablet')"
              icon="i-lucide-menu"
              color="neutral"
              variant="soft"
            />
          </UDropdownMenu>
        </div>
      </div>
    </nav>
  </header>
</template>
