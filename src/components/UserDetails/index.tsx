import { useEffect, useState } from 'react'
import {
  AvatarContainer,
  AvatarDefault,
  Container,
  EditUserBtn,
  ItemText,
  Separator,
  UserInfo,
  UserInfoContainer,
  UserInfoItem,
} from './styles'
import { BookOpen, BookmarkSimple, Books, PencilSimple, UserList } from 'phosphor-react'
import { useRouter } from 'next/router'
import axios from 'axios'
import { handleAxiosError } from '@/utils/handleAxiosError'
import * as Dialog from '@radix-ui/react-dialog'
import { EditUserModal } from '../EditUserModal'
import { useFetchUser } from '@/utils/useFetchUser'
import { useAuth } from '@/contexts/AuthContenxt'

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

  const [isEditUserModalOpen, setIsEditUserModalOpen] = useState(false)

  const { userData, refetchUser } = useFetchUser(userId)

  const { user } = useAuth()

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
  }, [userId, router.pathname, userData])

  return (
    <Container>
      <UserInfo>
        <AvatarContainer>
          <AvatarDefault alt="User avatar" src={userAvatarUrl || ''} />
        </AvatarContainer>
        <h2>{userName}</h2>

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <EditUserBtn type='button' onClick={() => setIsEditUserModalOpen(true)}>
              <PencilSimple />
              Edit Info
            </EditUserBtn>
          </Dialog.Trigger>
          {(isEditUserModalOpen && user) && (
            <EditUserModal userId={user?.id} onClose={() => {
              setIsEditUserModalOpen(false)

              refetchUser()
            }} />
          )}
        </Dialog.Root>
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
