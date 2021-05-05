import { ActionTree, GetterTree, Module, MutationTree } from 'vuex'
import { RootState } from '@/stores/root.interface'
import { http } from '@/api'
import { Trending, TrendingResponse } from '@/types/trending'
import { MediaType } from '@/types/media-type'
import { TimeWindow } from '@/types/time-window'

import * as TaskEither from 'fp-ts/TaskEither'
import { pipe } from 'fp-ts/function'
import { ImageResponse } from '@/types/image-response'
import { Image } from '@/types/image'
import { Video } from '@/types/video'
import { VideoResponse } from '@/types/video-response'

export interface State {
  data: TrendingResponse
  trend: Trending[]
  selected: Trending
}

export const state: State = {
  data: {} as TrendingResponse,
  trend: [] as Trending[],
  selected: {} as Trending,
}

export const mutations: MutationTree<State> = {
  get(state: State, payload: TrendingResponse) {
    state.data = payload
    state.trend = payload.results
    state.selected = state.trend && state.trend.length ? state.trend[0] : {} as Trending
  },
  images(state: State, payload: { backdrops: Image[]; posters: Image[] }) {
    !!state.selected && (state.selected.image = payload)
  },
  videos(state: State, payload: Video[]) {
    !!state.selected && (state.selected.videos = payload)
  },
  selected(state: State, payload: Trending) {
    state.selected = payload
  },
}

interface GetParam {
  mediaType?: MediaType
  time?: TimeWindow
}

export const actions: ActionTree<State, RootState> = {
  async get({ commit }, { mediaType = MediaType.ALL, time = TimeWindow.WEEK }: GetParam) {
    return pipe(
      http.useGet(`trending/${mediaType}/${time}`, TrendingResponse),
      TaskEither.map(data => commit('get', data)),
    )()
  },
  async media({ commit, state }) {
    if (!state.selected || !Object.entries(state.selected).length) return
    return pipe(
      http.useGet(state.selected.videoUrl, VideoResponse),
      TaskEither.map(data => commit('videos', data.results)),
      TaskEither.chain(() => http.useGet(state.selected.imageUrl, ImageResponse)),
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      TaskEither.map(({ id, ...other }) => commit('images', other)),
    )()
  },
  async selected({ commit }, payload: Trending) {
    commit('selected', payload)
  },
}

export const getters: GetterTree<State, RootState> = {
  trending: state => state.data?.results ?? [],
  one: state => state.data && state.data.results
    ? state.data.results[Math.floor(Math.random() * Math.floor(20))]
    : {},
  selected: state => state.selected,
}

export const store: Module<State, RootState> = {
  state,
  mutations,
  getters,
  actions,
  namespaced: true,
}
