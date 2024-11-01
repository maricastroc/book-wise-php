import {
  AvatarContainer,
  AvatarDefault,
  BackgroundContainer,
  Container,
  Item,
  ItemsContainer,
  LoginContainer,
  PageBtn,
  ProfileContainer,
  SidebarContent,
  SidebarMain,
  SignOutContainer,
} from './styles'
import Image from 'next/image'
import SidebarBackground from '../../../public/assets/sidebar.svg'
import Logo from '../../../public/assets/logo.svg'
import { Binoculars, Book, ChartLineUp, SignOut, User } from 'phosphor-react'
import { useRouter } from 'next/router'
import { useAuth } from '@/contexts/AuthContenxt'
import { toast } from 'react-toastify'

export function Sidebar() {
  const router = useRouter()

  const { user, signOut } = useAuth()

  const avatarUrl = router.pathname.includes('profile')
  ? `../${user?.avatar_url ?? ''}`
  : user?.avatar_url ?? '';

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
              <Item>
                <PageBtn
                  onClick={() => router.push('/home')}
                  active={router.pathname === '/home'}
                >
                  <ChartLineUp />
                  <p>Home</p>
                </PageBtn>
              </Item>
              <Item>
                <PageBtn
                  onClick={() => router.push('/explore')}
                  active={router.pathname === '/explore'}
                >
                  <Binoculars />
                  <p>Explore</p>
                </PageBtn>
              </Item>
              <Item>
                <PageBtn
                  onClick={() => router.push('/submit')}
                  active={router.pathname === '/submit'}
                >
                  <Book />
                  <p>Submit</p>
                </PageBtn>
              </Item>
              {user && (
                <Item>
                  <PageBtn
                    active={router.pathname.includes('profile')}
                    onClick={() => {
                      router.push(`profile/${user.id}`)
                    }}
                  >
                    <User />
                    <p>Profile</p>
                  </PageBtn>
                </Item>
              )}
            </ItemsContainer>
          </SidebarMain>
          {user ? (
            <ProfileContainer>
              <AvatarContainer>
                <AvatarDefault src={avatarUrl ?? ''} />
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
