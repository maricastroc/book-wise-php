import { CategoryProps } from './category'
import { RatingProps } from './rating'

export interface BookProps {
  id: string
  name: string
  author: string
  created_at: Date
  summary: string
  cover_url: string
  total_pages: number
  categories: CategoryProps[]
  ratings: RatingProps[]
}
