import { http } from '@/api'
import { Country } from '@/types/country'
import { RootState } from '@/stores/root.interface'
import { ActionTree, GetterTree, Module, MutationTree } from 'vuex'

export interface State {
  data: Country[]
}

export const state: State = {
  data: [] as Country[],
}

export const mutations: MutationTree<State> = {
  get(state: State, payload: Country[]) {
    state.data = payload
  },
}

export const actions: ActionTree<State, RootState> = {
  async get({ commit }) {
    const config = await http.get('configuration/countries', Country)
    commit('get', config)
  },
}

export const getters: GetterTree<State, RootState> = {
  contries: state => state.data,
}

export const store: Module<State, RootState> = {
  state,
  mutations,
  getters,
  actions,
  namespaced: true,
}
