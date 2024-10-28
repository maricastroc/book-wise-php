import { MobileHeader } from '@/components/MobileHeader'
import { NextSeo } from 'next-seo'
import { useEffect, useState } from 'react'
import { Sidebar } from '@/components/Sidebar'
import {
  BooksContainer,
  BooksSection,
  Container,
  Heading,
  HeadingTitle,
  ProfileContainer,
  ProfileContent,
  SearchBar,
  UserDetailsContainer,
} from './styles'
import { MagnifyingGlass, User } from 'phosphor-react'
import { ProfileCard } from '@/components/ProfileCard'
import { EmptyContainer } from '@/components/EmptyContainer'
import { UserDetails } from '@/components/UserDetails'
import { useRouter } from 'next/router'
import { users } from '../../../data/users'
import { books } from '../../../data/books'

export default function Profile() {
  const [isMobile, setIsMobile] = useState(false)

  const router = useRouter()

  const { user_id } = router.query

  const user = users.find((user) => user.id === user_id)

  const userRatings = user_id
    ? books.flatMap((book) =>
        book.ratings
          .filter((rating) => rating.user.id === user_id)
          .map((rating) => ({ ...rating, book })),
      )
    : []

  const [search, setSearch] = useState('')

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const filteredBooks = userRatings?.filter((rating) => {
    return (
      rating.book.name
        .toLowerCase()
        .includes(search.toLowerCase().replace(/( )+/g, ' ')) ||
      rating.book.author
        .toLowerCase()
        .includes(search.toLowerCase().replace(/( )+/g, ' '))
    )
  })

  return (
    <>
      <NextSeo title="Profile | Book Wise" />
      <Container>
        {isMobile ? <MobileHeader /> : <Sidebar />}
        <ProfileContainer>
          <Heading>
            <HeadingTitle>
              <User />
              <h2>Profile</h2>
            </HeadingTitle>
          </Heading>
          <ProfileContent>
            <BooksSection>
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
              <BooksContainer>
                {filteredBooks.length > 0 ? (
                  filteredBooks.map((rating) => {
                    return (
                      <ProfileCard
                        key={rating.id}
                        book={rating.book}
                        rating={rating}
                      />
                    )
                  })
                ) : (
                  <EmptyContainer />
                )}
              </BooksContainer>
            </BooksSection>
            <UserDetailsContainer>
              {user?.avatar_url && user?.name && (
                <UserDetails
                  avatar_url={user.avatar_url}
                  name={user?.name}
                  total_pages={7890}
                  books_rated={5}
                  authors_read={34}
                  most_read_category={'Fiction'}
                />
              )}
            </UserDetailsContainer>
          </ProfileContent>
        </ProfileContainer>
      </Container>
    </>
  )
}
