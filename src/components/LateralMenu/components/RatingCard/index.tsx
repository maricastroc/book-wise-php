import {
  ActionButton,
  AvatarContainer,
  AvatarDefault,
  BookDescription,
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
import { myUser } from '../../../../data/users'
import { useState } from 'react'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/router'

interface RatingCardProps {
  id?: string
  avatar_url?: string
  name?: string
  description?: string
  userId?: string
  onCloseLateralMenu: () => void
}

const editReviewCardFormSchema = z.object({
  description: z
    .string()
    .min(3, { message: 'Please, write your review before submit.' }),
})

type EditReviewCardFormData = z.infer<typeof editReviewCardFormSchema>

export function RatingCard({
  avatar_url,
  name,
  description,
  userId,
}: RatingCardProps) {
  const {
    register,
    watch,
    formState: { isSubmitting, errors },
  } = useForm<EditReviewCardFormData>({
    resolver: zodResolver(editReviewCardFormSchema),
    defaultValues: {
      description: description || '',
    },
  })

  const router = useRouter()

  const [openEditReviewBox, setOpenEditReviewBox] = useState(false)

  const characterCount = watch('description')?.split('').length || 0

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
              {...register('description')}
            />
            {errors.description && (
              <FormErrors>
                <span>{errors.description.message}</span>
              </FormErrors>
            )}
            <CharacterCounter>
              <span>{characterCount}</span>/450
            </CharacterCounter>
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
          </ReviewFormContainer>
        ) : (
          <BookDescription>
            <p>{description}</p>
          </BookDescription>
        )}
      </RatingContent>
      {myUser && (
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
