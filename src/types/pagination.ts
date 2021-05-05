import { Expose } from 'class-transformer'

export abstract class Pagination {
  page: number
  @Expose({ name: 'total_pages' })
  totalPages: number

  @Expose({ name: 'total_results' })
  totalResults: number
}
