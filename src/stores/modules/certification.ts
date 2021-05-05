import { ActionTree, GetterTree, Module, MutationTree } from 'vuex'
import { RootState } from '@/stores/root.interface'
import { http } from '@/api'
import { Certification } from '@/types/certification'

export interface State {
  movie: Certification
  tv: Certification
}

export const state: State = {
  movie: {} as Certification,
  tv: {} as Certification,
}

export const mutations: MutationTree<State> = {
  setMovie(state: State, payload: Certification) {
    state.movie = payload
  },
  setTv(state: State, payload: Certification) {
    state.tv = payload
  },
}

export const actions: ActionTree<State, RootState> = {
  async getMovie({ commit }) {
    const movie = await http.get('certification/movie/list', Certification)
    commit('setMovie', movie)
  },
  async getTv({ commit }) {
    const tv = await http.get('certification/tv/list', Certification)
    commit('setTv', tv)
  },
  log: ({ state }) => console.log(state.movie),
}

export const getters: GetterTree<State, RootState> = {
  move: state => state.movie,
  tv: state => state.tv,
}

export const store: Module<State, RootState> = {
  state,
  mutations,
  getters,
  actions,
  namespaced: true,
}
