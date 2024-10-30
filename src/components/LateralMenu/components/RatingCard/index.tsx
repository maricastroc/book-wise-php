import {
  ActionButton,
  AvatarContainer,
  AvatarDefault,
  BookReview,
  ButtonsContainer,
  CharacterCounter,
  DeleteAndEdit,
  FormErrors,
  Header,
  NameAndDate,
  RatingContainer,
  RatingContent,
  ReviewForm,
  ReviewFormContainer,
  UserData,
} from './styles'
import { StarsRating } from '@/components/StarsRating'
import { Trash, Pencil } from 'phosphor-react'
import { DeleteModal } from '../DeleteModal'
import * as Dialog from '@radix-ui/react-dialog'
import { useState } from 'react'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/router'
import { useAuth } from '@/contexts/AuthContenxt'

interface RatingLateralCardProps {
  id?: number
  avatar_url?: string
  name?: string
  review?: string
  userId?: number
  onCloseLateralMenu: () => void
}

const editReviewCardFormSchema = z.object({
  review: z
    .string()
    .min(3, { message: 'Please, write your review before submit.' }),
})

type EditReviewCardFormData = z.infer<typeof editReviewCardFormSchema>

export function RatingLateralCard({
  avatar_url,
  name,
  review,
  userId,
}: RatingLateralCardProps) {
  const {
    register,
    watch,
    formState: { isSubmitting, errors },
  } = useForm<EditReviewCardFormData>({
    resolver: zodResolver(editReviewCardFormSchema),
    defaultValues: {
      review: review || '',
    },
  })

  const router = useRouter()

  const { user } = useAuth()

  const [openEditReviewBox, setOpenEditReviewBox] = useState(false)

  const characterCount = watch('review')?.split('').length || 0

  return (
    <RatingContainer>
      <RatingContent>
        <Header>
          <UserData>
            <AvatarContainer
              onClick={() => {
                router.push(`/profile/${userId}`)
              }}
            >
              <AvatarDefault alt="" src={avatar_url ?? ''} />
            </AvatarContainer>
            <NameAndDate>
              <p>{name}</p>
            </NameAndDate>
          </UserData>
          <StarsRating rating={3} />
        </Header>
        {openEditReviewBox ? (
          <ReviewFormContainer onSubmit={() => console.log('')}>
            <ReviewForm
              placeholder="Write your review here"
              maxLength={450}
              spellCheck={false}
              {...register('review')}
            />
            {errors.review && (
              <FormErrors>
                <span>{errors.review.message}</span>
              </FormErrors>
            )}
            <CharacterCounter>
              <span>{characterCount}</span>/450
            </CharacterCounter>
            {user && (
              <ButtonsContainer>
                <ActionButton
                  className="edit_btn"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Edit
                </ActionButton>
                <ActionButton
                  className="cancel_btn"
                  onClick={() => setOpenEditReviewBox(false)}
                  type="button"
                  disabled={isSubmitting}
                >
                  Cancel
                </ActionButton>
              </ButtonsContainer>
            )}
          </ReviewFormContainer>
        ) : (
          <BookReview>
            <p>{review}</p>
          </BookReview>
        )}
      </RatingContent>
      {user?.id === userId && (
        <>
          <DeleteAndEdit>
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <Trash className="delete_icon" />
              </Dialog.Trigger>
              <DeleteModal onConfirm={() => console.log('delete')} />
            </Dialog.Root>
            <Pencil
              className="edit_icon"
              onClick={() => setOpenEditReviewBox(!openEditReviewBox)}
            />
          </DeleteAndEdit>
        </>
      )}
    </RatingContainer>
  )
}
