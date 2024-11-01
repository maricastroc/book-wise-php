import { MagnifyingGlass, User, X } from 'phosphor-react'
import { NextSeo } from 'next-seo'
import { useState } from 'react'

import {
  Container,
  Divider,
  UserDetailsContainer,
  ProfileContainer,
  UserRatingsContainer,
  SearchBar,
  ProfileWrapper,
  UserRatings,
  Heading,
  HeadingTitle,
} from './styles'

import { MobileHeader } from '@/components/MobileHeader'
import { Sidebar } from '@/components/Sidebar'
import { UserDetails } from '@/components/UserDetails'
import { UserRatingCard } from '@/components/UserRatingCard'
import { EmptyContainer } from '@/components/EmptyContainer'
import { useFetchUserRatings } from '@/utils/useFetchUserRatings'
import { useScreenSize } from '@/utils/useScreenSize'
import { UserProps } from '@/@types/user'
import { useRouter } from 'next/router'
import { SkeletonPopularBook } from '@/components/SkeletonPopularBook'
import { SkeletonUserDetails } from '@/components/SkeletonUserDetails'

export default function Profile() {
  const router = useRouter()

  const { user_id } = router.query
  
  const [search, setSearch] = useState('')

  const { userRatings, isLoading } = useFetchUserRatings(Number(user_id), search)

  const isMobile = useScreenSize(768)

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
            <UserRatingsContainer>
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
              <UserRatings>
                {isLoading ? (
                  Array.from({ length: 6 }, (_, index) => <SkeletonPopularBook key={index} />)
                ) : userRatings && userRatings.length > 0 ? (
                  userRatings.map((rating) => (
                    <UserRatingCard key={rating.id} book={rating.book} rating={rating} />
                  ))
                ) : (
                  <EmptyContainer />
                )}
              </UserRatings>
            </UserRatingsContainer>
          </ProfileContainer>
          <Divider />
          <UserDetailsContainer>
            {isLoading ? (
              <SkeletonUserDetails />
            ) : (
              user_id && <UserDetails userId={parseFloat(user_id as string)} />
            )}
          </UserDetailsContainer>
        </ProfileWrapper>
      </Container>
    </>
  )
}
