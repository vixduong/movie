import { Video } from '@/types/video'
import { Type } from 'class-transformer'

export class VideoResponse {
  id: number
  @Type(() => Video)
  results: Video[]
}
