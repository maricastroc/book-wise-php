import { BookProps } from '@/@types/book'
import { StarsRating } from '../StarsRating'
import { BookCover, BookData, BookInfo, Container } from './styles'

interface PopularBookCardProps {
  book: BookProps
  onClick: () => void
}

export function PopularBookCard({ book, ...rest }: PopularBookCardProps) {
  return (
    <Container {...rest}>
      <BookCover src={book.cover_url} />
      <BookInfo>
        <BookData>
          <h2>{book.name}</h2>
          <p>{book.author}</p>
        </BookData>
        <StarsRating rating={3} />
      </BookInfo>
    </Container>
  )
}
