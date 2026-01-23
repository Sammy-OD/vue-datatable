<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import SearchInput from '@/components/searchinput';
import { AngleDown, AngleLeft, AngleRight } from '@/components/icons';
import Loader from '@/components/loader';

import type { DatatableProps } from '@/types';

const props = defineProps<DatatableProps>();
const emit = defineEmits(['onRowClicked']);

const spaceY = (val: string | undefined) => {
  let space;
  switch (val) {
    case 'narrow':
      space = 'py-2';
      break;

    case 'wide':
      space = 'py-6';
      break;

    default:
      space = 'py-4';
  }

  return space;
}

const searchFilter = ref('');
const itemsPerPage = ref(5);
const currentPage = ref(1);

watch([itemsPerPage, searchFilter], () => {
  currentPage.value = 1;
})

const handleSearch = (text: string) => {
  searchFilter.value = text;
}

const filteredData = computed(() => {
  if (searchFilter.value !== '') {
    return props.data.filter(data => Object.values(data).some(value => String(value).toLowerCase().includes(searchFilter.value.toLowerCase())))
  }

  return props.data;
});

const totalPages = computed(() => Math.ceil(filteredData.value.length / itemsPerPage.value));

const paginatedData = computed(() => {
  if (props.pagination) {
    const start = (currentPage.value - 1) * itemsPerPage.value;
    return filteredData.value.slice(start, start + itemsPerPage.value)
  }

  return filteredData.value;
});

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
}

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
}

const rangeText = computed(() => {
  if (filteredData.value.length === 0) {
    return '0 - 0';
  }
  const start = (currentPage.value - 1) * itemsPerPage.value + 1;
  const end = Math.min(start + itemsPerPage.value - 1, filteredData.value.length);
  return `${start} - ${end}`;
})

const rowClicked = (data: {}) => {
  emit('onRowClicked', data);
}

</script>

<template>
  <div class="w-full">
    <div class="mb-4 p-2" v-if="searchable">
      <SearchInput @search="handleSearch" />
    </div>

    <div :class="['overflow-auto', scrollable ? 'max-h-112.5' : null]">
      <table :class="['w-full dark:text-white', paginatedData.length === 0 ? 'md:table-fixed' : null]">
        <thead
          :class="[scrollable ? 'sticky top-0 shadow-sm shadow-gray-100 dark:shadow-gray-800 bg-white dark:bg-black' : null]">
          <tr>
            <th v-for="heading in headings" class="text-sm p-3 text-left uppercase font-semibold whitespace-nowrap">{{
              heading }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, rowIndex) in paginatedData" :key="rowIndex" @click="rowClicked(row)"
            class="hover:bg-gray-50 cursor-pointer border-y border-gray-100 dark:border-gray-800 dark:hover:bg-gray-50/5 whitespace-nowrap">
            <td v-for="(col, colIndex) in Object.values(row)" :key="colIndex"
              :class="['text-sm p-3 font-light', spaceY(props.verticalSpacing)]">
              {{ col }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="pt-4">
      <p v-if="paginatedData.length === 0 && !loading" class="text-center dark:text-neutral-white py-4">No data</p>
      <Loader v-if="loading" />
    </div>

    <!-- Pagination -->
    <div v-if="pagination" class="mt-4">
      <div class="flex justify-center md:justify-end gap-4 flex-wrap">
        <div class="relative">
          <select v-model.number="itemsPerPage"
            class="hover:cursor-pointer appearance-none block px-3 pr-5 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-midtone focus:border-primary-midtone dark:bg-darkmode-background dark:text-neutral-white dark:border-gray-600 dark:focus:ring-neutral-white dark:focus:border-neutral-white text-xs md:text-sm">
            <option value="5">5 per page</option>
            <option value="10">10 per page</option>
            <option value="15">15 per page</option>
            <option value="20">20 per page</option>
          </select>
          <div class="absolute inset-y-0 right-0 flex items-center px-1 pointer-events-none">
            <AngleDown class="h-4 w-4 text-gray-500" />
          </div>
        </div>

        <div class="flex dark:text-white border border-gray-300 dark:border-gray-600 rounded-md shadow-sm">
          <span
            class="py-2 px-3 text-center inline-block text-xs md:text-sm border-r border-gray-300 dark:border-gray-600">
            <span class="font-semibold">{{ rangeText }}</span> of {{ filteredData.length }}
          </span>
          <span>
            <button
              :class="['w-8 h-full mr-0.5 disabled:opacity-50 not-disabled:cursor-pointer', currentPage !== 1 ? 'hover:bg-gray-100 dark:hover:bg-gray-100/5' : null]"
              @click="prevPage" :disabled="currentPage === 1">
              <AngleLeft />
            </button>
            <button
              :class="['w-8 h-full rounded-r-md disabled:opacity-50 not-disabled:cursor-pointer', currentPage !== totalPages ? 'hover:bg-gray-100 dark:hover:bg-gray-100/5' : null]"
              @click="nextPage" :disabled="currentPage === totalPages">
              <AngleRight />
            </button>
          </span>
        </div>
      </div>
    </div>
    <!-- Pagination End -->
  </div>
</template>