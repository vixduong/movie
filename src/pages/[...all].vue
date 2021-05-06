<template>
  <FullScreen bg="black" w="screen" display="overflow-hidden">
    <FullScreen>
      <div h="full" w="full" align="items-center" justify="center" class="flex">
        <span text="gray opacity-20 sm:10xl md:15xl" class="text-4.5rem">NOT <br> FOUND</span>
      </div>
    </FullScreen>

    <FullScreen justify="center" class="flex">
      <div
        h="full"
        space="x-4"
        text="white 7xl"
        w="full"
        m="ax-w-70 s:ax-w-100"
        align="items-center"
        justify="center"
        class="flex"
      >
        <span>40</span>
        <span flex="1" position="relative" class="line"></span>
        <span>4</span>
      </div>
    </FullScreen>
  </FullScreen>
</template>
<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.line::before {
  content: '';
  @apply absolute top-1/2 transform top-1/2 w-full bg-white h-1;
}
</style>
