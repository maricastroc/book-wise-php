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

interface LateralMenuProps {
  book: BookProps | null
  onClose: () => void
}

export function LateralMenu({ book, onClose }: LateralMenuProps) {
  const [openRatingForm, setOpenRatingForm] = useState(false)

  const [userId, setUserId] = useState<number | null>(null)

  const [userName, setUserName] = useState<string | null>(null)

  const [userAvatarUrl, setUserAvatarUrl] = useState<string | null>(null)

  useEffect(() => {
    const storedUserId = localStorage.getItem('user_id');
    const parsedUserId = storedUserId ? parseFloat(storedUserId) : null;
    
    if (parsedUserId) {
      setUserId(!isNaN(parsedUserId) ? parsedUserId : null);
      setUserName(localStorage.getItem('user_name'));
      setUserAvatarUrl(localStorage.getItem('user_avatar_url'));
    }
  }, []);

console.log(book)
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
            {userId && (
              <span onClick={() => setOpenRatingForm(true)}>Review</span>
            )}
            {userId && (
              <Dialog.Root>
                <Dialog.Trigger asChild>
                  <span>Review</span>
                </Dialog.Trigger>
                <LoginModal />
              </Dialog.Root>
            )}
          </RatingsContentTitle>
          {userId && userName && openRatingForm && book?.id && (
            <RatingCardForm
              avatar_url={userAvatarUrl ?? ''}
              name={userName}
              onClose={() => setOpenRatingForm(false)}
              onCloseLateralMenu={() => onClose()}
              bookId={book?.id}
              userId={userId}
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
