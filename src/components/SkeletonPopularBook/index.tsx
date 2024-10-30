import { Container, Content, Main } from './styles'
import { Skeleton } from '@mui/material'

export function SkeletonPopularBook() {
  return (
    <Container>
      <Main>
        <Skeleton
          width={'100%'}
          height={'8rem'}
          variant="rounded"
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
        />
        <Content>
          <Skeleton
            width={'100%'}
            height={'100%'}
            variant="rounded"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
          />
          <Skeleton
            width={'100%'}
            height={'100%'}
            variant="rounded"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
          />
        </Content>
      </Main>
    </Container>
  )
}
