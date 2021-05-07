<template>
  <Transition
    enter-active-class="transform-gpu transition ease-in-out duration-500"
    leave-active-class="transform-gpu transition ease-in-out duration-500"
    enter-from-class="-translate-y-full"
    enter-to-class="translate-y-0"
    leave-from-class="translate-y-0"
    leave-to-class="-translate-y-full"
    @before-enter="enterTransition"
  >
    <div
      v-if="show"
      ref="el"
      bg="gray opacity-30"
      position="inset-0 absolute"
      z="50"
      h="screen"
      flex="col"
      class="flex"
    >
      <div position="relative" w="full">
        <button
          aria-label="close modal"
          bg="gray opacity-10"
          border="rounded-full"
          h="8"
          position="top-4 right-4 absolute"
          w="8"
          z="60"
          justify="center"
          align="items-center"
          ring="2 red"
          class="flex"
          @click.prevent="toggleModal()"
        >
          <svg viewBox="0 0 24 24" h="6" svg="stroke-red stroke-2" w="6">
            <path d="M6.34314575 6.34314575L17.6568542 17.6568542M6.34314575 17.6568542L17.6568542 6.34314575"></path>
          </svg>
        </button>
      </div>
      <slot></slot>
    </div>
  </Transition>
</template>
<script lang="ts">
import { useStore } from 'vuex'
import { computed, defineComponent, ref, watch } from 'vue'

export default defineComponent({
  setup() {
    const show = ref(false)
    const el = ref<HTMLElement>()

    const store = useStore()
    const modal = computed(() => store.getters['setting/activeModal'] as boolean)
    const toggleModal = () => store.dispatch('setting/toggleModal', {})
    watch(() => modal.value, v => show.value = v)

    const enterTransition = (_el: Element) => {
      _el.addEventListener('click', (e) => {
        el.value === e.target && toggleModal()
      })
    }

    return {
      show,
      el,
      enterTransition,
      toggleModal,
    }
  },
})
</script>
