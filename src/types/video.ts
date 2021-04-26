export const SITE_YT = 'YOUTUBE'
export const SITE_VIMEO = 'VIMEO'

export class Video {
  id: string;
  iso_639_1: string;
  iso_3166_1: string;
  key: string;
  name: string;
  site: string;
  size: number;
  type: string;
}