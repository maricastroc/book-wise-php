import { Check, Star, X } from 'phosphor-react'
import {
  ActionButton,
  AvatarContainer,
  AvatarDefault,
  ButtonsContainer,
  CharacterCounter,
  Container,
  ReviewForm,
  ReviewFormContainer,
  ReviewFormHeader,
  UserData,
} from './styles'

import { Rating } from 'react-simple-star-rating'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import 'react-toastify/dist/ReactToastify.css'
import { useState } from 'react'
import { FormErrors } from '@/components/shared/FormErrors'
import { useAuth } from '@/contexts/AuthContenxt'
import axios from 'axios'
import { toast } from 'react-toastify'
import { handleAxiosError } from '@/utils/handleAxiosError'
import { useFetchBooks } from '@/utils/useFetchBooks'

interface RatingCardFormProps {
  bookId: number
  onClose: () => void
  onCloseLateralMenu: () => void
}

const ratingCardFormSchema = z.object({
  review: z
    .string()
    .min(20, { message: 'Review must have at least 20 characters.' }),
  rate: z
  .number()
  .positive({ message: 'Please choose a rating from 1 to 5.' })
  .max(5),
})

type RatingCardFormData = z.infer<typeof ratingCardFormSchema>

export function RatingCardForm({
  bookId,
  onClose,
  onCloseLateralMenu,
}: RatingCardFormProps) {
  const { user } = useAuth();

  const [rate, setRate] = useState(0)

  const {
    register,
    watch,
    setValue,
    handleSubmit,
    setError,
    formState: { isSubmitting, errors },
  } = useForm<RatingCardFormData>({
    resolver: zodResolver(ratingCardFormSchema),
    defaultValues: {
      rate,
      review: '',
    },
  })

  const handleRate = (rate: number) => {
    setValue('rate', rate)
    setRate(rate)
  }

  const handleSubmitRating = async (data: RatingCardFormData) => {
    if (user) {
      if (rate === 0) {
        setError('rate', { message: 'Please choose a rate from 1 to 5.' });
      }
  
      const formData = new FormData()
  
      formData.append('rate', data.rate.toString())
      formData.append('review', data.review)
      formData.append('book_id', bookId.toString())
      formData.append('user_id', user.id.toString())
      formData.append('created_at', new Date().toISOString())
  
      try {
        await axios.post('http://localhost:8000/post-book-rating', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        })
  
        toast.success('Review successfully registered!')
        onCloseLateralMenu()
        onClose()
      } catch (error) {
        handleAxiosError(error)
      }
    }
  }

  const characterCount = watch('review')?.split('').length || 0

  return (
    user && (
      <Container onSubmit={handleSubmit(handleSubmitRating)}>
      <ReviewFormHeader>
        <UserData>
          <AvatarContainer>
            <AvatarDefault src={user.avatar_url} />
          </AvatarContainer>
          <p>{user.name}</p>
        </UserData>
        <Rating
          onClick={handleRate}
          emptyIcon={<Star size={20} />}
          fillIcon={<Star weight="fill" size={20} />}
          emptyColor="#8381D9"
          fillColor="#8381D9"
          {...register('rate')}
        />
      </ReviewFormHeader>
      <ReviewFormContainer>
        <ReviewForm
          placeholder="Write your review here"
          maxLength={450}
          spellCheck={false}
          {...register('review')}
        />
        <CharacterCounter>
          <span>{characterCount}</span>/450
        </CharacterCounter>
      </ReviewFormContainer>
      {errors.rate && 
        <FormErrors error={'Please choose a rate from 1 to 5.'} />
      }
      {errors.review && 
        <FormErrors error={errors.review.message} />
      }
      <ButtonsContainer>
        <ActionButton
          type="button"
          disabled={isSubmitting}
          onClick={() => onClose()}
        >
          <X color="#8381D9" />
        </ActionButton>
        <ActionButton type="submit" disabled={isSubmitting}>
          <Check color="#50B2C0" />
        </ActionButton>
      </ButtonsContainer>
    </Container>
    )
  )
}
