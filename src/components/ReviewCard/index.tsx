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

interface ReviewCardProps {
  user_id: string
  name: string
  title: string
  author: string
  description: string
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
  ...rest
}: ReviewCardProps) {
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
            <time>7 minutes ago</time>
          </NameAndDate>
        </UserInfo>
        <StarsRating rating={3} />
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
