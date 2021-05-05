import { Type } from 'class-transformer'
import { Image } from '@/types/image'

export class ImageResponse {
  id: number
  @Type(() => Image)
  backdrops: Image[]

  @Type(() => Image)
  posters: Image[]
}
