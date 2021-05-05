import { createLogger, createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import { store as configuration } from '@/stores/modules/configuration'
import { store as country } from '@/stores/modules/country'
import { store as certification } from '@/stores/modules/certification'
import { store as trending } from '@/stores/modules/trending'
import { store as movie } from '@/stores/modules/movie'
import { store as tv } from '@/stores/modules/tv'
import { store as setting } from '@/stores/modules/setting'

// @ts-ignore
const debug = process.env.NODE_ENV !== 'production'
const plugins = debug ? [createLogger({})] : [createPersistedState({ storage: window.sessionStorage })]

export const store = createStore({
  plugins,
  devtools: debug,
  modules: {
    setting,
    configuration,
    country,
    certification,
    trending,
    movie,
    tv,
  },
})
