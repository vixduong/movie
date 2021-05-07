import { RootState } from '@/stores/root.interface'
import { ActionTree, GetterTree, Module, MutationTree } from 'vuex'

export interface State {
  activeNavigation: Boolean
  activeModal: Boolean
  union: Number
}

export const state: State = {
  activeNavigation: false,
  activeModal: false,
  union: 0,
}

export const mutations: MutationTree<State> = {
  navigation(state: State, stateNavi: Boolean) {
    state.activeNavigation = stateNavi
  },
  modal(state: State, stateModal: Boolean) {
    state.activeModal = stateModal
  },
  union(state: State) {
    state.union = Math.random()
  },
}

export const actions: ActionTree<State, RootState> = {
  async toggleNavigation({ commit, state }) {
    commit('navigation', !state.activeNavigation)
  },
  async toggleModal({ commit, state }) {
    commit('modal', !state.activeModal)
  },
  async union({ commit }) {
    commit('union')
  },
}

export const getters: GetterTree<State, RootState> = {
  activeNavigation: state => state.activeNavigation,
  activeModal: state => state.activeModal,
  union: state => state.union,
}

export const store: Module<State, RootState> = {
  state,
  mutations,
  getters,
  actions,
  namespaced: true,
}
