import { RocketLaunch, SignIn } from 'phosphor-react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'

import {
  Container,
  CoverContainer,
  Divider,
  FormContainer,
  Heading,
  Input,
  Separator,
  SignUpBtn,
  WelcomeContainer,
  WelcomeContent,
} from './styles'
import CoverImage from '../../../public/assets/cover.png'
import Logo from '../../../public/assets/logo.svg'
import { SignUpModal } from '@/components/SignUpModal'
import { CustomLabel } from '@/components/shared/Label'
import { InputContainer } from '@/components/shared/InputContainer'
import { FormErrors } from '@/components/shared/FormErrors'
import { CustomButton } from '@/components/shared/Button'
import { useAuth } from '@/contexts/AuthContenxt'

const loginFormSchema = z.object({
  email: z.string().min(3, { message: 'E-mail is required.' }),
  password: z.string().min(3, { message: 'Password is required' }),
})

type LoginFormData = z.infer<typeof loginFormSchema>

export default function Login() {
  const router = useRouter()

  const { signIn } = useAuth()

  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: { email: '', password: '' },
  })

  const handleSignIn = async (data: LoginFormData) => {
    try {
      await signIn(data)
      toast.success('Welcome to the Book Wise!')
      router.push('/home')
    } catch (error) {
      if (error) {
        toast.error(error as string)
        return
      }

      toast.error('An unexpected error occurred.')
    }
  }
  return (
    <>
      <NextSeo title="Login | Book Wise" />
      <Container>
        <CoverContainer>
          <Image
            src={Logo}
            alt="Application logo."
            width={210}
            quality={100}
            className="logo_image"
          />
          <Image
            src={CoverImage}
            alt="Cover image with a reading theme."
            width={700}
            quality={100}
            className="cover_image"
          />
        </CoverContainer>
        <Separator />

        <WelcomeContainer>
          <WelcomeContent>
          <Heading>
            <h2>Welcome!</h2>
            <p>Please, login or enter as a guest.</p>
          </Heading>
          <FormContainer onSubmit={handleSubmit(handleSignIn)}>
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

            <Dialog.Root>
              <Dialog.Trigger asChild>
                <SignUpBtn
                  type="button"
                  onClick={() => setIsSignUpModalOpen(true)}
                >
                  Still don't have an account? Click here to sign up!
                </SignUpBtn>
              </Dialog.Trigger>
              {isSignUpModalOpen && (
                <SignUpModal onClose={() => setIsSignUpModalOpen(false)} />
              )}
            </Dialog.Root>

            <CustomButton
              type="submit"
              content="Sign in"
              icon={<SignIn size={24} />}
              disabled={isSubmitting}
            />
            <Divider />
            <CustomButton
              type="button"
              onClick={() => router.push('/home')}
              content="Access as a guest"
              icon={<RocketLaunch size={24} />}
              disabled={isSubmitting}
            />
          </FormContainer>
          </WelcomeContent>
        </WelcomeContainer>
      </Container>
    </>
  )
}
