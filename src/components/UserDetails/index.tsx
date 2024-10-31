import { useEffect, useState } from 'react'
import {
  AvatarContainer,
  AvatarDefault,
  Container,
  ItemText,
  Separator,
  UserInfo,
  UserInfoContainer,
  UserInfoItem,
} from './styles'
import { BookOpen, BookmarkSimple, Books, UserList } from 'phosphor-react'
import { useAuth } from '@/contexts/AuthContenxt'
import axios from 'axios'
import { toast } from 'react-toastify'

export function UserDetails() {
  const { user } = useAuth()

  const [isLoading, setIsLoading] = useState(false)

  const [mostReadCategory, setMostReadCategory] = useState('')

  const [totalRatingsQuantity, setTotalRatingsQuantity] = useState(null)

  const [totalAuthorsQuantity, setTotalAuthorsQuantity] = useState(null)

  const [totalPagesRead, setTotalPagesRead] = useState(null)

  useEffect(() => {
    if (user) {
      const fetchUserRatings = async () => {
        try {
          const response = await axios.get(
            'http://localhost:8000/get-user-reading-info',
            {
              params: {
                user_id: user.id,
              },
            },
          )

          if (response?.data) {
            setTotalPagesRead(response.data.total_pages_read)
            setMostReadCategory(response.data.most_read_category)
            setTotalAuthorsQuantity(response.data.unique_authors_count)
            setTotalRatingsQuantity(response.data.ratings_count)
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
  }, [user])

  return (
    <Container>
      <UserInfo>
        <AvatarContainer>
          <AvatarDefault alt="" src={user?.avatar_url} />
        </AvatarContainer>
        <h2>{user?.name}</h2>
      </UserInfo>
      <Separator />
      <UserInfoContainer>
        <UserInfoItem>
          <BookOpen />
          <ItemText>
            <h2>{totalPagesRead}</h2>
            <p>Pages read</p>
          </ItemText>
        </UserInfoItem>
        <UserInfoItem>
          <Books />
          <ItemText>
            <h2>{totalRatingsQuantity}</h2>
            <p>Rated books</p>
          </ItemText>
        </UserInfoItem>
        <UserInfoItem>
          <UserList />
          <ItemText>
            <h2>{totalAuthorsQuantity}</h2>
            <p>Authors read</p>
          </ItemText>
        </UserInfoItem>
        <UserInfoItem>
          <BookmarkSimple />
          <ItemText>
            <h2>{mostReadCategory}</h2>
            <p>Most read category</p>
          </ItemText>
        </UserInfoItem>
      </UserInfoContainer>
    </Container>
  )
}
