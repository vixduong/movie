<template>
  <Transition
    enter-active-class="transform-gpu transition ease-in-out duration-500"
    leave-active-class="transform-gpu transition ease-in-out duration-500"
    enter-from-class="-translate-x-full"
    enter-to-class="translate-x-0"
    leave-from-class="translate-x-0"
    leave-to-class="-translate-x-full"
  >
    <nav
      v-if="stateNavigation"
      class="bg-gray h-screen bg-opacity-90 w-screen inset-0 z-50 absolute -sm:overflow-y-scroll"
    >
      <ul class="flex flex-col max-w-max space-y-5 py-16 pl-20">
        <li
          v-for="(link, i) in links"
          :key="i"
          class="text-black text-2xl text-opacity-80 relative link__item lowercase sm:text-4xl hover:(text-white)"
        >
          <RouterLink :to="link?.href ?? '#'" active-class="text-white">
            {{ link?.name }}
          </RouterLink>
          <span
            class="bg-gradient-to-r from-black to-white flex h-1 transform transition-transform inset-0 top-1/2 w-18 translate-y-1/2 -translate-x-40 absolute"
          />
        </li>
      </ul>

      <button
        aria-label="close a nav"
        class="h-8 top-4 right-4 w-8 absolute hover:(bg-white bg-opacity-20 rounded-full) focus:(outline-none)"
        @click.prevent="toggleNavigation()"
      >
        <svg viewBox="0 0 24 24" class="stroke-white stroke-2">
          <path
            d="M6.34314575 6.34314575L17.6568542 17.6568542M6.34314575 17.6568542L17.6568542 6.34314575"
          />
        </svg>
      </button>
    </nav>
  </Transition>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

export default defineComponent({
  setup() {
    const links = ref<Array<{ href: string; name: string }>>([
      { href: 'favourites', name: 'Favourites' },
      { href: 'history', name: 'Browser history' },
      { href: 'setting', name: 'Settings' },
      { href: 'purchase', name: 'Purchase' },
      { href: 'sign-out', name: 'Sign out' },
    ])

    const store = useStore()
    const navigation = computed(() => store.getters['setting/activeNavigation'] as boolean)
    const toggleNavigation = () => store.dispatch('setting/toggleNavigation', {})
    const stateNavigation = ref(false)
    watch(() => navigation.value, v => stateNavigation.value = v)

    const route = useRoute()

    watch(() => route.path, (o, n) => stateNavigation.value = !stateNavigation.value && o !== n)

    return {
      links,
      stateNavigation,
      toggleNavigation,
    }
  },
})

</script>

<style lang="scss" scoped>
.link__item:hover span {
  //@apply bg-current -translate-x-20
}
</style>
