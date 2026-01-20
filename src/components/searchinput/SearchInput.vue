<script setup lang="ts">
import { Search } from '@/components/icons';

const emit = defineEmits(['search']);

const search = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('search', target.value);
}

</script>

<template>
  <div class="w-56 relative">
    <label class="sr-only">Search</label>
    <input type="text" placeholder="Search" @input="search" sty
      class="w-full text-sm border-none p-2 pl-9 rounded-md outline-none ring-1 ring-gray-300 focus:ring-black dark:bg-transparent dark:text-white dark:ring-gray-700 dark:focus:ring-white">
    <Search class="absolute top-1/2 left-2 -translate-y-1/2 text-gray-400" />
  </div>
</template>