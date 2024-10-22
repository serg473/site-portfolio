<script setup>
import { useStore } from '@/assets/img/portfolio';
import WorkListItem from './WorkListItem.vue';
const store = useStore();
</script>
<template>
    <div>
        <WorkListItem v-for="work in store.work" :key="work.name" :workItem="work" />
    </div>
</template>
<style></style>