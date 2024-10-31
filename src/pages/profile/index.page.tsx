import { MagnifyingGlass, User } from 'phosphor-react'
import { NextSeo } from 'next-seo'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useEffect, useState } from 'react'

import {
  Container,
  Divider,
  UserDetailsContainer,
  ProfileContainer,
  MainContent,
  SearchBar,
  ProfileWrapper,
  BooksContainer,
  Heading,
  HeadingTitle,
} from './styles'

import { useAuth } from '@/contexts/AuthContenxt'
import { MobileHeader } from '@/components/MobileHeader'
import { Sidebar } from '@/components/Sidebar'
import { UserDetails } from '@/components/UserDetails'
import { ProfileCard } from '@/components/ProfileCard'
import { EmptyContainer } from '@/components/EmptyContainer'
import { RatingProps } from '@/@types/rating'

export default function Profile() {
  const [isMobile, setIsMobile] = useState(false)

  const [userRatings, setUserRatings] = useState<null | RatingProps[]>(null)

  const { user } = useAuth()

  const [isLoading, setIsLoading] = useState(true)

  const [search, setSearch] = useState('')

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (user) {
      const fetchUserRatings = async () => {
        try {
          const response = await axios.get(
            'http://localhost:8000/get-user-ratings',
            {
              params: {
                user_id: user.id,
                search,
              },
            },
          )

          if (response?.data) {
            setUserRatings(response.data)
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
          setIsLoading(false)
        }
      }

      fetchUserRatings()
    }
  }, [user, search])

  return (
    <>
      <NextSeo title="Profile | Book Wise" />
      <Container>
        {isMobile ? <MobileHeader /> : <Sidebar />}
        <ProfileWrapper>
          <ProfileContainer>
            <Heading>
              <HeadingTitle>
                <User />
                <h2>Profile</h2>
              </HeadingTitle>
            </Heading>
            <MainContent>
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
                {userRatings && userRatings.length > 0 ? (
                  userRatings.map((rating) => {
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
            </MainContent>
          </ProfileContainer>
          <Divider />
          <UserDetailsContainer>{user && <UserDetails />}</UserDetailsContainer>
        </ProfileWrapper>
      </Container>
    </>
  )
}
