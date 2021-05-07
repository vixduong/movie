import { http } from '@/api'
import { RootState } from '@/stores/root.interface'
import { Configuration } from '@/types/configuration'
import { ActionTree, GetterTree, Module, MutationTree } from 'vuex'

export interface State {
  data: Configuration
}

export const state: State = {
  data: {} as Configuration,
}

export const mutations: MutationTree<State> = {
  get(state: State, payload: Configuration) {
    state.data = payload
  },
}

export const actions: ActionTree<State, RootState> = {
  async get({ commit }) {
    const config = await http.get('configuration', Configuration)
    commit('get', config)
  },
}

export const getters: GetterTree<State, RootState> = {
  config: state => state.data,
}

export const store: Module<State, RootState> = {
  state,
  mutations,
  getters,
  actions,
  namespaced: true,
}
