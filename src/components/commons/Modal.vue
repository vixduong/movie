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
      class="bg-gray bg-opacity-30 inset-0 z-50 absolute flex h-screen flex-col"
    >
      <div class="relative w-full">
        <button
          aria-label="close modal"
          class="bg-gray rounded-full flex bg-opacity-10 h-8 top-4 right-4 w-8 z-60 absolute justify-center items-center focus:(outline-none ring-2 ring-red ring-opacity-20)"
          @click.prevent="toggleModal()"
        >
          <svg viewBox="0 0 24 24" class="h-6 stroke-red stroke-2 w-6">
            <path d="M6.34314575 6.34314575L17.6568542 17.6568542M6.34314575 17.6568542L17.6568542 6.34314575"></path>
          </svg>
        </button>
      </div>
      <slot></slot>
    </div>
  </Transition>
</template>
<script lang="ts">
import { computed, defineComponent, ref, watch } from 'vue'
import { useStore } from 'vuex'
import { useWindowSize } from '@vueuse/core'

export default defineComponent({
  setup() {
    const show = ref(false)
    const el = ref<HTMLElement>()

    const store = useStore()
    const modal = computed(() => store.getters['setting/activeModal'] as boolean)
    const toggleModal = () => store.dispatch('setting/toggleModal', {})
    watch(() => modal.value, v => show.value = v)

    const enterTransition = (_el: HTMLElement) => {
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
