import { Binoculars, MagnifyingGlass } from 'phosphor-react'
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
import { books } from '../../data/books'
import { categories } from '../../data/categories'
import { BookProps } from '@/@types/book'

export default function Explore() {
  const [isMobile, setIsMobile] = useState(false)

  const [booksList, setBooksList] = useState<BookProps[]>(books)

  const [categorySelected, setCategorySelected] = useState<string | null>(null)

  const [search, setSearch] = useState('')

  const [selectedBook, setSelectedBook] = useState<BookProps | null>(null)

  const [openLateralMenu, setOpenLateralMenu] = useState(false)

  const filteredBooks = booksList?.filter((book) => {
    return (
      book.name
        .toLowerCase()
        .includes(search.toLowerCase().replace(/( )+/g, ' ')) ||
      book.author
        .toLowerCase()
        .includes(search.toLowerCase().replace(/( )+/g, ' '))
    )
  })

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (categorySelected) {
      const filteredBooks = books.filter((book) =>
        book.categories.some((category) => category.name === categorySelected),
      )
      setBooksList(filteredBooks)
    }
  }, [categorySelected])

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
              <MagnifyingGlass />
            </SearchBar>
          </Heading>
          <ExploreContent>
            <Categories>
              <ButtonFilter
                selected={!categorySelected}
                onClick={() => setCategorySelected(null)}
              >
                All
              </ButtonFilter>
              {categories.length > 0 &&
                categories.map((category) => {
                  return (
                    <ButtonFilter
                      selected={categorySelected === category.id}
                      key={category.id}
                      onClick={() => console.log(null)}
                    >
                      {category.name}
                    </ButtonFilter>
                  )
                })}
            </Categories>
            <BooksContainer>
              {filteredBooks.length > 0 &&
                filteredBooks.map((book) => {
                  return (
                    <ExploreCard
                      key={book.id}
                      cover_url={book.cover_url}
                      author={book.author}
                      name={book.name}
                      onClick={() => {
                        setSelectedBook(book)
                        setOpenLateralMenu(true)
                      }}
                    />
                  )
                })}
            </BooksContainer>
          </ExploreContent>
        </ExploreContainer>
      </Container>
    </>
  )
}
