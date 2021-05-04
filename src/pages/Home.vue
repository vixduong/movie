<template>
  <TrendingGallery />
</template>
<script lang="ts" setup>
import { onBeforeMount } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const getTrending = async () => store.dispatch('trending/get', {});
onBeforeMount(async () => await getTrending());
</script>
