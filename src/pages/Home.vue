<template>
  <TrendingGallery/>
</template>
<script lang="ts">
import { defineAsyncComponent, defineComponent, onBeforeMount } from 'vue';
import { useStore } from 'vuex';

const TrendingGallery = defineAsyncComponent(() => import('@/components/TrendingGallery.vue'));

export default defineComponent({
  setup() {
    const store = useStore();
    const getTrending = async () => store.dispatch('trending/get', {});
    onBeforeMount(async () => await getTrending());
  },
  components: { TrendingGallery },
});
</script>
