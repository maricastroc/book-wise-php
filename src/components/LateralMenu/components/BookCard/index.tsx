import { StarsRating } from '@/components/StarsRating'
import {
  BookContainer,
  BookContent,
  BookCover,
  BookData,
  BookInfo,
  Footer,
  FooterItem,
  ItemText,
  RatingContainer,
  Separator,
} from './styles'
import { BookOpen, BookmarkSimple } from 'phosphor-react'
import { categories } from '@/data/categories'
import { BookProps } from '@/@types/book'

interface Category {
  id: string
  name: string
}

export function BookCard({ book }: { book: BookProps }) {
  const { title, author, cover_url, pages_number, average_rating, total_ratings } = book;

  const categoryNames = book.categories?.map((category) => category?.name)

  return (
    <BookContainer>
      <BookContent>
        <BookCover alt="" src={cover_url} />
        <BookInfo>
          <BookData>
            <h2>{title}</h2>
            <p>{author}</p>
          </BookData>
          <RatingContainer>
            <StarsRating rating={average_rating ?? 0} />
            <p>
              <span>{total_ratings}</span> {''}
              {'ratings'}
            </p>
          </RatingContainer>
        </BookInfo>
      </BookContent>
      <Separator />
      <Footer>
        <FooterItem>
          <BookmarkSimple />
          {categories && (
            <ItemText>
              <p>Category</p>
              <h2>{categoryNames.join(', ')}</h2>
            </ItemText>
          )}
        </FooterItem>
        <FooterItem>
          <BookOpen />
          <ItemText>
            <p>Pages</p>
            <h2>{pages_number}</h2>
          </ItemText>
        </FooterItem>
      </Footer>
    </BookContainer>
  )
}
