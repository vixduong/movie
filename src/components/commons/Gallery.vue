<template>
  <div class="relative">
    <div class="splide" ref="el">
      <div class="splide__track">
        <ul class="splide__list">
          <li class="splide__slide" v-for="(item, key) of items" :key="key">
            <slot v-bind:item="item" v-bind:index="key"></slot>
          </li>
        </ul>
      </div>
      <div class="splide__progress absolute inset-0" v-if="showProgress">
        <div class="splide__progress__bar"></div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, nextTick, onMounted, PropType, ref, watch } from 'vue';
import Splide, { ComponentConstructorCollection, SplideOptions, TransitionConstructor } from '@splidejs/splide';

export default defineComponent({
  setup(props, { emit }) {
    const items = ref<Object[]>([]);
    const splide = ref<Splide>();
    const el = ref<HTMLElement>();
    const updateModel = (index: number) => emit('update:modelValue', items.value[index] ?? ({}));

    const init = () => {
      splide.value?.mount(props.extensions, props.transition);
      splide.value?.on('moved', updateModel)
    };

    const remount = () => nextTick(() => {
      splide.value?.destroy();
      init();
    });

    watch(() => props.items, v => {
      items.value = v;
      remount();
      updateModel(0);
    }, { immediate: true });

    onMounted(() => {
      splide.value = new Splide(el.value!, props.options);
      init();
    });

    return { el };
  },
  props: {
    items: {
      type: Array as PropType<Object[]>,
      default: () => []
    },
    options: Object as PropType<SplideOptions>,
    extensions: Object as PropType<ComponentConstructorCollection>,
    transition: Object as PropType<TransitionConstructor>,
    modelValue: {
      type: Object as PropType<Object>,
    },
    showProgress: {
      type: Boolean,
      default: true
    }
  },
  emits: ['update:modelValue'],
});
</script>

