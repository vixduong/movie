import { Detail } from '@/types/detail'
import { Type } from 'class-transformer'
import { Pagination } from '@/types/pagination'

export class TvResponse extends Pagination {
  @Type(() => Detail)
  results: Detail[]
}
