import { BookProps } from './book'
import { UserProps } from './user'

export interface RatingProps {
  id: number
  rate: number
  review: string
  user: UserProps
  user_id: number
  book_id: number
  book: BookProps
  created_at: string
}
