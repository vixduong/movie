<template>
  <div position="top-0 z-30 fixed" w="full" transition="all">
    <header text="white align-middle" p="y-4 x-10" justify="between" class="flex">
      <div title="menu icon " role="button" @click.prevent="toggleNavigation">
        <svg id="stats" viewBox="0 0 24 24" h="8" svg="stroke-white stroke-2" w="8">
          <path d="M6 7L15 7M6 12L18 12M6 17L12 17" />
        </svg>
      </div>
      <div flex="1">
        <div h="full" justify="center" align="items-center" class="flex">
          <span font="bold leading-3" text="uppercase">__CINEMA</span>
        </div>
      </div>
      <div>3</div>
    </header>
  </div>
</template>
<script lang="ts">
import { useStore } from 'vuex'
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const store = useStore()
    const toggleNavigation = () => store.dispatch('setting/toggleNavigation', {})

    return {
      toggleNavigation,
    }
  },
})
</script>
