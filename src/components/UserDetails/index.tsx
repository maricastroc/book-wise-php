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
import { useRouter } from 'next/router'
import axios from 'axios'
import { handleAxiosError } from '@/utils/handleAxiosError'

interface UserDetailsProps {
  userId: number
}

export function UserDetails({ userId }: UserDetailsProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [mostReadCategory, setMostReadCategory] = useState<string | null>(null)
  const [totalRatingsQuantity, setTotalRatingsQuantity] = useState<number | null>(null)
  const [totalAuthorsQuantity, setTotalAuthorsQuantity] = useState<number | null>(null)
  const [userAvatarUrl, setUserAvatarUrl] = useState<string | null>(null)
  const [userName, setUserName] = useState<string | null>(null)
  const [totalPagesRead, setTotalPagesRead] = useState<number | null>(null)

  useEffect(() => {
    if (userId) {
      const fetchUserRatings = async () => {
        setIsLoading(true)
        try {
          const response = await axios.get('http://localhost:8000/get-user-reading-info', {
            params: { user_id: userId },
          })

          if (response?.data) {
            setTotalPagesRead(response.data.total_pages_read)
            setMostReadCategory(response.data.most_read_category)
            setTotalAuthorsQuantity(response.data.unique_authors_count)
            setTotalRatingsQuantity(response.data.ratings_count)
            setUserAvatarUrl(
              router.pathname.includes('profile')
                ? `../${response.data.user_avatar_url}`
                : response.data.user_avatar_url
            )
            setUserName(response.data.user_name)
          }
        } catch (error) {
          handleAxiosError(error)
        } finally {
          setIsLoading(false)
        }
      }

      fetchUserRatings()
    }
  }, [userId, router.pathname])

  return (
    <Container>
      <UserInfo>
        <AvatarContainer>
          <AvatarDefault alt="User avatar" src={userAvatarUrl || ''} />
        </AvatarContainer>
        <h2>{userName}</h2>
      </UserInfo>
      <Separator />
      <UserInfoContainer>
        <UserInfoItem>
          <BookOpen />
          <ItemText>
            <h2>{totalPagesRead ?? '-'}</h2>
            <p>Pages read</p>
          </ItemText>
        </UserInfoItem>
        <UserInfoItem>
          <Books />
          <ItemText>
            <h2>{totalRatingsQuantity ?? '-'}</h2>
            <p>Rated books</p>
          </ItemText>
        </UserInfoItem>
        <UserInfoItem>
          <UserList />
          <ItemText>
            <h2>{totalAuthorsQuantity ?? '-'}</h2>
            <p>Authors read</p>
          </ItemText>
        </UserInfoItem>
        <UserInfoItem>
          <BookmarkSimple />
          <ItemText>
            <h2>{mostReadCategory ?? '-'}</h2>
            <p>Most read category</p>
          </ItemText>
        </UserInfoItem>
      </UserInfoContainer>
    </Container>
  )
}
