<script setup>
import { ref } from "vue";
import { useDark, useToggle } from "@vueuse/core";
import MenuList from "@/components/MenuList.vue";
import SvgIcon from "@/components/SvgIcon.vue";
const isModal = ref(false);
const isDark = useDark();
const toogleDark = useToggle(isDark);
</script>
<template>
  <header class="dark:bg-[#030712]">
    <div
      class="mx-auto flex w-full max-w-7xl flex-col gap-6 p-4 md:gap-12 md:p-4"
    >
      <div class="flex justify-between">
        <h5
          class="text-3xl font-bold leading-9 tracking-[-0.25] text-gray-900 dark:text-[#F9FAFB]"
        >
          &lt;DS /&gt;
        </h5>
        <button class="md:hidden" @click="isModal = true">
          <SvgIcon name="burger" />
        </button>
        <div class="md:flex items-center justify-between gap-12 hidden">
          <div>
            <MenuList />
          </div>
          <div class="flex gap-4">
            <button @click="toogleDark()">
              <SvgIcon
                :class="{ isLightActive: isDark }"
                :name="isDark ? 'ThemeLight' : 'ThemeNight'"
              />
            </button>
            <button
              class="dark:bg-gray-50 dark:text-gray-900 inline-flex items-center justify-center rounded-xl bg-gray-900 px-4 py-1.5 font-medium text-gray-50 transition-colors duration-200 hover:bg-gray-700 active:bg-gray-800"
            >
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
    <Teleport to="body">
      <div
        v-if="isModal"
        class="fixed inset-0 z-50 bg-gray-900/10 opacity-100 backdrop-blur-sm"
        style="pointer-events: auto"
      ></div>
      <TransitionGroup name="modal">
        <div
          v-if="isModal"
          class="fixed dark:bg-gray-950 bg-white z-50 shadow-2xl bg-gray ring-1 ring-black/10 transition-all ease-in-out duration-100 inset-y-0 right-0 h-full max-w-xs w-full"
        >
          <div
            class="flex items-center justify-between border-b border-gray-100 p-4"
          >
            <h3
              class="text-2xl md:text-3xl tracking-[-0.02em] dark:text-neutral-100 text-gray-900 font-bold"
            >
              &lt;DS /&gt;
            </h3>
            <button
              class="relative flex justify-center items-center hover:bg-gray-100 active:bg-gray-200 rounded-lg p-1.5 transition-colors duration-200 [&amp;_svg]:stroke-gray-600 [&amp;_svg]:hover:stroke-gray-700 [&amp;_svg]:w-6 [&amp;_svg]:h-6"
              type="button"
              @click="isModal = false"
            >
              <SvgIcon name="BurgerClose" />
            </button>
          </div>
          <div class="border-b border-gray-100 p-4">
            <MenuList />
          </div>
          <div class="flex flex-col gap-4 p-4">
            <div class="flex items-center justify-between">
              <p class="text-normal dark:text-gray-300 text-base">Switch Theme</p>
              <button
                class="relative flex justify-center items-center hover:bg-gray-100 active:bg-gray-200 rounded-lg p-1.5 transition-colors duration-200 [&amp;_svg]:stroke-gray-600 [&amp;_svg]:hover:stroke-gray-700 [&amp;_svg]:w-6 [&amp;_svg]:h-6"
              >
                <SvgIcon name="ThemeNight" />
              </button>
            </div>
            <button
              class="inline-flex items-center justify-center rounded-xl bg-gray-900 px-4 py-1.5 font-medium text-gray-50 transition-colors duration-200 hover:bg-gray-700 active:bg-gray-800"
            >
              Download CV
            </button>
          </div>
        </div>
      </TransitionGroup>
    </Teleport>
  </header>
</template>
<style lang="postcss">
.modal-enter-active,
.modal-leave-active {
  transition: all 0.5s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
svg {
  &.isLightActive {
    path {
      @apply stroke-gray-50;
    }
  }
}
</style>
