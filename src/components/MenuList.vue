<script setup>
import MenuListItem from '@/components/MenuListItem.vue';
const menuList = [
    { name: 'About', link: '#about' },
    { name: 'Work', link: '#work' },
    { name: 'Testimonials', link: '#testimonials' },
    { name: 'Contact', link: '#contact' }
]
</script>
<template>
    <ul class="flex list-none gap-6">
        <MenuListItem v-for="menuItem in menuList" :key="menuItem.name" :menuItem="{ ...menuItem }" />
    </ul>
</template>
<style></style>