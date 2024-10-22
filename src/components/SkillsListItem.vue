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
    <div class="flex flex-col items-center gap-2">
        <a target="_blank" :href="skillItem?.link">
            <SvgIcon :name="skillItem?.name" />
        </a>
        <span class="text-base leading-[150%] text-gray-600">{{ skillItem?.name }}</span>
    </div>
</template>
<style lang="postcss"></style>