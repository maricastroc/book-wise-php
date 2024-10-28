import { UserProps } from './user'

export interface RatingProps {
  id: string
  rate: number
  description: string
  user: UserProps
}
