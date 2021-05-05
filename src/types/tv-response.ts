import { Pagination } from '@/types/pagination'
import { Type } from 'class-transformer'
import { Detail } from '@/types/detail'

export class TvResponse extends Pagination {
  @Type(() => Detail)
  results: Detail[]
}
