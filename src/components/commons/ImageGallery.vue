<template>
  <img v-if="urlImage" :data-splide-lazy="urlImage" :alt="alt" sizes="100vw" />
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch } from 'vue';
import { useStore } from 'vuex';
import { Configuration, ImageConfig, Size as ImageSize } from '@/types/configuration';

export default defineComponent({
  setup(props) {
    const store = useStore();
    const config = computed(() => store.getters['configuration/config'] as Configuration);
    const sizeImage = computed(() => props.size);
    const nameImage = computed(() => props.nameImage);
    const urlImage = ref('');

    watch(
      () => [config.value.images, sizeImage.value, nameImage.value],
      ([images, size, name]) => {
        const url = (images as ImageConfig)?.secureBaseUrl ?? null
        if (!url || !size || !name) return;
        urlImage.value = `${url}${size}${name}`;
      },
      { immediate: true }
    );

    return {
      urlImage
    };
  },
  props: {
    size: {
      default: ImageSize.original,
      type: String
    },
    alt: {
      default: '',
      type: String
    },
    nameImage: {
      default: '',
      type: String
    },
  }
});
</script>
