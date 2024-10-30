import {
  BooksContainer,
  BooksSection,
  ProfileContent,
  SearchBar,
  UserDetailsContainer,
} from './styles'
import { MagnifyingGlass } from 'phosphor-react'
import { ProfileCard } from '@/components/ProfileCard'
import { EmptyContainer } from '@/components/EmptyContainer'
import { UserDetails } from '@/components/UserDetails'

export const ProfileContenr = () => {
  return (
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
  )
}