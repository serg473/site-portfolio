<script>
import { RouterView } from 'vue-router';
</script>

<template>
    <header>
        <div class="mx-auto flex w-full max-w-7xl flex-col gap-6 p-[16px_16px_0_16px] md:gap-12 md:px-8">
            <div class="flex justify-between">
                <h5 class="text-3xl font-bold leading-9 tracking-[-0.25] text-gray-900">SS</h5>
                <button>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 12H20" stroke="#4B5563" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M4 6H20" stroke="#4B5563" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M4 18H20" stroke="#4B5563" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </button>
            </div>
        </div>
    </header>
    <main>
        <RouterView />
    </main>
</template>

<style scoped></style>
