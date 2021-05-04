<template>
  <div position="top-0 z-30 fixed" w="full" transition="all">
    <header class="flex text-white py-4 px-10 align-middle justify-between">
      <div title="menu icon " role="button" @click.prevent="toggleNavigation">
        <svg viewBox="0 0 24 24" id="stats" class="h-8 stroke-white stroke-2 w-8">
          <path d="M6 7L15 7M6 12L18 12M6 17L12 17" />
        </svg>
      </div>
      <div class="flex-1">
        <div class="flex h-full justify-center items-center">
          <span class="font-bold leading-3 uppercase">__CINEMA</span>
        </div>
      </div>
      <div>3</div>
    </header>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    const store = useStore();
    const toggleNavigation = () => store.dispatch('setting/toggleNavigation', {});

    return {
      toggleNavigation
    }
  },
});
</script>
