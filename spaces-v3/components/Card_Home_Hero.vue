<script setup lang="ts"></script>

<template>
  <div class="w-full flex flex-col justify-center items-start mb-4">
    <div class="relative bg-[#c7c7c7]">
      <NuxtImg
        src="/images/19A.jpeg"
        format="webp"
        densities="x1"
        class="opacity-65 w-screen h-auto object-cover md:object-[35%_70%]"
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
    <div class="self-end mt-4">
      <h2>Welcome to the Spaces Project</h2>
      <p>
        You have just landed at the spaces project homepage. This site is the
        brainchild and manifestation of years of personal creative and
        exploratory projects. It is my intention to make navigating through this
        space(s) an immersive, inspiring and thought-provoking experience.
        Therefore, I am thrilled to hear about your feedback.
      </p>
      <UButton
        label="tell me more"
        color="neutral"
        variant="outline"
        size="md"
        trailing-icon="i-lucide-arrow-right"
      />
    </div>
  </div>
</template>
