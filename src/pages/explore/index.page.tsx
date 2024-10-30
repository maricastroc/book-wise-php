import { Binoculars, MagnifyingGlass, X } from 'phosphor-react'
import {
  Categories,
  ButtonFilter,
  Container,
  ExploreContainer,
  Heading,
  SearchBar,
  BooksContainer,
  ExploreContent,
  HeadingTitle,
} from './styles'
import { useEffect, useState } from 'react'
import { MobileHeader } from '@/components/MobileHeader'
import { Sidebar } from '@/components/Sidebar'
import { ExploreCard } from '@/components/ExploreCard'
import { LateralMenu } from '@/components/LateralMenu'
import { NextSeo } from 'next-seo'
import { categories } from '../../data/categories'
import { BookProps } from '@/@types/book'
import axios from 'axios'
import { toast } from 'react-toastify'
import { CategoryProps } from '@/@types/category'
import { SkeletonPopularBook } from '@/components/SkeletonPopularBook'

export default function Explore() {
  const [isMobile, setIsMobile] = useState(false)

  const [books, setBooks] = useState<BookProps[]>()

  const [loading, setLoading] = useState(false)

  const [categories, setCategories] = useState<CategoryProps[] | null>(null)

  const [selectedCategory, setSelectedCategory] = useState<CategoryProps | null>(null)

  const [search, setSearch] = useState('')

  const [selectedBook, setSelectedBook] = useState<BookProps | null>(null)

  const [openLateralMenu, setOpenLateralMenu] = useState(false)

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:8000/get-categories')
        
        if (response?.data) {
          setCategories(response.data)
        }
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          const errorMessage = typeof error.response.data.message === 'string'
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

    fetchCategories()
  }, [])

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:8000/get-books', {
          params: {
            title: search, // exemplo de filtro pelo título
            author: search, // exemplo de filtro pelo autor
            category_id: selectedCategory?.id, // exemplo de filtro pela categoria
          },
        })
        
        if (response?.data) {
          setBooks(response.data)
        }
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          const errorMessage = typeof error.response.data.message === 'string'
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

    fetchBooks()
  }, [selectedCategory, search])

  function handleCloseLateralMenu() {
    setOpenLateralMenu(false)
  }

  return (
    <>
      <NextSeo title="Explore | Book Wise" />
      <Container>
        {openLateralMenu && (
          <LateralMenu book={selectedBook} onClose={handleCloseLateralMenu} />
        )}
        {isMobile ? <MobileHeader /> : <Sidebar />}
        <ExploreContainer>
          <Heading>
            <HeadingTitle>
              <Binoculars />
              <h2>Explore</h2>
            </HeadingTitle>
            <SearchBar>
              <input
                type="text"
                placeholder="Search for author or title"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                spellCheck={false}
              />
              {(search === '') ? 
              <MagnifyingGlass /> : 
              <X onClick={() => setSearch('')}/>}
            </SearchBar>
          </Heading>
          <ExploreContent>
            <Categories>
              <ButtonFilter
                selected={!selectedCategory}
                onClick={() => setSelectedCategory(null)}
              >
                All
              </ButtonFilter>
              {(categories && categories.length > 0) &&
                categories.map((category) => {
                  return (
                    <ButtonFilter
                      selected={selectedCategory?.id === category.id}
                      key={category.id}
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category.name}
                    </ButtonFilter>
                  )
                })}
            </Categories>
            <BooksContainer>
                {loading ? (
                    Array.from({ length: 6 }, (_, index) => (
                      <SkeletonPopularBook key={index} />
                    ))
                  ) : (
                    (!books || books.length === 0) ? (
                      Array.from({ length: 6 }, (_, index) => (
                        <SkeletonPopularBook key={index} />
                      ))
                    ) : (
                      books.map((book) => (
                        <ExploreCard
                          key={book.id}
                          book={book}
                          onClick={() => {
                            setSelectedBook(book)
                            setOpenLateralMenu(true)
                          }}
                        />
                      ))
                    )
                  )}
            </BooksContainer>
          </ExploreContent>
        </ExploreContainer>
      </Container>
    </>
  )
}
