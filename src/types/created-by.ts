import { Expose } from 'class-transformer'

export class CreatedBy {
  id: number
  @Expose({ name: 'vote_count' })
  creditId: string

  name: string
  gender: number
  @Expose({ name: 'vote_count' })
  profilePath: string
}
