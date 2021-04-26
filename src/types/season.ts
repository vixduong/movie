import { Expose, Type } from 'class-transformer';

export class Season {
  @Type(() => Date)
  @Expose({ name: 'air_date' })
  air_date: Date;
  @Expose({ name: 'episode_count' })
  episodeCount: number;
  id: number;
  name: string;
  overview: string;
  @Expose({ name: 'poster_path' })
  poster_path: string;
  @Expose({ name: 'season_number' })
  seasonNumber: number;
}