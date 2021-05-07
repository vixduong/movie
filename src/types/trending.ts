import { Video } from '@/types/video'
import { Image } from '@/types/image'
import { MediaType } from '@/types/media-type'
import { Pagination } from '@/types/pagination'
import { Expose, Type } from 'class-transformer'

export class Trending {
  video?: boolean
  @Expose({ name: 'vote_average' })
  voteAverage: number

  overview: string
  @Type(() => Date)
  @Expose({ name: 'release_date' })
  releaseDate?: Date

  title?: string
  adult?: boolean
  @Expose({ name: 'backdrop_path' })
  backdropPath: string

  id: number
  @Expose({ name: 'genre_ids' })
  genreIds: number[]

  @Expose({ name: 'vote_count' })
  voteCount: number

  @Expose({ name: 'original_language' })
  originalLanguage: string

  @Expose({ name: 'original_title' })
  originalTitle?: string

  @Expose({ name: 'poster_path' })
  posterPath: string

  popularity: number
  @Expose({ name: 'media_type' })
  mediaType: MediaType

  @Expose({ name: 'original_name' })
  originalName?: string

  @Expose({ name: 'origin_country' })
  originCountry?: string[]

  name?: string
  @Expose({ name: 'first_air_date' })
  firstAirDate?: Date

  @Type(() => Video)
  videos: Video[] = []

  image: { backdrops: Image[]; posters: Image[] } = { backdrops: [], posters: [] }

  public get show() {
    return this.name ? this.name : (this.originalTitle ? this.originalTitle : this.originalName)
  }

  public get videoUrl() {
    return `${this.mediaType}/${this.id}/videos`
  }

  public get imageUrl() {
    return `${this.mediaType}/${this.id}/images`
  }

  public takeBackdropImages(take: number) {
    return this.image?.backdrops ? this.image.backdrops.slice(0, take) : [] as Image[]
  }
}

export class TrendingResponse extends Pagination {
  @Type(() => Trending)
  results: Trending[]
}
