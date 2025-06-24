<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
const props = defineProps({
  current: {
    type: Number,
    default: 1,
  },
  total: {
    type: Number,
    default: 1,
  },
});

const emit = defineEmits(["update:page"]);

const currentPage = ref(props.current);

watchEffect(() => {
  currentPage.value = props.current;
});
</script>

<template>
  <UPagination
    v-model:page="currentPage"
    show-edges
    :total="total"
    :sibling-count="1"
    active-color="neutral"
    class="flex justify-center w-full mx-auto mt-8"
    @update:page="emit('update:page', currentPage)"
  />
</template>
