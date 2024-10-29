import { Avatar } from '../Avatar'
import {
  BookContainer,
  BookCover,
  BookDetails,
  BookDescription,
  BookInfo,
  Container,
  Header,
  NameAndDate,
  Separator,
  UserInfo,
} from './styles'
import { StarsRating } from '../StarsRating'
import { useRouter } from 'next/router'
import { getDateFormattedAndRelative } from '@/utils/getFormattedDate'

interface ReviewCardProps {
  user_id: number
  name: string
  title: string
  author: string
  description: string
  rating: number
  cover_url: string
  avatar_url: string
  created_at: string
  onClick: () => void
}

export function ReviewCard({
  user_id,
  title,
  name,
  author,
  description,
  avatar_url,
  cover_url,
  created_at,
  rating,
  ...rest
}: ReviewCardProps) {
  const { dateFormatted, dateRelativeToNow, dateString } =
  getDateFormattedAndRelative(created_at)

  const router = useRouter()

  return (
    <Container>
      <Header>
        <UserInfo>
          <Avatar
            avatarUrl={avatar_url}
            onClick={() => {
              router.push(`/profile/${user_id}`)
            }}
          />
          <NameAndDate>
            <p>{name}</p>
            <time title={dateFormatted} dateTime={dateString}>
              {dateRelativeToNow}
            </time>
          </NameAndDate>
        </UserInfo>
        <StarsRating rating={rating} />
      </Header>
      <Separator />
      <BookContainer {...rest}>
        <BookCover src={cover_url} alt="" />
        <BookDetails>
          <BookInfo>
            <h2>{title}</h2>
            <p>{author}</p>
          </BookInfo>
          <Separator />
          <BookDescription>
            <p>{description}</p>
          </BookDescription>
        </BookDetails>
      </BookContainer>

      
    </Container>
  )
}
