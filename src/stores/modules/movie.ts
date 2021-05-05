import { ActionTree, GetterTree, Module, MutationTree } from 'vuex'
import { RootState } from '@/stores/root.interface'
import { http } from '@/api'
import { Detail } from '@/types/detail'
import { MovieResponse } from '@/types/movie-response'

export interface State {
  movie: Detail
  popular: MovieResponse
}

export const state: State = {
  movie: {} as Detail,
  popular: {} as MovieResponse,
}

export const mutations: MutationTree<State> = {
  selected(state: State, payload: Detail) {
    state.movie = payload
  },
  popular(state: State, payload: MovieResponse) {
    state.popular = payload
  },
}

interface GetMovieParam {
  movieId: number
}

interface GetPopularParam {
  language: string
  page: number
  region: string
}

export const actions: ActionTree<State, RootState> = {
  async get({ commit }, { movieId }: GetMovieParam) {
    const movie = await http.get(`movie/${movieId}`, Detail)
    commit('selected', movie)
  },
  async popular({ commit }, { language = 'en-US', page = 1, region = 'US' }: GetPopularParam) {
    const popular = await http.get('movie/popular', MovieResponse, { language, page, region })
    commit('popular', popular)
  },
}

export const getters: GetterTree<State, RootState> = {
  movie: state => state.movie,
  popular: state => state.popular,
}

export const store: Module<State, RootState> = {
  state,
  mutations,
  getters,
  actions,
  namespaced: true,
}
