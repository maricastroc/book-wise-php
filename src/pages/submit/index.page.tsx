import { RocketLaunch, SignIn } from 'phosphor-react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useEffect, useRef, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'

import {
  Container,
  Divider,
  FormContainer,
  FormContent,
  Heading,
  ImageInput,
  Input,
  SignUpBtn,
  TextArea,
  UserDetailsContainer,
  SubmitContainer,
  MainContent,
  SubmitWrapper,
} from './styles'
import { SignUpModal } from '@/components/SignUpModal'
import { CustomLabel } from '@/components/shared/Label'
import { InputContainer } from '@/components/shared/InputContainer'
import { FormErrors } from '@/components/shared/FormErrors'
import { CustomButton } from '@/components/shared/Button'
import { useAuth } from '@/contexts/AuthContenxt'
import { MobileHeader } from '@/components/MobileHeader'
import { Sidebar } from '@/components/Sidebar'
import { UserDetails } from '@/components/UserDetails'

const submitBookFormSchema = z.object({
  user_id: z.number(),
  author: z.string().min(3, { message: 'E-mail is required.' }),
  title: z.string().min(3, { message: 'Password is required' }),
  summary: z.string().min(3, { message: 'Password is required' }),
  publishing_year: z.number(),
  pages_number: z.number(),
  cover_url: z.custom<File>(
    (file) => file instanceof File && file.size > 0,
    {
      message: 'Cover image is required.',
    },
  ),
})

type SubmitBookFormData = z.infer<typeof submitBookFormSchema>

export default function Submit() {
  const router = useRouter()

  const [isMobile, setIsMobile] = useState(false)

  const { user } = useAuth()

  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false)

  const inputFileRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { isSubmitting, errors },
  } = useForm<SubmitBookFormData>({
    resolver: zodResolver(submitBookFormSchema),
    defaultValues: { title: '', author: '', summary: '', pages_number: undefined, publishing_year: undefined, cover_url: undefined},
  })

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) setValue('cover_url', file)
  }

  const handleFileButtonClick = () => {
    inputFileRef.current?.click();
  };

  const handleSubmitBook = async (data: SubmitBookFormData) => {
    const formData = new FormData()
    formData.append('title', data.title)
    formData.append('summary', data.summary)
    formData.append('author', data.author)
    formData.append('cover_url', data.cover_url)
  
    try {
      await axios.post('http://localhost:8000/sign-up', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
  
      toast.success('Book successfully registered!')
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const errorMessage = typeof error.response.data.message === 'string'
          ? error.response.data.message
          : Object.values(error.response.data.message).join(', ')
        toast.error(errorMessage)
      } else {
        toast.error('Ooops, something went wrong. Please try again later.')
      }
    }
  }

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  
  return (
    <>
      <NextSeo title="Login | Book Wise" />
      <Container>
      {isMobile ? <MobileHeader /> : <Sidebar />}
        <SubmitWrapper>
        <SubmitContainer>
          <MainContent>
          <Heading>
            <h2>Missing a Book?</h2>
            <p>Here you can submit a new book to our platform! Just fill the fields above:</p>
          </Heading>
          <FormContainer>
            <FormContent onSubmit={handleSubmit(handleSubmitBook)}>
            <InputContainer>
              <CustomLabel>Book Title</CustomLabel>
              <Input
                placeholder="e.g. The Lord of the Rings"
                {...register('title')}
              />
              {errors.title && <FormErrors error={errors.title.message} />}
            </InputContainer>

            <InputContainer>
              <CustomLabel>Book Author</CustomLabel>
              <Input
                type="text"
                placeholder="e.g. J.R.R. Tolkien"
                {...register('author')}
              />
              {errors.author && (
                <FormErrors error={errors.author.message} />
              )}
            </InputContainer>
            <InputContainer>
              <CustomLabel>Book Summary</CustomLabel>
              <TextArea
                placeholder="e.g. The Lord of the Rings is the saga of a group of sometimes reluctant heroes who set forth to save their world from consummate evil. Its many worlds and creatures were drawn from Tolkien’s extensive knowledge of philology and folklore."
                {...register('summary')}
              />
              {errors.summary && (
                <FormErrors error={errors.summary.message} />
              )}
            </InputContainer>
            <InputContainer>
              <CustomLabel>Pages Number</CustomLabel>
              <Input
                type="number"
                placeholder="e.g. 1137"
                {...register('pages_number')}
              />
              {errors.pages_number && (
                <FormErrors error={errors.pages_number.message} />
              )}
            </InputContainer>
            <InputContainer>
              <CustomLabel>Publishing Year</CustomLabel>
              <Input
                type="number"
                placeholder="e.g. 1954"
                {...register('publishing_year')}
              />
              {errors.publishing_year && (
                <FormErrors error={errors.publishing_year.message} />
              )}
            </InputContainer>

            <InputContainer>
              <CustomLabel>Your avatar here</CustomLabel>
              <ImageInput>
                <input
                  type="file"
                  ref={inputFileRef}
                  style={{ display: 'none' }}
                  onChange={handleFileChange}
                />
                <button type="button" onClick={handleFileButtonClick}>
                  Choose File
                </button>
                <span>{watch('cover_url')?.name}</span>
              </ImageInput>
              {errors.cover_url && (
                <FormErrors error={errors.cover_url.message} />
              )}
            </InputContainer>
            <CustomButton
              type="submit"
              content="Sign in"
              icon={<SignIn size={24} />}
              disabled={isSubmitting}
            />
            </FormContent>
          </FormContainer>
          </MainContent>
        </SubmitContainer>
        <Divider />
        <UserDetailsContainer>
              {user && (
                <UserDetails
                  avatar_url={user.avatar_url}
                  name={user?.name}
                  total_pages={7890}
                  books_rated={5}
                  authors_read={34}
                  most_read_category={'Fiction'}
                />
              )}
            </UserDetailsContainer>
        </SubmitWrapper>
      </Container>
    </>
  )
}
