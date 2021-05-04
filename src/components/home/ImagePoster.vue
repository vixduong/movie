<template>
  <Transition :css="false" @enter="enter">
    <ul
      v-if="show && trending && trending.image && trending.image.posters"
      ref="el"
      flex="~"
      space="x-2"
    >
      <li
        v-for="(item, index) of trending?.takeBackdropImages?.(3)"
        :key="item.filePath"
        :class="[index === 0 ? 'w-24' : 'w-18', 'opacity-0']"
      >
        <Image
          v-if="item"
          :width="index === 0 ? 64 : 32"
          :height="index === 0 ? 64 : 32"
          :alt="item.englishName ?? item.filePath"
          :name-image="item.filePath"
        />
      </li>
    </ul>
  </Transition>
</template>
<script lang="ts" setup>
import { computed, nextTick, ref } from 'vue'
import { useStore } from 'vuex'

import { Trending } from '@/types/trending'
import anime from 'animejs'

const show = ref(false)
const store = useStore()
const trending = computed(() => store.getters['trending/selected'] as Trending)

const el = ref<HTMLElement>()
const enter = (_el: Element, done: () => void) => {
  anime.timeline({
    duration: 500,
    easing: (_, i) => t => Math.pow(Math.sin(t * (i + 1)), 3),
  }).add({
    targets: el.value!.querySelectorAll('li:nth-child(1)'),
    opacity: 1,
    translateY: [0, 10, 50, -40, -10, 0],
  }).add({
    targets: el.value!.querySelectorAll('li:nth-child(2)'),
    translateY: [0, 10, 50, -40, -10, 10],
    opacity: 1,
    scale: 0.9,
  }).add({
    targets: el.value!.querySelectorAll('li:nth-child(3)'),
    opacity: 1,
    translateX: -15,
    translateY: -30,
  })
}

nextTick(() => show.value = !show.value)
</script>
