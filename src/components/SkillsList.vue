<script setup>
import SkillsListItem from '@/components/SkillsListItem.vue';
import { useStore } from '@/assets/img/portfolio';
const store = useStore();
</script>
<template>
    <div
        class="mt-6 w-full justify-center grid grid-cols-3 gap-y-4 md:grid-cols-6 md:gap-y-8 lg:grid-cols-8 lg:gap-y-12">
        <SkillsListItem v-for="skill in store?.skills" :key="skill?.name" :skillItem="{ ...skill }" />
    </div>
</template>
<style lang="postcss"></style>