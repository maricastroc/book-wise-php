import {
  AvatarContainer,
  AvatarDefault,
  BackgroundContainer,
  Container,
  Item,
  ItemsContainer,
  LoginButton,
  LoginContainer,
  ProfileContainer,
  SidebarContent,
  SidebarMain,
  SignOutContainer,
} from './styles'
import Image from 'next/image'
import SidebarBackground from '../../../public/assets/sidebar.svg'
import Logo from '../../../public/assets/logo.svg'
import { Binoculars, ChartLineUp, SignIn, SignOut } from 'phosphor-react'
import { useRouter } from 'next/router'
import { LoginModal } from '../LoginModal'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

export function Sidebar() {
  const router = useRouter()

  const [userId, setUserId] = useState<string | null>(null)

  const [userName, setUserName] = useState<string | null>(null)

  const [userAvatarUrl, setUserAvatarUrl] = useState<string | null>(null)

  useEffect(() => {
    setUserId(localStorage.getItem('user_id'))
    setUserName(localStorage.getItem('user_name'))
    setUserAvatarUrl(localStorage.getItem('user_avatar_url'))
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('user_id')
    localStorage.removeItem('user_avatar_url')
    localStorage.removeItem('token')
    localStorage.removeItem('user_name')

    router.push('/')
    toast.success('See you soon!')
  }

  return (
    <Container>
      <BackgroundContainer>
        <SidebarContent>
          <SidebarMain>
            <Image
              src={Logo}
              width={200}
              alt="Logo Application."
              fetchPriority="high"
              quality={100}
            />
            <ItemsContainer>
              <Item
                active={router.pathname === '/home'}
                onClick={() => router.push('/home')}
              >
                <ChartLineUp />
                <p>Home</p>
              </Item>
              <Item
                active={router.pathname === '/explore'}
                onClick={() => router.push('/explore')}
              >
                <Binoculars />
                <p>Explore</p>
              </Item>
            </ItemsContainer>
          </SidebarMain>
          {userId ? (
            <ProfileContainer>
              <AvatarContainer>
                <AvatarDefault src={userAvatarUrl ?? ''} />
              </AvatarContainer>
              <SignOutContainer>
                <p>{userName ?? ''}</p>
                <SignOut onClick={handleLogout} />
              </SignOutContainer>
            </ProfileContainer>
          ) : (
            <LoginContainer></LoginContainer>
          )}
        </SidebarContent>
        <Image
          src={SidebarBackground}
          width={232}
          alt=""
          quality={100}
          fetchPriority="high"
        />
      </BackgroundContainer>
    </Container>
  )
}
