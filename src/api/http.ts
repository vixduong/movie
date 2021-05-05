import ky from 'ky'
import * as Either from 'fp-ts/Either'
import * as TaskEither from 'fp-ts/TaskEither'

import { plainToClass } from 'class-transformer'
import { pipe } from 'fp-ts/function'

// const API_KEY = '47006fbffaf9eb3b1797f3d78a8a6322'
const TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NzAwNmZiZmZhZjllYjNiMTc5N2YzZDc4YThhNjMyMiIsInN1YiI6IjVjYjc0M2RkOTI1MTQxMDhjYmY1ZDMzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HNtGTdRtwxj1ZuJwKdB5LeLY81LRO9Cnhh0CF1b4Ltk'

type Constructor<T> = new (...args: any[]) => T

const root = ky.create({
  prefixUrl: 'https://api.themoviedb.org/3',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
    'Authorization': `Bearer ${TOKEN}`,
  },
})

export const get = <R>(
  url: string,
  responseType: Constructor<R>,
  searchParams: Record<string, any> = {},
) => root
  .get(url, { searchParams: { ...searchParams } })
  .json()
  .then(
    json => plainToClass(responseType, json),
    console.error,
  )

export const useGet = <R>(
  url: string,
  responseType: Constructor<R>,
  searchParams: Record<string, any> = {},
) => pipe(
  TaskEither.tryCatch(
    () => root.get(url, { searchParams: { ...searchParams } }).json(),
    Either.toError,
  ),
  TaskEither.map(json => plainToClass(responseType, json)),
)
