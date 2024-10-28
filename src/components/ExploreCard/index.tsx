import { StarsRating } from '../StarsRating'
import { BookCover, BookData, BookInfo, Container } from './styles'

interface ExploreCardProps {
  cover_url: string
  name: string
  author: string
  onClick: () => void
}

export function ExploreCard({
  cover_url,
  name,
  author,
  ...rest
}: ExploreCardProps) {
  return (
    <Container {...rest}>
      <BookCover alt="" src={cover_url} />
      <BookInfo>
        <BookData>
          <h2>{name}</h2>
          <p>{author}</p>
        </BookData>
        <StarsRating rating={3} />
      </BookInfo>
    </Container>
  )
}
