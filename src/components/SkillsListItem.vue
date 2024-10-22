<script setup>
import SvgIcon from '@/components/SvgIcon.vue';
defineProps({
    skillItem: {
        type: Object,
        required: true,
    }
})
</script>
<template>
    <div class="flex flex-col items-center gap-2 scale-up-center">
        <a target="_blank" :href="skillItem?.link">
            <SvgIcon :name="skillItem?.name" />
        </a>
        <span class="text-base leading-[150%] text-gray-600">{{ skillItem?.name }}</span>
    </div>
</template>
<style scoped lang="postcss">
div.scale-up-center {
    @apply transition-all duration-300 ease-in;

    &:hover {
        @apply scale-[1.2]
    }
}
</style>