<template>
  <Transition
    :css="false" @enter="enterOverview"
  >
    <div v-if="show" class="flex justify-end opacity-0">
      <p class="w-7/10 prose-lg prose-white overflow-hidden line-clamp-4">{{ trending?.overview }}</p>
    </div>
  </Transition>

  <Transition :css="false" @enter="enterName">
    <div v-if="show" class="prose-2xl opacity-0">
      <h2 class="font-bold text-right text-9xl uppercase prose-white">{{ trending?.show }}</h2>
    </div>
  </Transition>

  <div class="flex justify-end">
    <button
      class="bg-red rounded text-lg py-2 px-9 uppercase focus:(outline-none ring-4 ring-red ring-opacity-20)"
      title="trainer"
      @click.prevent="toggleModal()"
    >
      trainer
    </button>
    <button title="share society" class="border-white rounded border-2 mx-6 py-1 px-2 focus:(outline-none)">
      <svg viewBox="0 0 24 24" id="share-android" class="h-6 stroke-white stroke-2 w-6">
        <path d="M16 8L8 11 16 8zM16 16L8 13 16 16z"></path>
        <circle cx="6" cy="12" r="2"></circle>
        <circle cx="18" cy="7" r="2"></circle>
        <circle cx="18" cy="17" r="2"></circle>
      </svg>
    </button>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, nextTick, ref } from 'vue';
import { Trending } from '@/types/trending';
import { useStore } from 'vuex';
import { useAnime } from './util';

export default defineComponent({
  setup() {
    const store = useStore();
    const show = ref<boolean>(false);

    const { enter: enterOverview, } = useAnime({
      translateY: [-500, 0],
    });
    const { enter: enterName } = useAnime({
      translateX: [-700, 0]
    });

    const toggleModal = () => store.dispatch('setting/toggleModal', {});
    const trending = computed(() => store.getters['trending/selected'] as Trending);

    nextTick(() => show.value = true);

    return {
      show, toggleModal, trending,
      enterOverview, enterName,
    };
  },
  components: {}
});
</script>
