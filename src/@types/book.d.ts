import { CategoryProps } from './category'
import { RatingProps } from './rating'

export interface BookProps {
  id: number
  title: string
  author: string
  created_at: Date
  summary: string
  cover_url: string
  pages_number: number
  publishing_year: number
  average_rating?: number
  total_ratings?: number
  categories: CategoryProps[]
  ratings: RatingProps[]
}
