<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>

<template>
  <div>
    <!-- Mobile and tablet view  -->
    <footer
      v-if="$viewport.isLessOrEquals('mobileWide')"
      class="bg-gray-800 w-full h-32 px-4 py-4 mt-4 bottom-0"
    >
      <div class="flex flex-col justify-start gap-y-2 mx-auto">
        <div>
          <p class="light:text-white">© 2025 Talha Minhas</p>
        </div>
        <div class="flex items-center gap-x-1">
          <NuxtLink
            to="https://www.instagram.com/talha_mnhs/"
            target="_blank"
            class="flex items-center gap-x-2"
          >
            <Icon icon="mdi:instagram" color="#fff" />
            <p class="light:text-white">Follow my work on Instagram</p>
          </NuxtLink>
        </div>
      </div>
    </footer>
    <!-- Desktop view  -->
    <footer
      v-if="$viewport.isGreaterOrEquals('tablet')"
      class="bg-gray-800 h-32 px-4 py-6 mt-8 bottom-0"
    >
      <div class="flex justify-between max-w-[1440px] mx-auto">
        <p class="light:text-white">© 2025 Talha Minhas</p>
        <NuxtLink
          to="https://www.instagram.com/talha_mnhs/"
          target="_blank"
          class="flex items-center gap-x-2"
        >
          <Icon icon="mdi:instagram" color="#fff" />
          <p class="light:text-white">Follow my work on Instagram</p>
        </NuxtLink>
      </div>
    </footer>
  </div>
</template>
