import { MobileHeader } from '@/components/MobileHeader'
import {
  Container,
  Heading,
  HomeContainer,
  HomeContent,
  PopularBooksCardsContainer,
  PopularBooksCardsContent,
  PopularBooksTitle,
  LastRatingsWrapper,
  LastRatingsContainer,
  LastRatingsContent,
  LastRatingsTitle,
} from './styles'
import { CaretRight, ChartLineUp } from 'phosphor-react'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import { useState } from 'react'

import { PopularBookCard } from '@/components/PopularBookCard'
import { LateralMenu } from '@/components/LateralMenu'
import { Sidebar } from '@/components/Sidebar'
import { RatingCard } from '@/components/RatingCard'
import { SkeletonRatingCard } from '@/components/SkeletonRatingCard'
import { SkeletonPopularBook } from '@/components/SkeletonPopularBook'

import { BookProps } from '@/@types/book'
import { useScreenSize } from '@/utils/useScreenSize'
import { useFetchPopularBooks } from '@/utils/useFetchPopularBooks'
import { useFetchLatestRatings } from '@/utils/useFetchLatestRatings'

export default function Home() {
  const [selectedBook, setSelectedBook] = useState<BookProps | null>(null)

  const [isLateralMenuOpen, setIsLateralMenuOpen] = useState(false)

  const router = useRouter()

  const isMobile = useScreenSize(768)

  const { isPopularBooksRequestLoading, popularBooks } = useFetchPopularBooks()
  
  const { isLatestRatingsRequestLoading, latestRatings } = useFetchLatestRatings()

  const handleLateralMenuToggle = (book?: BookProps) => {
    setSelectedBook(book ?? null)
    setIsLateralMenuOpen((prev) => !prev)
  }

  const renderLatestRatings = () => {
    if (isLatestRatingsRequestLoading || !latestRatings || latestRatings.length === 0) {
      return Array.from({ length: 6 }, (_, index) => <SkeletonRatingCard key={index} />)
    }

    return latestRatings.map((rating) => (
      <RatingCard
        key={rating.id}
        user={rating.user}
        book={rating.book}
        rating={rating}
        onClick={() => handleLateralMenuToggle()}
      />
    ))
  }

  const renderPopularBooks = () => {
    if (isPopularBooksRequestLoading || !popularBooks || popularBooks.length === 0) {
      return Array.from({ length: 6 }, (_, index) => <SkeletonPopularBook key={index} />)
    }
    return popularBooks.map((book) => (
      <PopularBookCard
        key={book.id}
        book={book}
        onClick={() => handleLateralMenuToggle(book)}
      />
    ))
  }

  return (
    <>
      <NextSeo title="Home | Book Wise" />
      <Container>
        {isLateralMenuOpen && (
          <LateralMenu
            book={selectedBook}
            onClose={() => setIsLateralMenuOpen(false)}
          />
        )}
        {isMobile ? <MobileHeader /> : <Sidebar />}
        <HomeContainer>
          <Heading>
            <ChartLineUp />
            <h2>Home</h2>
          </Heading>
          <HomeContent>
            <LastRatingsWrapper>
              <LastRatingsContainer>
                <LastRatingsTitle>Latest Ratings</LastRatingsTitle>
                <LastRatingsContent>{renderLatestRatings()}</LastRatingsContent>
              </LastRatingsContainer>
            </LastRatingsWrapper>
            <PopularBooksCardsContainer>
              <PopularBooksTitle>
                <p>Popular Books</p>
                <span onClick={() => router.push(`/explore`)}>
                  View All
                  <CaretRight />
                </span>
              </PopularBooksTitle>
              <PopularBooksCardsContent>{renderPopularBooks()}</PopularBooksCardsContent>
            </PopularBooksCardsContainer>
          </HomeContent>
        </HomeContainer>
      </Container>
    </>
  )
}
