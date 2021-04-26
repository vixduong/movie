<template>
  <div class="flex flex-col font-inter text-white relative">
    <!--  header  -->
    <Header/>
    <!--  navigation  -->
    <Navigation/>
    <!--  main  -->
    <main>
      <RouterView/>
    </main>
  </div>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent, onBeforeMount } from 'vue';
import { useStore } from 'vuex';

import Header from '@/components/Header.vue';

const Navigation = defineAsyncComponent(() => import('@/components/Navigation.vue'));

export default defineComponent({
  setup() {
    const store = useStore();
    const getConfig = async () => store.dispatch('configuration/get', {});
    onBeforeMount(async () => await getConfig());
  },
  components: { Header, Navigation, },
});
</script>