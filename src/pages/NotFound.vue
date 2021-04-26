<template>
  <FullScreen class="bg-black w-screen overflow-hidden">
    <FullScreen>
      <div class="flex h-full w-full items-center justify-center">
        <span class="text-gray text-opacity-20 text-4.5rem sm:text-10xl md:text-15xl">NOT <br> FOUND</span>
      </div>
    </FullScreen>

    <FullScreen class="flex justify-center">
      <div class="flex h-full space-x-4 text-white w-full max-w-70 text-7xl items-center justify-center sm:max-w-100">
        <span >40</span>
        <span class="flex-1 relative line"></span>
        <span >4</span>
      </div>
    </FullScreen>
  </FullScreen>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import FullScreen from '@/components/commons/FullScreen.vue';

export default defineComponent({
  components: { FullScreen }
});
</script>

<style lang="scss" scoped>
.line::before {
  content: '';
  @apply absolute top-1/2 transform top-1/2 w-full bg-white h-1;
}
</style>