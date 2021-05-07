<template>
  <Gallery v-model="trending" :items="items" :options="options">
    <template #default="{ item }">
      <ImageGallery v-if="item" :alt="item.show" :name-image="item.backdropPath"></ImageGallery>
    </template>
  </Gallery>

  <FullScreen>
    <Overview />
  </FullScreen>

  <Modal>
    <Player
      v-if="trending?.videos?.[0]"
      :provider="trending?.videos?.[0]?.site?.toLowerCase()"
      :embed-id="trending?.videos?.[0]?.key"
    />
  </Modal>
</template>

<script lang="ts" setup>
import { useStore } from 'vuex'
import { computed, ref, watch } from 'vue'
import { Trending } from '@/types/trending'
import type { SplideOptions } from '@splidejs/splide'

const options = ref<SplideOptions>({
  lazyLoad: 'nearby',
  cover: true,
  type: 'loop',
  autoplay: true,
  interval: 1000 * 100.1 * 60,
  width: '100vw',
  height: '100vh',
  classes: {
    pagination: 'splide__pagination space-x-1.5',
  },
})

const store = useStore()
const items = computed(() => store.getters['trending/trending'] as Array<Trending>)
const trending = ref<Trending>()

watch(() => trending.value, async(v) => {
  if (!v) return
  await store.dispatch('trending/selected', v)
  await store.dispatch('trending/media')
  await store.dispatch('setting/union')
}, { immediate: true })

</script>
