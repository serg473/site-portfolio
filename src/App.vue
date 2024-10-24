<script setup>
import { RouterView } from "vue-router";
import { copyTextClipboard } from "@/utils";
import Header from "@/components/Header.vue";
import SectionTitle from "./components/SectionTitle.vue";
</script>

<template>
  <Header />
  <main>
    <RouterView />
  </main>
  <footer class="dark:bg-gray-950 w-full bg-gray py-16 md:py-20 2xl:py-24">
    <div
      class="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:gap-12 md:px-8"
    >
      <div class="flex flex-col items-center gap-4">
        <SectionTitle>Get in touch</SectionTitle>

        <p
          class="dark:text-[#CCCCCC] text-normal text-lg md:text-xl max-w-xl text-center"
        >
          What’s next? Feel free to reach out to me if you are looking for a
          developer, have a query, or simply want to connect.
        </p>
      </div>
      <div class="flex flex-col items-center gap-6 md:gap-12">
        <div class="flex flex-col items-center md:gap-4">
          <div
            class="flex items-center gap-4 md:gap-5 dark:text-[#F9FAFB] text-gray-900"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-6 w-6 md:h-8 md:w-8"
            >
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </svg>
            <h2 class="text-lg md:text-4xl font-semibold tracking-[-0.02em]">
              imax473@gmail.com
            </h2>
            <button
              @click="copyTextClipboard('imax473@gmail.com')"
              class="relative flex justify-center items-center hover:bg-gray-100 active:bg-gray-200 rounded-lg p-1.5 transition-colors duration-200 [&amp;_svg]:stroke-gray-600 [&amp;_svg]:hover:stroke-gray-700 [&amp;_svg]:w-6 [&amp;_svg]:h-6"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-copy"
              >
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                <path
                  d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
                ></path>
              </svg>
            </button>
          </div>
          <div class="flex items-center gap-4 md:gap-5 dark:text-[#F9FAFB] text-gray-90">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-6 w-6 md:h-8 md:w-8"
            >
              <path
                d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
              ></path>
            </svg>
            <h2
              class="text-lg md:text-4xl font-semibold tracking-[-0.02em] "
            >
              +375(29)989-87-82
            </h2>
            <button
              @click="copyTextClipboard('+375(29)989-87-82')"
              class="relative flex justify-center items-center hover:bg-gray-100 active:bg-gray-200 rounded-lg p-1.5 transition-colors duration-200 [&amp;_svg]:stroke-gray-600 [&amp;_svg]:hover:stroke-gray-700 [&amp;_svg]:w-6 [&amp;_svg]:h-6"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-copy"
              >
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                <path
                  d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div class="flex flex-col items-center gap-2">
          <p class="text-normal text-base text-center">
            You may also find me on these platforms!
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
