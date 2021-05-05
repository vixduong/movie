import { Expose } from 'class-transformer'

export class Image {
  id: string
  @Expose({ name: 'iso_639_1' })
  iso639: string

  @Expose({ name: 'iso_3166_1' })
  iso3166!: string

  @Expose({ name: 'english_name' })
  englishName!: string

  key: string
  name: string
  site: string
  size: number
  type: string
  @Expose({ name: 'vote_average' })
  voteAverage: string

  @Expose({ name: 'vote_count' })
  voteCount: string

  @Expose({ name: 'aspect_ratio' })
  aspectRatio: number

  @Expose({ name: 'file_path' })
  filePath!: string

  height: number
  width: number
}
