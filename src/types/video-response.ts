import { Type } from 'class-transformer'
import { Video } from '@/types/video'

export class VideoResponse {
  id: number
  @Type(() => Video)
  results: Video[]
}
