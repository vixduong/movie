import { Image } from '@/types/image'
import { Type } from 'class-transformer'

export class ImageResponse {
  id: number
  @Type(() => Image)
  backdrops: Image[]

  @Type(() => Image)
  posters: Image[]
}
