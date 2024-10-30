import { Binoculars, Book, ChartLineUp } from 'phosphor-react'
import { Container, Item, ItemsContainer } from './styles'
import { useRouter } from 'next/router'

export function MobileModal() {
  const router = useRouter()

  return (
    <Container>
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
    </Container>
  )
}
