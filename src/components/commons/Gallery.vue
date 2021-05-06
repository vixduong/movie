<template>
  <div position="relative">
    <div ref="el" class="splide">
      <div class="splide__track">
        <ul class="splide__list">
          <li v-for="(item, key) of items" :key="key" class="splide__slide">
            <slot :item="item" :index="key"></slot>
          </li>
        </ul>
      </div>
      <div v-if="showProgress" position="absolute inset-0" class="splide__progress">
        <div class="splide__progress__bar"></div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineComponent, defineEmit, defineProps, nextTick, onMounted, ref, watch } from 'vue'
import Splide from '@splidejs/splide'
import type { PropType } from 'vue'
import type { ComponentConstructorCollection, SplideOptions, TransitionConstructor } from '@splidejs/splide'

const props = defineProps({
  items: {
    type: Array as PropType<Object[]>,
    default: () => [],
  },
  options: Object as PropType<SplideOptions>,
  extensions: Object as PropType<ComponentConstructorCollection>,
  transition: Object as PropType<TransitionConstructor>,
  modelValue: {
    type: Object as PropType<Object>,
  },
  showProgress: {
    type: Boolean,
    default: true,
  },
})

const emit = defineEmit(['update:modelValue'])

const items = ref<Object[]>([])
const splide = ref<Splide>()
const el = ref<HTMLElement>()
const updateModel = (index: number) => emit('update:modelValue', items.value[index] ?? ({}))

const init = () => {
  splide.value?.mount(props.extensions, props.transition)
  splide.value?.on('moved', updateModel)
}

const remount = () => nextTick(() => {
  splide.value?.destroy()
  init()
})

watch(() => props.items, (v) => {
  items.value = v
  remount()
  updateModel(0)
}, { immediate: true })

onMounted(() => {
  splide.value = new Splide(el.value!, props.options)
  init()
})
</script>
