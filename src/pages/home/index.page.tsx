import { MobileHeader } from '@/components/MobileHeader'
import {
  Container,
  Heading,
  HomeContainer,
  HomeContent,
  PopularBooksCardsContainer,
  PopularBooksCardsContent,
  PopularBooksTitle,
  RecentAndLastRead,
  RecentCardsContainer,
  RecentCardsContent,
  RecentCardsTitle,
} from './styles'
import { CaretRight, ChartLineUp } from 'phosphor-react'
import { PopularBookCard } from '@/components/PopularBookCard'
import { NextSeo } from 'next-seo'
import { LateralMenu } from '@/components/LateralMenu'
import { lastRatings } from '../../data/lastRatings'
import { books } from '../../data/books'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Sidebar } from '@/components/Sidebar'
import { ReviewCard } from '@/components/ReviewCard'
import { BookProps } from '@/@types/book'
import axios from 'axios'

interface LatestRatingProps {
  id: number
  book_author: string
  book_id: number
  book_title: string
  book_image_url: string
  created_at: string
  rating: number
  review: string
  user_avatar_url: string
  user_id: number
  user_name: string
}

export default function Home() {
  const [isMobile, setIsMobile] = useState(false)

  const [selectedBook, setSelectedBook] = useState<BookProps | null>(null)

  const [openLateralMenu, setOpenLateralMenu] = useState(false)

  const [latestRatings, setLatestRatings] = useState<null | LatestRatingProps[]>(null)

  const router = useRouter()

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  function handleCloseLateralMenu() {
    setOpenLateralMenu(false)
  }
console.log(latestRatings)
  useEffect(() => {
    const fetchLatestReviews = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/latest-reviews`)
        
        if (response?.data && response?.data?.reviews) {
          setLatestRatings(response.data.reviews)
        }
      } catch (error) {
        console.error('Error fetching latest ratings:', error)
      }
    }

    fetchLatestReviews()
  }, [])

  return (
    <>
      <NextSeo title="Home | Book Wise" />
      <Container>
        {openLateralMenu && (
          <LateralMenu book={selectedBook} onClose={handleCloseLateralMenu} />
        )}
        {isMobile ? <MobileHeader /> : <Sidebar />}
        <HomeContainer>
          <Heading>
            <ChartLineUp />
            <h2>Home</h2>
          </Heading>
          <HomeContent>
            <RecentAndLastRead>
              <RecentCardsContainer>
                <RecentCardsTitle>Last Ratings</RecentCardsTitle>
                <RecentCardsContent>
                  {(latestRatings && latestRatings.length > 0) &&
                    latestRatings.map((rating) => (
                      <ReviewCard
                        key={rating.id}
                        user_id={rating.user_id}
                        avatar_url={rating.user_avatar_url}
                        title={rating.book_title}
                        description={rating.review}
                        rating={rating.rating}
                        name={rating.user_name}
                        cover_url={rating.book_image_url}
                        author={rating.book_author}
                        created_at={rating.created_at.toString()}
                        onClick={() => {
                          console.log(null)
                        }}
                      />
                    ))}
                </RecentCardsContent>
              </RecentCardsContainer>
            </RecentAndLastRead>
            <PopularBooksCardsContainer>
              <PopularBooksTitle>
                <p>Popular Books</p>
                <span onClick={() => router.push(`/explore`)}>
                  View All
                  <CaretRight />
                </span>
              </PopularBooksTitle>
              <PopularBooksCardsContent>
                {books.length > 0 &&
                  books.map((book) => (
                    <PopularBookCard
                      key={book.id}
                      book={book}
                      onClick={() => {
                        setSelectedBook(book)
                        setOpenLateralMenu(true)
                      }}
                    />
                  ))}
              </PopularBooksCardsContent>
            </PopularBooksCardsContainer>
          </HomeContent>
        </HomeContainer>
      </Container>
    </>
  )
}
