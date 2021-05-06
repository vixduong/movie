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
      bg="gray opacity-90"
      h="screen"
      w="screen"
      position="inset-0 absolute"
      z="50"
      class="-sm:overflow-y-scroll"
    >
      <ul flex="~ col" w="max-max" space="y-5" p="y-16 l-20">
        <li
          v-for="(link, i) in links"
          :key="i"
          text="black 2xl opacity-80 lowercase sm:4xl hover:white"
          position="relative"
          class="link__item"
        >
          <RouterLink :to="link?.href ?? '#'" active-class="text-white">
            {{ link?.name }}
          </RouterLink>
          <span
            bg="gradient-to-r"
            gradient="from-black to-white"
            h="1"
            transition="transform"
            position="inset-0 top-1/2 absolute"
            w="18"
            transform="translate-y-1/2 -translate-x-40"
            class="flex transform"
          />
        </li>
      </ul>

      <button
        aria-label="close a nav"
        h="8"
        position="top-4 right-4 absolute"
        w="8"
        bg="opacity-20"
        class="focus:(outline-none)"
        @click.prevent="toggleNavigation()"
      >
        <svg viewBox="0 0 24 24" svg="stroke-white stroke-2">
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
