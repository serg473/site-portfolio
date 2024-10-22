<script setup>
import { useStore } from '@/assets/img/portfolio';
import ExperienceListItem from './ExperienceListItem.vue';
const store = useStore();

</script>
<template>
    <div class="flex flex-col gap-6">
        <ExperienceListItem v-for="experience in store.experience" :key="`Experience_${experience.id}`"
            :experienceItem="{ ...experience }" />
    </div>
</template>
<style></style>