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

interface Category {
  id: string
  name: string
}

interface BookCardProps {
  name: string
  author: string
  cover_url: string
  total_pages: number
  categories: Category[]
}

export function BookCard({
  name,
  author,
  cover_url,
  total_pages,
}: BookCardProps) {
  const categoryNames = categories?.map((category) => category?.name)

  return (
    <BookContainer>
      <BookContent>
        <BookCover alt="" src={cover_url} />
        <BookInfo>
          <BookData>
            <h2>{name}</h2>
            <p>{author}</p>
          </BookData>
          <RatingContainer>
            <StarsRating rating={3} />
            <p>
              <span>{3}</span> {''}
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
            <h2>{total_pages}</h2>
          </ItemText>
        </FooterItem>
      </Footer>
    </BookContainer>
  )
}
