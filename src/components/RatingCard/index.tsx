import { Avatar } from '../Avatar'
import {
  BookContainer,
  BookCover,
  BookDetails,
  BookInfo,
  Container,
  Header,
  NameAndDate,
  Separator,
  UserInfo,
  ReviewContainer,
} from './styles'
import { StarsRating } from '../StarsRating'
import { useRouter } from 'next/router'
import { getDateFormattedAndRelative } from '@/utils/getFormattedDate'
import { RatingProps } from '@/@types/rating'
import { UserProps } from '@/@types/user'
import { BookProps } from '@/@types/book'

interface RatingCardProps {
  rating: RatingProps
  user: UserProps
  book: BookProps
  onClick: () => void
}

export function RatingCard({
  book,
  user,
  rating,
  ...rest
}: RatingCardProps) {
  const { dateFormatted, dateRelativeToNow, dateString } =
  getDateFormattedAndRelative(rating.created_at)

  const router = useRouter()

  return (
    <Container>
      <Header>
        <UserInfo>
          <Avatar
            avatarUrl={user.avatar_url}
            onClick={() => {
              router.push(`/profile/${user.id}`)
            }}
          />
          <NameAndDate>
            <p>{user.name}</p>
            <time title={dateFormatted} dateTime={dateString}>
              {dateRelativeToNow}
            </time>
          </NameAndDate>
        </UserInfo>
        <StarsRating rating={rating.rate} />
      </Header>
      <Separator />
      <BookContainer {...rest}>
        <BookCover src={book.cover_url} alt="" />
        <BookDetails>
          <BookInfo>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
          </BookInfo>
          <Separator />
          <ReviewContainer>
            <p>{rating.review}</p>
          </ReviewContainer>
        </BookDetails>
      </BookContainer>

      
    </Container>
  )
}
