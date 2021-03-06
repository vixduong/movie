import { Expose } from 'class-transformer'

export class Language {
  @Expose({ name: 'iso_3166_1' })
  iso!: string

  @Expose({ name: 'english_name' })
  englishName!: string

  name: string
}
