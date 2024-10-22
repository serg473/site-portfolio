<script setup>
import { ref } from 'vue';
import MenuList from '@/components/MenuList.vue';
import SvgIcon from '@/components/SvgIcon.vue';
const isModal = ref(false)
</script>
<template>
    <header>
        <div class="mx-auto flex w-full max-w-7xl flex-col gap-6 p-[16px_16px_0_16px] md:gap-12 md:px-8">
            <div class="flex justify-between">
                <h5 class="text-3xl font-bold leading-9 tracking-[-0.25] text-gray-900">&lt;DS /&gt;</h5>
                <button class="md:hidden" @click="isModal = true">
                    <SvgIcon name="burger" />
                </button>
                <div class="flex items-center justify-between">
                    <div>
                        <MenuList />
                    </div>
                    <div class="flex">
                        <button>
                            <SvgIcon name="ThemeLight" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <Teleport to="body">
            <div v-if="isModal" class="fixed inset-0 z-50 bg-gray-900/10 opacity-100 backdrop-blur-sm"
                style="pointer-events: auto;"></div>
            <TransitionGroup name="modal">
                <div v-if="isModal"
                    class="fixed bg-white z-50 shadow-2xl bg-gray ring-1 ring-black/10 transition-all ease-in-out duration-100 inset-y-0 right-0 h-full max-w-xs w-full">
                    <div class="flex items-center justify-between border-b border-gray-100 p-4">
                        <h3 class="text-2xl md:text-3xl tracking-[-0.02em] text-gray-900 font-bold">&lt;DS /&gt;</h3>
                        <button
                            class="relative flex justify-center items-center hover:bg-gray-100 active:bg-gray-200 rounded-lg p-1.5 transition-colors duration-200 [&amp;_svg]:stroke-gray-600 [&amp;_svg]:hover:stroke-gray-700 [&amp;_svg]:w-6 [&amp;_svg]:h-6"
                            type="button" @click="isModal = false"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x">
                                <path d="M18 6 6 18"></path>
                                <path d="m6 6 12 12"></path>
                            </svg></button>
                    </div>
                    <div class="border-b border-gray-100 p-4">
                        <MenuList />
                    </div>
                    <div class="flex flex-col gap-4 p-4">
                        <div class="flex items-center justify-between">
                            <p class="text-normal text-base">Switch Theme</p><button
                                class="relative flex justify-center items-center hover:bg-gray-100 active:bg-gray-200 rounded-lg p-1.5 transition-colors duration-200 [&amp;_svg]:stroke-gray-600 [&amp;_svg]:hover:stroke-gray-700 [&amp;_svg]:w-6 [&amp;_svg]:h-6">
                                <SvgIcon name="Theme" />
                            </button>
                        </div><button
                            class="inline-flex items-center justify-center rounded-xl bg-gray-900 px-4 py-1.5 font-medium text-gray-50 transition-colors duration-200 hover:bg-gray-700 active:bg-gray-800">Download
                            CV</button>
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
</style>