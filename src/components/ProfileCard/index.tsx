import {
  BookContainer,
  BookCover,
  BookDetails,
  BookDescription,
  BookInfo,
  Container,
  Separator,
  Heading,
  Wrapper,
  BookInfoText,
  BookData,
} from './styles'
import { StarsRating } from '../StarsRating'
import { BookProps } from '@/@types/book'
import { RatingProps } from '@/@types/rating'

interface ProfileCardProps {
  book: BookProps
  rating: RatingProps
}

export function ProfileCard({ book, rating }: ProfileCardProps) {
  return (
    <Wrapper>
      <Heading></Heading>
      <Container>
        <BookContainer>
          <BookDetails>
            <BookData>
              <BookCover src={book.cover_url} alt="" />
              <BookInfo>
                <BookInfoText>
                  <h2>{book.name}</h2>
                  <p>{book.author}</p>
                </BookInfoText>
                <StarsRating rating={rating.rate} />
              </BookInfo>
            </BookData>
            <Separator />
            <BookDescription>
              <p>{rating.description}</p>
            </BookDescription>
          </BookDetails>
        </BookContainer>
      </Container>
    </Wrapper>
  )
}
