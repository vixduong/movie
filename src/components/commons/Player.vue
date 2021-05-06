<template>
  <div w="320px sm:600px md:700px lg:960px" m="auto">
    <div ref="el" playsinline :data-plyr-provider="provider" :data-plyr-embed-id="embedId"></div>
  </div>
</template>
<script lang="ts" setup>
import { defineProps, onBeforeMount, onMounted, ref } from 'vue'
import Plyr from 'plyr'
import type { PropType } from 'vue'

const props = defineProps({
  options: {
    type: Object as PropType<Plyr.Options>,
  },
  provider: {
    type: String,
    default: 'youtube',
  },
  embedId: {
    type: String,
    required: true,
  },
})

const el = ref<HTMLElement>()
const player = ref<Plyr>()

onMounted(() => player.value = new Plyr(el.value!, props.options))
onBeforeMount(() => player.value?.destroy())

</script>
