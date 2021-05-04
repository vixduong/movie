<template>
  <Gallery :items="items" :options="options" v-model="trending">
    <template v-slot:default="{ item }">
      <Image v-if="item" :alt="item.show" :name-image="item.backdropPath"></Image>
    </template>
  </Gallery>

  <FullScreen>
    <Overview />
  </FullScreen>

  <Modal>
    <Player
      v-if="trending?.videos?.[0]"
      :provider="trending?.videos?.[0]?.site?.toLowerCase()"
      :embedId="trending?.videos?.[0]?.key"
    />
  </Modal>
</template>

<script lang="ts" setup>
import { SplideOptions } from '@splidejs/splide';
import { computed, defineAsyncComponent, ref, watch } from 'vue';
import { Trending } from '@/types/trending';
import { useStore } from 'vuex';

import Image from '@/components/commons/ImageGallery.vue';
import FullScreen from '@/components/commons/FullScreen.vue';

const Gallery = defineAsyncComponent(() => import('@/components/commons/Gallery.vue'));
const Overview = defineAsyncComponent(() => import('@/components/home/Overview.vue'));
const Modal = defineAsyncComponent(() => import('@/components/commons/Modal.vue'));
const Player = defineAsyncComponent(() => import('@/components/commons/Player.vue'));

const options = ref<SplideOptions>({
  lazyLoad: 'nearby',
  cover: true,
  type: 'loop', autoplay: true, interval: 1000 * 100.1 * 60,
  width: '100vw', height: '100vh',
  classes: {
    pagination: 'splide__pagination space-x-1.5',
  },
});

const store = useStore();
const items = computed(() => store.getters['trending/trending'] as Array<Trending>);
const trending = ref<Trending>();

watch(() => trending.value, async (v) => {
  if (!v) return;
  await store.dispatch('trending/selected', v);
  await store.dispatch('trending/media');
  await store.dispatch('setting/union');
}, { immediate: true });

</script>
