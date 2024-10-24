<script setup>
import { getImagePath } from "@/utils";
import { useDark } from "@vueuse/core";
const isDark = useDark();
defineProps({
  workItem: {
    type: Object,
    required: false,
  },
});
</script>
<template>
  <div
    class="rounded-xl mt-6 bg-gray shadow-md dark:bg-gray-100 dark:shadow-2xl mx-auto flex w-full max-w-6xl flex-col md:flex-row"
  >
    <div
      class="flex dark:border-none border-gray-100 bg-gray-50 p-8 dark:bg-gray-700 max-md:rounded-t-xl md:w-1/2 lg:p-12 md:rounded-l-xl md:border-r"
    >
      <a target="_blank" :href="workItem?.link">
        <img :src="getImagePath(workItem?.imageURL)" alt="Work" loading="lazy"
        decoding="async" class="rounded-xl h-full shadow-lg transition-transform
        duration-500 md:hover:scale-105"
      </a>
    </div>
    <div
      class="mt-6 md:mt-0 dark:bg-gray-800 flex flex-col gap-6 p-8 md:w-1/2 lg:p-12"
    >
      <p
        class="dark:text-gray-50 text-lg md:text-xl font-semibold text-gray-900"
      >
        {{ workItem?.name }}
      </p>
      <p class="dark:text-gray-300 text-normal text-base">
        {{ workItem?.description }}
      </p>
      <div class="flex flex-wrap gap-2">
        <div
          v-for="stack in workItem?.skills"
          :key="stack"
          class="flex items-center justify-center rounded-xl dark:bg-gray-700 dark:text-gray-300 bg-gray-200 px-5 py-1"
        >
          <p class="text-normal text-sm font-medium">{{ stack }}</p>
        </div>
      </div>
      <a
        target="_blank"
        class="self-start rounded-lg p-1.5 hover:bg-gray-50 [&amp;_svg]:stroke-gray-500"
        :href="workItem?.link"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          :stroke="isDark ? '#F5F5F5' : '#1f2937'"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-external-link"
        >
          <path
            d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
          ></path>
          <polyline points="15 3 21 3 21 9"></polyline>
          <line x1="10" x2="21" y1="14" y2="3"></line></svg
      ></a>
    </div>
  </div>
</template>
<style></style>
