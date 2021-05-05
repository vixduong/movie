import { Expose, Type } from 'class-transformer'

export enum Size {
  'w45' = 'w45', 'w92' = 'w92',
  'w154' = 'w154', 'w185' = 'w185',
  'w300' = 'w300', 'w500' = 'w500',
  'w780' = 'w780', 'w1280' = 'w1280',
  'original' = 'original'
}

export class ImageConfig {
  @Expose({ name: 'base_url' })
  baseUrl: string

  @Expose({ name: 'secure_base_url' })
  secureBaseUrl: string

  @Expose({ name: 'backdrop_sizes' })
  backdropSizes: Array<Size>

  @Expose({ name: 'logo_sizes' })
  logoSizes: Array<Size>

  @Expose({ name: 'poster_sizes' })
  posterSizes: Array<Size>

  @Expose({ name: 'profile_sizes' })
  profileSizes: Array<Size>

  @Expose({ name: 'still_sizes' })
  stillSizes: Array<Size>
}
export class Configuration {
  @Type(() => ImageConfig)
  images!: ImageConfig

  @Expose({ name: 'change_keys' })
  changeKeys!: Array<string>
}
