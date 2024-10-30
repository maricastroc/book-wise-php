import {
  CloseButton,
  Container,
  ContainerOverlay,
  LateralMenuContainer,
  RatingsContainer,
  RatingsContent,
  RatingsContentTitle,
} from './styles'
import { BookCard } from './components/BookCard'
import { X } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { RatingLateralCard } from './components/RatingCard'
import * as Dialog from '@radix-ui/react-dialog'
import { LoginModal } from '../LoginModal'
import { RatingCardForm } from './components/RatingCardForm'
import { RatingProps } from '@/@types/rating'
import { BookProps } from '@/@types/book'
import { useAuth } from '@/contexts/AuthContenxt'

interface LateralMenuProps {
  book: BookProps | null
  onClose: () => void
}

export function LateralMenu({ book, onClose }: LateralMenuProps) {
  const [openRatingForm, setOpenRatingForm] = useState(false)

  const { user } = useAuth();

  return (
    book && (
      <Container>
      <CloseButton onClick={() => onClose()}>
        <X />
      </CloseButton>
      <ContainerOverlay onClick={() => onClose()} />
      <LateralMenuContainer>
        {book && (
          <BookCard
            book={book}
          />
        )}
        <RatingsContainer>
          <RatingsContentTitle>
            <p>Ratings</p>
            {user && (
              <span onClick={() => setOpenRatingForm(true)}>Review</span>
            )}
            {user && (
              <Dialog.Root>
                <Dialog.Trigger asChild>
                  <span>Review</span>
                </Dialog.Trigger>
                <LoginModal />
              </Dialog.Root>
            )}
          </RatingsContentTitle>
          {user && openRatingForm && book?.id && (
            <RatingCardForm
              avatar_url={user?.avatar_url ?? ''}
              name={user.name}
              onClose={() => setOpenRatingForm(false)}
              onCloseLateralMenu={() => onClose()}
              bookId={book?.id}
              userId={user.id}
            />
          )}
          <RatingsContent>
            {book?.ratings.map((rating: RatingProps) => (
              <RatingLateralCard
                key={rating.id}
                id={rating.id}
                avatar_url={rating?.user?.avatar_url}
                name={rating.user.name}
                review={rating.review}
                userId={rating.user.id}
                onCloseLateralMenu={() => onClose()}
              />
            ))}
          </RatingsContent>
        </RatingsContainer>
      </LateralMenuContainer>
    </Container>
    )
  )
}
