import { Company } from '@/types/company'
import { Country } from '@/types/country'
import { Language } from '@/types/language'
import { Genre } from '@/types/genre'
import { Expose, Type } from 'class-transformer'
import { Season } from '@/types/season'

export class Detail {
  adult: boolean
  @Expose({ name: 'backdrop_path' })
  backdropPath: string

  @Expose({ name: 'belongs_to_collection' })
  belongsToCollection: null

  budget: number
  @Type(() => Genre)
  genres: Genre[]

  homepage: string
  id: number
  @Expose({ name: 'imdb_id' })
  imdbId: string

  @Expose({ name: 'original_language' })
  originalLanguage: string

  @Expose({ name: 'original_title' })
  originalTitle: string

  overview: string
  popularity: number
  @Expose({ name: 'poster_path' })
  posterPath: string

  @Type(() => Company)
  @Expose({ name: 'production_companies' })
  productionCompanies: Company[]

  @Type(() => Country)
  @Expose({ name: 'production_countries' })
  productionCountries: Country[]

  @Type(() => Country)
  networks: Country[]

  @Type(() => Date)
  @Expose({ name: 'release_date' })
  releaseDate: Date

  revenue: number
  runtime: number
  @Type(() => Language)
  @Expose({ name: 'spoken_languages' })
  spokenLanguages: Language[]

  status: string
  tagline: string
  title: string
  video: boolean
  @Expose({ name: 'vote_average' })
  voteAverage: number

  @Expose({ name: 'vote_count' })
  voteCount: number

  @Type(() => Season)
  seasons: Season[]
}
