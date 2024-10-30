import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { toast } from 'react-toastify'

import {
  Overlay,
  Description,
  Title,
  Content,
  CloseButton,
  FormContainer,
  ImageInput,
  Input,
} from './styles'
import { CustomLabel } from '../shared/Label'
import { FormErrors } from '../shared/FormErrors'
import { InputContainer } from '../shared/InputContainer'
import { CustomButton } from '../shared/Button'
import { useRef } from 'react'
import { simulateDelay } from '@/utils/simulateDelay'

interface SignUpModalProps {
  onClose: () => void
}

const signUpFormSchema = z
  .object({
    email: z.string().min(3, { message: 'E-mail is required.' }),
    password: z
      .string()
      .min(8, { message: 'Password must be at least 8 characters long.' }),
    password_confirm: z
      .string()
      .min(8, { message: 'Password must be at least 8 characters long.' }),
    name: z.string().min(3, { message: 'Name is required.' }),
    avatar_url: z.custom<File>(
      (file) => file instanceof File && file.size > 0,
      {
        message: 'Avatar file is required.',
      },
    ),
  })
  .refine((data) => data.password === data.password_confirm, {
    message: "Passwords don't match",
    path: ['password_confirm'],
  })

type SignUpFormData = z.infer<typeof signUpFormSchema>

export function SignUpModal({ onClose }: SignUpModalProps) {
  const inputFileRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    watch,
    formState: { isSubmitting, errors },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      email: '',
      password: '',
      password_confirm: '',
      name: '',
    },
  })

  const handleSignUp = async (data: SignUpFormData) => {
    const formData = new FormData()
    formData.append('email', data.email)
    formData.append('password', data.password)
    formData.append('name', data.name)
    formData.append('avatar_url', data.avatar_url)
  
    try {
      await axios.post('http://localhost:8000/sign-up', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
  
      toast.success('User successfully registered!')
      onClose()
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

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) setValue('avatar_url', file)
  }

  const handleFileButtonClick = () => {
    inputFileRef.current?.click();
  };

  return (
    <Dialog.Portal>
      <Overlay className="DialogOverlay" />

      <Content className="DialogContent">
        <CloseButton>
          <X alt="Close" />
        </CloseButton>
        <Title className="DialogTitle">
          Please, fill the fields above to sign up.
        </Title>

        <Description className="DialogDescription">
          <FormContainer>
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
                <span>{watch('avatar_url')?.name}</span>
              </ImageInput>
              {errors.avatar_url && (
                <FormErrors error={errors.avatar_url.message} />
              )}
            </InputContainer>

            <InputContainer>
              <CustomLabel>Your name here</CustomLabel>
              <Input
                type="text"
                placeholder="Jon Doe"
                {...register('name')}
              />
              {errors.name && <FormErrors error={errors.name.message} />}
            </InputContainer>

            <InputContainer>
              <CustomLabel>Your e-mail here</CustomLabel>
              <Input
                placeholder="myuser@email.com"
                {...register('email')}
              />
              {errors.email && <FormErrors error={errors.email.message} />}
            </InputContainer>

            <InputContainer>
              <CustomLabel>Your password here</CustomLabel>
              <Input
                type="password"
                placeholder="password"
                {...register('password')}
              />
              {errors.password && (
                <FormErrors error={errors.password.message} />
              )}
            </InputContainer>

            <InputContainer>
              <CustomLabel>Confirm your password</CustomLabel>
              <Input
                type="password"
                placeholder="confirm password"
                {...register('password_confirm')}
              />
              {errors.password_confirm && (
                <FormErrors error={errors.password_confirm.message} />
              )}
            </InputContainer>

            <CustomButton
              content="Sign Up"
              onClick={handleSubmit(handleSignUp)}
              disabled={isSubmitting}
            />
          </FormContainer>
        </Description>
      </Content>
    </Dialog.Portal>
  )
}
