<template>
  <Transition :css="false" @enter="enter">
    <div class="flex overflow-hidden items-center" v-if="show && trending?.videos" ref="el">
      <div
        class="border-white rounded-full flex border-2 overflow-hidden justify-center hidden video__item"
        v-for="(video, key) of trending?.videos"
        :key="video.id"
      >
        <Image
          :alt="trending.show"
          :name-image="trending.backdropPath"
          :width="64 / (key + 1)"
          :height="64 / (key + 1)"
        />
      </div>
    </div>
  </Transition>
</template>
<script lang="ts" setup>
import { computed, nextTick, ref } from 'vue';
import { useStore } from 'vuex';

import { Trending } from '@/types/trending';
import { useAnime } from '@/components/home/util';

const show = ref(false);
const store = useStore();
const trending = computed(() => store.getters['trending/selected'] as Trending);

const { enter } = useAnime({
  keyframes: [
    { translateX: 40 }, { translateX: 0 },
  ],
  delay: (_, i) => 1000 * i,
}, el => el.querySelectorAll('div'));

nextTick(() => show.value = !show.value)
</script>
<style lang="scss" scoped>
.video__item:nth-child(6),
.video__item:nth-child(5),
.video__item:nth-child(4) {
  @apply block h-1 w-1 bg-red border-red mr-2;
}

.video__item:nth-child(1),
.video__item:nth-child(2),
.video__item:nth-child(3) {
  @apply block h-8 w-8 mr-4;
}

.video__item:nth-child(1) {
  @apply h-16 w-16;
}

.video__item:nth-child(2) {
  @apply h-12 w-12;
}
</style>
