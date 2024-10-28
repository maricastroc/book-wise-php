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
import { useState } from 'react'
import { RatingCard } from './components/RatingCard'
import * as Dialog from '@radix-ui/react-dialog'
import { LoginModal } from '../LoginModal'
import { myUser } from '../../data/users'
import { ReviewCardForm } from './components/ReviewCardForm'
import { RatingProps } from '@/@types/rating'
import { BookProps } from '@/@types/book'

interface LateralMenuProps {
  book: BookProps | null
  onClose: () => void
}

export function LateralMenu({ book, onClose }: LateralMenuProps) {
  const [openReviewForm, setOpenReviewForm] = useState(false)

  return (
    <Container>
      <CloseButton onClick={() => onClose()}>
        <X />
      </CloseButton>
      <ContainerOverlay onClick={() => onClose()} />
      <LateralMenuContainer>
        {book && (
          <BookCard
            name={book.name}
            author={book.author}
            cover_url={book.cover_url}
            total_pages={book.total_pages}
            categories={book.categories}
          />
        )}
        <RatingsContainer>
          <RatingsContentTitle>
            <p>Ratings</p>
            {myUser && (
              <span onClick={() => setOpenReviewForm(true)}>Review</span>
            )}
            {myUser && (
              <Dialog.Root>
                <Dialog.Trigger asChild>
                  <span>Review</span>
                </Dialog.Trigger>
                <LoginModal />
              </Dialog.Root>
            )}
          </RatingsContentTitle>
          {myUser && openReviewForm && book?.id && (
            <ReviewCardForm
              avatar_url={myUser.avatar_url}
              name={myUser.name}
              onClose={() => setOpenReviewForm(false)}
              onCloseLateralMenu={() => onClose()}
              bookId={book?.id}
              userId={myUser.id}
            />
          )}
          <RatingsContent>
            {book?.ratings.map((rating: RatingProps) => (
              <RatingCard
                key={rating.id}
                id={rating.id}
                avatar_url={rating.user.avatar_url}
                name={rating.user.name}
                description={rating.description}
                userId={rating.user.id}
                onCloseLateralMenu={() => onClose()}
              />
            ))}
          </RatingsContent>
        </RatingsContainer>
      </LateralMenuContainer>
    </Container>
  )
}
