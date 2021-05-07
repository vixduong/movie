<template>
  <Transition :css="false" @enter="enterOverview">
    <div v-if="show" opacity="0" justify="end" class="flex">
      <p
        w="7/10"
        p="rose-lg rose-white"
        display="overflow-hidden"
        class="line-clamp-4"
      >
        {{ trending?.overview }}
      </p>
    </div>
  </Transition>

  <Transition :css="false" @enter="enterName">
    <div v-if="show" opacity="0" p="rose-2xl">
      <h2
        font="bold"
        text="right 9xl uppercase"
        p="rose-white"
        class="line-clamp-2"
      >
        {{ trending?.show }}
      </h2>
    </div>
  </Transition>

  <div justify="end" class="flex">
    <button
      bg="red"
      border="rounded"
      text="lg uppercase"
      p="y-2 x-9"
      ring="4 red"
      title="trainer"
      @click.prevent="toggleModal()"
    >
      trainer
    </button>
    <button
      title="share society"
      border="white rounded 2"
      m="x-6"
      p="y-1 x-2"
      class="focus:(outline-none)"
    >
      <svg id="share-android" viewBox="0 0 24 24" h="6" svg="stroke-white stroke-2" w="6">
        <path d="M16 8L8 11 16 8zM16 16L8 13 16 16z" />
        <circle cx="6" cy="12" r="2" />
        <circle cx="18" cy="7" r="2" />
        <circle cx="18" cy="17" r="2" />
      </svg>
    </button>
  </div>
</template>
<script lang="ts" setup>
import { useStore } from 'vuex'
import { Trending } from '@/types/trending'
// eslint-disable-next-line pretty-imports/sorted
import { computed, nextTick, ref } from 'vue'
import { useAnime } from './util'

const store = useStore()
const show = ref<boolean>(false)

const { enter: enterOverview } = useAnime({
  translateY: [-500, 0],
})
const { enter: enterName } = useAnime({
  translateX: [-700, 0],
})

const toggleModal = () => store.dispatch('setting/toggleModal', {})
const trending = computed(() => store.getters['trending/selected'] as Trending)

nextTick(() => show.value = true)
</script>
