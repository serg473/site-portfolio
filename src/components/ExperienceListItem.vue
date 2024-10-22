<script setup>
defineProps({
    experienceItem: {
        type: Object,
        required: false
    }
})
</script>
<template>

    <div
        class="rounded-xl bg-gray shadow-md dark:bg-gray-100 dark:shadow-2xl mx-auto flex w-full max-w-4xl flex-col justify-between gap-4 p-8 md:flex-row md:gap-8">
        <a target="_blank" :href="experienceItem?.link">
            <img loading="lazy" decoding="async" :src="experienceItem?.name" :alt="experienceItem?.name">
        </a>
        <div class="font-normal text-base leading-[150%]">
            <span class="text-gray-700">{{ experienceItem?.startDate }} - {{ experienceItem?.endDate }}</span>
            <h4 class="my-4 font-semibold text-[18px] leading-[156%] text-gray-900">{{ experienceItem?.position }}</h4>
            <ul class="list-disc pl-7 flex flex-col gap-2">
                <li class="text-base leading-[150%] text-gray-600" v-for="subExp in experienceItem?.responsibilities"
                    :key="subExp">{{ subExp }}</li>
            </ul>
        </div>
    </div>

</template>
<style></style>