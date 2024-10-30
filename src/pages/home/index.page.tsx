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
import { PopularBookCard } from '@/components/PopularBookCard'
import { NextSeo } from 'next-seo'
import { LateralMenu } from '@/components/LateralMenu'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Sidebar } from '@/components/Sidebar'
import { RatingCard } from '@/components/RatingCard'
import { BookProps } from '@/@types/book'
import axios from 'axios'
import { SkeletonRatingCard } from '@/components/SkeletonRatingCard'
import { RatingProps } from '@/@types/rating'
import { SkeletonPopularBook } from '@/components/SkeletonPopularBook'
import { toast } from 'react-toastify'

export default function Home() {
  const [isMobile, setIsMobile] = useState(false)
  const [popularBooks, setPopularBooks] = useState<BookProps[] | null>(null)
  const [selectedBook, setSelectedBook] = useState<BookProps | null>(null)
  const [openLateralMenu, setOpenLateralMenu] = useState(false)
  const [latestRatings, setLatestRatings] = useState<RatingProps[] | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const fetchLatestRatings = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/get-latest-ratings`,
        )

        if (response?.data) {
          setLatestRatings(response.data)
        }
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          const errorMessage =
            typeof error.response.data.message === 'string'
              ? error.response.data.message
              : Object.values(error.response.data.message).join(', ')
          toast.error(errorMessage)
        } else {
          toast.error('Ooops, something went wrong. Please try again later.')
        }
      } finally {
        setLoading(false)
      }
    }

    fetchLatestRatings()
  }, [])

  useEffect(() => {
    const fetchPopularBooks = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/get-popular-books`,
        )

        if (response?.data) {
          setPopularBooks(response.data)
        }
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          const errorMessage =
            typeof error.response.data.message === 'string'
              ? error.response.data.message
              : Object.values(error.response.data.message).join(', ')
          toast.error(errorMessage)
        } else {
          toast.error('Ooops, something went wrong. Please try again later.')
        }
      } finally {
        setLoading(false)
      }
    }

    fetchPopularBooks()
  }, [])

  return (
    <>
      <NextSeo title="Home | Book Wise" />
      <Container>
        {openLateralMenu && (
          <LateralMenu
            book={selectedBook}
            onClose={() => setOpenLateralMenu(false)}
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
                <LastRatingsTitle>Last Ratings</LastRatingsTitle>
                <LastRatingsContent>
                  {loading
                    ? Array.from({ length: 6 }, (_, index) => (
                        <SkeletonRatingCard key={index} />
                      ))
                    : !latestRatings || latestRatings.length === 0
                    ? Array.from({ length: 6 }, (_, index) => (
                        <SkeletonRatingCard key={index} />
                      ))
                    : latestRatings.map((rating) => (
                        <RatingCard
                          key={rating.id}
                          user={rating.user}
                          book={rating.book}
                          rating={rating}
                          onClick={() => {
                            setOpenLateralMenu(true)
                          }}
                        />
                      ))}
                </LastRatingsContent>
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
              <PopularBooksCardsContent>
                {loading
                  ? Array.from({ length: 6 }, (_, index) => (
                      <SkeletonPopularBook key={index} />
                    ))
                  : !popularBooks || popularBooks.length === 0
                  ? Array.from({ length: 6 }, (_, index) => (
                      <SkeletonPopularBook key={index} />
                    ))
                  : popularBooks.map((book) => (
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
