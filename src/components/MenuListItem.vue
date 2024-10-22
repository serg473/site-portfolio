<script setup>
defineProps({
    menuItem: {
        type: Object,
        requared: false
    }
})
</script>
<template>
    <li><a target="_self"
            class="text-base font-medium text-gray-600 transition-all hover:text-gray-900 active:text-gray-600"
            :href="menuItem.link">{{ menuItem.name }}</a></li>
</template>
<style></style>