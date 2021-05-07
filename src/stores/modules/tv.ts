import { http } from '@/api'
import { Detail } from '@/types/detail'
import { TvResponse } from '@/types/tv-response'
import { RootState } from '@/stores/root.interface'
import { ActionTree, GetterTree, Module, MutationTree } from 'vuex'

export interface State {
  tv: Detail
  popular: TvResponse
}

export const state: State = {
  tv: {} as Detail,
  popular: {} as TvResponse,
}

export const mutations: MutationTree<State> = {
  selected(state: State, payload: Detail) {
    state.tv = payload
  },
  popular(state: State, payload: TvResponse) {
    state.popular = payload
  },
}

interface GetMovieParam {
  tvId: number
}

interface GetPopularParam {
  language: string
  page: number
}

export const actions: ActionTree<State, RootState> = {
  async get({ commit }, { tvId }: GetMovieParam) {
    const movie = await http.get(`tv/${tvId}`, Detail)
    commit('selected', movie)
  },
  async popular({ commit }, { language = 'en-US', page = 1 }: GetPopularParam) {
    const popular = await http.get('tv/popular', TvResponse, { language, page })
    commit('popular', popular)
  },
}

export const getters: GetterTree<State, RootState> = {
  tv: state => state.tv,
  popular: state => state.popular,
}

export const store: Module<State, RootState> = {
  state,
  mutations,
  getters,
  actions,
  namespaced: true,
}
