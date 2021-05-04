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
      position="inset-0 z-50 absolute"
      overflow="-sm:y-scroll"
    >
      <ul
        class="flex flex-col h-screen max-w--max space-y-5 py-16 pl-20 overflow-y-scroll scrollbar-hide"
      >
        <li
          v-for="(link, i) in routers"
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

<script lang="ts" setup>
import { computed, ref, watch } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

const routers = ref<Array<{ href: string; name: string }>>([
  { href: '/', name: 'Home' },
  { href: 'films', name: 'films' },
  { href: 'serials', name: 'serials' },
  { href: 'tv', name: 'tv' },
  { href: 'search', name: 'search' },
  { href: 'blog', name: 'blog' },
  { href: 'subscriptions', name: 'subscriptions' },
  { href: 'contacts', name: 'contacts' },
  { href: 'shop', name: 'shop' },
  { href: 'help-center', name: 'help center' },
])

const store = useStore()
const navigation = computed(() => store.getters['setting/activeNavigation'] as boolean)
const toggleNavigation = () => store.dispatch('setting/toggleNavigation', {})
const stateNavigation = ref(false)
watch(() => navigation.value, v => stateNavigation.value = v)

const route = useRoute()

watch(() => route.path, (o, n) => stateNavigation.value = !stateNavigation.value && o !== n)
</script>

<style lang="scss" scoped>
.link__item:hover span {
  @apply bg-current -translate-x-20;
}
</style>
