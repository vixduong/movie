<template>
  <figure
    v-if="urlImage"
    class="aspect-w-16 aspect-h-9"
    :style="[`--tw-aspect-w: ${width ?? 16}`, `--tw-aspect-h: ${height ?? 9}`]"
  >
    <img
      :src="urlImage" :alt="alt"
      :width="width" :height="height"
      class="object-cover"
    >
  </figure>
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
        const url = (images as ImageConfig)?.baseUrl ?? null
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
    width: {
      default: undefined,
      type: Number
    },
    height: {
      default: undefined,
      type: Number
    },
  }
});
</script>
