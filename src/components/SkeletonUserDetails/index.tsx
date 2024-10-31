import { Container, Header, Main } from './styles'
import { Skeleton } from '@mui/material'

export function SkeletonUserDetails() {
  return (
    <Container>
      <Header>
        <Skeleton
          width={'100%'}
          height={'5rem'}
          variant="circular"
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
        />
      </Header>

      <Main>
        <Skeleton
          width={'100%'}
          height={'2rem'}
          variant="rounded"
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
        />
                <Skeleton
          width={'100%'}
          height={'2rem'}
          variant="rounded"
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
        />
                <Skeleton
          width={'100%'}
          height={'2rem'}
          variant="rounded"
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
        />
                        <Skeleton
          width={'100%'}
          height={'2rem'}
          variant="rounded"
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
        />
      </Main>
    </Container>
  )
}
