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

export default function Home() {
  const [isMobile, setIsMobile] = useState(false)

  const [selectedBook, setSelectedBook] = useState<BookProps | null>(null)

  const [openLateralMenu, setOpenLateralMenu] = useState(false)

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

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/book?id=1`)
        console.log(response)
      } catch (error) {
        console.error('Erro ao buscar detalhes do livro:', error)
      }
    }

    fetchBookDetails()
  }, []) // Reexecuta a chamada se o bookId mudar

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
                  {lastRatings.length > 0 &&
                    lastRatings.map((rating) => (
                      <ReviewCard
                        key={rating.id}
                        user_id={rating.user.id}
                        avatar_url={rating.user.avatar_url}
                        title={rating.book.name}
                        description={rating.description}
                        name={rating.user.name}
                        cover_url={rating.book.cover_url}
                        author={rating.book.author}
                        created_at={rating.book.created_at.toString()}
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
