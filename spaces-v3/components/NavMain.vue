<script setup lang="ts">
import { Icon } from "@iconify/vue";
import type { DropdownMenuItem, NavigationMenuItem } from "@nuxt/ui";

const items = ref<NavigationMenuItem[][]>([
  [
    {
      label: "Home",
      icon: "i-lucide-home",
      to: "/",
    },
    {
      label: "Gallery",
      icon: "i-lucide-image",
      to: "/gallery",
    },
    {
      label: "Blog",
      icon: "i-lucide-text",
      to: "/blogs",
    },
    {
      label: "Artworks",
      icon: "i-lucide-brush",
      to: "/artwork",
    },
  ],
]);

const hamburgerItems = ref<DropdownMenuItem[][]>([
  [
    {
      link: "Home",
      icon: "i-lucide-home",
      to: "/",
      label: "Home",
    },
    {
      link: "Gallery",
      icon: "i-lucide-image",
      to: "/gallery",
      label: "Gallery",
    },
    {
      link: "Blog",
      icon: "i-lucide-text",
      to: "/blogs",
      label: "Blog",
    },
    {
      link: "Artworks",
      icon: "i-lucide-brush",
      to: "/artwork",
      label: "Artworks",
    },
  ],
]);

const viewport = useViewport();

watch(viewport.breakpoint, (newBreakpoint, oldBreakpoint) => {
  console.log("Breakpoint updated:", oldBreakpoint, "to", newBreakpoint);
});

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
  <nav class="w-full bg-white border-b flex-[1_0_0] py-4 px-6 gap-4 mb-4">
    <div class="max-w-[1440px] mx-auto flex items-center justify-between">
      <!-- Icon, title, menu -->
      <div class="flex items-center gap-4">
        <!-- <Icon icon="mdi-light:camera" width="33" height="33" color="black" /> -->
        <NuxtLink to="/" class="text-2xl font-bold text-black">
          <h2>Spaces</h2>
        </NuxtLink>
        <!-- Desktop menu -->
        <UNavigationMenu
          v-if="viewport.isGreaterOrEquals('mobileWide')"
          color="neutral"
          :items="items"
          class="w-full"
        />
      </div>
      <!-- Search bar and dark mode toggle element -->
      <div class="flex items-center gap-4">
        <div
          v-show="viewport.isGreaterOrEquals('tablet')"
          class="md:flex items-center bg-gray-100 rounded-lg px-3 py-1 gap-2"
        >
          <Icon
            icon="circum:search"
            width="16"
            height="16"
            class="text-gray-500"
          />
          <input type="text" placeholder="Search..." class="text-gray-500" />
        </div>
        <!--  -->
        <ClientOnly v-if="!colorMode?.forced">
          <UButton
            :icon="isDark ? 'i-lucide-moon' : 'i-lucide-sun'"
            color="neutral"
            variant="ghost"
            class="rounded-full"
            @click="isDark = !isDark"
          />
        </ClientOnly>
        <!-- Mobile menu -->
        <UDropdownMenu
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
            v-show="viewport.isLessOrEquals('mobileWide')"
            icon="i-lucide-menu"
            color="neutral"
            variant="soft"
          />
        </UDropdownMenu>
      </div>
    </div>
  </nav>
</template>
