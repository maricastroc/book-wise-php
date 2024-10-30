import {
  AvatarContainer,
  AvatarDefault,
  BackgroundContainer,
  Container,
  Item,
  ItemsContainer,
  LoginContainer,
  ProfileContainer,
  SidebarContent,
  SidebarMain,
  SignOutContainer,
} from './styles'
import Image from 'next/image'
import SidebarBackground from '../../../public/assets/sidebar.svg'
import Logo from '../../../public/assets/logo.svg'
import { Binoculars, Book, ChartLineUp, SignOut } from 'phosphor-react'
import { useRouter } from 'next/router'
import { useAuth } from '@/contexts/AuthContenxt'
import { toast } from 'react-toastify'

export function Sidebar() {
  const router = useRouter()

  const { user, signOut } = useAuth();

  const handleSignOut = async () => {
    try {
      signOut()
      toast.success('See you soon!')
      router.push('/')
    } catch (error) {
      console.error('Login error:', error)
      toast.error('Ooops! Something went wrong.')
    }
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
              <Item
                active={router.pathname === '/submit'}
                onClick={() => router.push('/submit')}
              >
                <Book />
                <p>Submit</p>
              </Item>
            </ItemsContainer>
          </SidebarMain>
          {user ? (
            <ProfileContainer>
              <AvatarContainer>
                <AvatarDefault src={user?.avatar_url ?? ''} />
              </AvatarContainer>
              <SignOutContainer>
                <p>{user?.name ?? ''}</p>
                <SignOut onClick={handleSignOut} />
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
