import { SignIn } from 'phosphor-react'
import { NextSeo } from 'next-seo'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useEffect, useRef, useState } from 'react'

import {
  Container,
  Divider,
  FormContainer,
  FormContent,
  Heading,
  ImageInput,
  Input,
  TextArea,
  UserDetailsContainer,
  SubmitContainer,
  MainContent,
  SubmitWrapper,
} from './styles'

import { CustomLabel } from '@/components/shared/Label'
import { InputContainer } from '@/components/shared/InputContainer'
import { FormErrors } from '@/components/shared/FormErrors'
import { CustomButton } from '@/components/shared/Button'
import { useAuth } from '@/contexts/AuthContenxt'
import { MobileHeader } from '@/components/MobileHeader'
import { Sidebar } from '@/components/Sidebar'
import { UserDetails } from '@/components/UserDetails'
import { handleAxiosError } from '@/utils/handleAxiosError'

const submitBookFormSchema = z.object({
  user_id: z.number(),
  author: z
    .string()
    .min(3, { message: 'Author must have at least 3 characters.' }),
  title: z
    .string()
    .min(3, { message: 'Title must have at least 3 characters.' }),
  summary: z
    .string()
    .min(20, { message: 'Summary must have at least 20 characters.' }),
  publishing_year: z.string().min(3, { message: 'Invalid year.' }),
  pages_number: z.string().min(1, { message: 'Pages number is required.' }),
  cover_url: z.custom<File>((file) => file instanceof File && file.size > 0, {
    message: 'Cover image is required.',
  }),
})

type SubmitBookFormData = z.infer<typeof submitBookFormSchema>

export default function Submit() {
  const [isMobile, setIsMobile] = useState(false)

  const { user } = useAuth()

  const inputFileRef = useRef<HTMLInputElement>(null)

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<SubmitBookFormData>({
    resolver: zodResolver(submitBookFormSchema),
    defaultValues: {
      title: '',
      author: '',
      summary: '',
      pages_number: undefined,
      publishing_year: undefined,
      cover_url: undefined,
    },
  })

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) setValue('cover_url', file)
  }

  const handleFileButtonClick = () => {
    inputFileRef.current?.click()
  }

  const handleSubmitBook = async (data: SubmitBookFormData) => {
    if (!user) {
      return
    }

    const formData = new FormData()
    formData.append('user_id', user.id.toString())
    formData.append('title', data.title)
    formData.append('summary', data.summary)
    formData.append('author', data.author)
    formData.append('pages_number', data.pages_number.toString())
    formData.append('publishing_year', data.publishing_year.toString())
    formData.append('cover_url', data.cover_url)
    formData.append('created_at', new Date().toISOString())

    try {
      await axios.post('http://localhost:8000/register-book', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })

      toast.success('Book successfully registered!')

      reset()
    } catch (error) {
      handleAxiosError(error)
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

  useEffect(() => {
    if (user) {
      setValue('user_id', user.id)
    }
  }, [user, setValue])

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
                <p>
                  Here you can submit a new book to our platform! Just fill the
                  fields above:
                </p>
              </Heading>
              <FormContainer>
                <FormContent onSubmit={handleSubmit(handleSubmitBook)}>
                  <InputContainer>
                    <CustomLabel>Book Title</CustomLabel>
                    <Input
                      placeholder="e.g. The Lord of the Rings"
                      {...register('title')}
                    />
                    {errors.title && (
                      <FormErrors error={errors.title.message} />
                    )}
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
            {user && <UserDetails userId={user.id} />}
          </UserDetailsContainer>
        </SubmitWrapper>
      </Container>
    </>
  )
}
