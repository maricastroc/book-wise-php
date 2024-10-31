import { BookProps } from '@/@types/book'
import { StarsRating } from '../StarsRating'
import {
  BookCover,
  BookData,
  BookInfo,
  Container,
  InfosContainer,
} from './styles'

interface ExploreCardProps {
  book: BookProps
  onClick: () => void
}

export function ExploreCard({ book, ...rest }: ExploreCardProps) {
  return (
    <Container {...rest}>
      <BookCover alt="" src={book.cover_url} />
      <BookInfo>
        <BookData>
          <h2>{book.title}</h2>
          <p>{book.author}</p>
        </BookData>
        <InfosContainer>
          <p>{`(${book.total_ratings ?? 0} ratings)`}</p>
          <StarsRating rating={book.average_rating ?? 0} />
        </InfosContainer>
      </BookInfo>
    </Container>
  )
}
