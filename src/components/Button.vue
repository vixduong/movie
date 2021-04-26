<template>
  <button :class="['ripple']" ref="btnRef">
    <slot></slot>
  </button>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
  setup() {
    const btnRef = ref<HTMLElement>()
    const createRipple = (event: MouseEvent) => {
      const button = event.target as HTMLElement;
      const circle = document.createElement('span');
      const diameter = Math.max(button.clientWidth, button.clientHeight);
      const radius = diameter / 2;

      circle.style.width = circle.style.height = `${diameter}px`;
      circle.style.left = `${event.clientX - (button.offsetLeft + radius)}px`;
      circle.style.top = `${event.clientY - (button.offsetTop + radius)}px`;
      circle.classList.add('ripple');
      button.appendChild(circle)

      // setTimeout(() => {
      //   button.querySelectorAll('span.ripple').forEach(ripple => ripple.remove())
      // }, 500);
    };

    onMounted(() => {
      btnRef.value?.addEventListener("click", createRipple)
    })

    return {
      btnRef,
    };
  },
  emits: ['click']
});
</script>
