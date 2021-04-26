import { Type } from 'class-transformer';
import { Image } from '@/types/image';
import { Video } from '@/types/video';

export class VideoResponse {
  id: number;
  @Type(() => Video)
  results: Video[];
}