import { Binoculars, MagnifyingGlass, X } from 'phosphor-react'
import { useState } from 'react'
import { NextSeo } from 'next-seo'

import {
  Container,
  Categories,
  CategoryBtn,
  ExploreContainer,
  Heading,
  SearchBar,
  BooksContainer,
  ExploreContent,
  HeadingTitle,
} from './styles'

import { MobileHeader } from '@/components/MobileHeader'
import { Sidebar } from '@/components/Sidebar'
import { ExploreCard } from '@/components/ExploreCard'
import { LateralMenu } from '@/components/LateralMenu'
import { SkeletonPopularBook } from '@/components/SkeletonPopularBook'

import { BookProps } from '@/@types/book'
import { CategoryProps } from '@/@types/category'
import { useFetchBooks } from '@/utils/useFetchBooks'
import { useScreenSize } from '@/utils/useScreenSize'
import { useFetchCategories } from '@/utils/useFetchCategories'

export default function Explore() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryProps | null>(null)
  
  const [search, setSearch] = useState('')

  const [selectedBook, setSelectedBook] = useState<BookProps | null>(null)

  const [isLateralMenuOpen, setIsLateralMenuOpen] = useState(false)

  const { books, isBooksFetchLoading } = useFetchBooks(selectedCategory, search)
  
  const { categories } = useFetchCategories()

  const isMobile = useScreenSize(768)

  const handleCloseLateralMenu = () => setIsLateralMenuOpen(false)

  const renderCategories = () => (
    <Categories>
      <CategoryBtn selected={!selectedCategory} onClick={() => setSelectedCategory(null)}>
        All
      </CategoryBtn>
      {categories?.map((category) => (
        <CategoryBtn
          key={category.id}
          selected={selectedCategory?.id === category.id}
          onClick={() => setSelectedCategory(category)}
        >
          {category.name}
        </CategoryBtn>
      ))}
    </Categories>
  )

  const renderBooks = () => {
    if (isBooksFetchLoading || !books || books.length === 0) {
      return Array.from({ length: 6 }, (_, index) => <SkeletonPopularBook key={index} />)
    }
    return books.map((book) => (
      <ExploreCard
        key={book.id}
        book={book}
        onClick={() => {
          setSelectedBook(book)
          setIsLateralMenuOpen(true)
        }}
      />
    ))
  }

  return (
    <>
      <NextSeo title="Explore | Book Wise" />
      <Container>
        {isLateralMenuOpen && (
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
              {search === '' ? (
                <MagnifyingGlass />
              ) : (
                <X onClick={() => setSearch('')} />
              )}
            </SearchBar>
          </Heading>
          <ExploreContent>
            {renderCategories()}
            <BooksContainer>{renderBooks()}</BooksContainer>
          </ExploreContent>
        </ExploreContainer>
      </Container>
    </>
  )
}
