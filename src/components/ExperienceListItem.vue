<script setup>
defineProps({
  experienceItem: {
    type: Object,
    required: false,
  },
});
</script>
<template>
  <div
    class="rounded-xl bg-gray shadow-md dark:bg-gray-800 dark:shadow-2xl mx-auto flex w-full max-w-4xl flex-col justify-between gap-4 p-8 md:flex-row md:gap-8"
  >
    <a target="_blank" :href="experienceItem?.link">
      <img
        loading="lazy"
        decoding="async"
        :src="experienceItem?.name"
        :alt="experienceItem?.name"
      />
    </a>
    <div class="font-normal md:flex text-base leading-[150%]">
      <span class="text-gray-700 dark:text-gray-200 order-2"
        >{{ experienceItem?.startDate }} - {{ experienceItem?.endDate }}</span
      >
      <div class="md:flex md:flex-col">
        <h4
          class="my-4 md:mt-0 font-semibold text-[18px] leading-[156%] text-gray-900 dark:text-gray-50"
        >
          {{ experienceItem?.position }}
        </h4>

        <ul
          class="dark:text-gray-300 text-gray-600 list-disc pl-7 md:flex md:flex-col gap-2"
        >
          <li
            class="text-base leading-[150%]"
            v-for="subExp in experienceItem?.responsibilities"
            :key="subExp"
          >
            {{ subExp }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style></style>
