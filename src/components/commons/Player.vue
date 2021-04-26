<template>
  <div class="w-320px sm:w-600px md:w-700px lg:w-960px m-auto">
    <div ref="el" playsinline :data-plyr-provider="provider" :data-plyr-embed-id="embedId">
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onBeforeMount, onMounted, PropType, ref } from 'vue';
import Plyr from 'plyr';

export default defineComponent({
  setup(props) {
    const el = ref<HTMLElement>();
    const player = ref<Plyr>();

    onMounted(() => player.value = new Plyr(el.value!, props.options));
    onBeforeMount(() => player.value?.destroy());

    return {
      el,
      player
    };
  },
  props: {
    options: {
      type: Object as PropType<Plyr.Options>
    },
    provider: {
      type: String,
      default: 'youtube'
    },
    embedId: {
      type: String,
      required: true
    }
  }
});
</script>
