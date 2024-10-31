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

interface UserRatingProps {
  book: BookProps
  rating: RatingProps
}

export function UserRatingCard({ book, rating }: UserRatingProps) {
  console.log(book)
  return (
    <Wrapper>
      <Heading></Heading>
      <Container>
        <BookContainer>
          <BookDetails>
            <BookData>
              <BookCover src={`../${book.cover_url}`} alt="" />
              <BookInfo>
                <BookInfoText>
                  <h2>{`${book.title} (${book.publishing_year})`}</h2>
                  <p>{book.author}</p>
                </BookInfoText>
                <StarsRating rating={rating.rate} />
              </BookInfo>
            </BookData>
            <Separator />
            <BookDescription>
              <p>{rating.review}</p>
            </BookDescription>
          </BookDetails>
        </BookContainer>
      </Container>
    </Wrapper>
  )
}
