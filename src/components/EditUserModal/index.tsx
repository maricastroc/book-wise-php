import * as Dialog from '@radix-ui/react-dialog';
import { Check, Pencil, UploadSimple, User, X } from 'phosphor-react';
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useEffect, useRef, useState } from 'react';
import * as Checkbox from "@radix-ui/react-checkbox";

import {
  Overlay,
  Description,
  Title,
  Content,
  StyledCheckbox,
  StyledIndicator,
  CloseButton,
  FormContainer,
  ImageInput,
  Input,
  ImagePreview,
  EditBtn,
  PreviewContainer,
  AvatarSectionContainer,
  Header,
  ChangePasswordInputContainer,
} from './styles';
import { CustomLabel } from '../shared/Label';
import { FormErrors } from '../shared/FormErrors';
import { InputContainer } from '../shared/InputContainer';
import { CustomButton } from '../shared/Button';
import { handleAxiosError } from '@/utils/handleAxiosError';
import { useAuth } from '@/contexts/AuthContenxt';
import { useFetchUser } from '@/utils/useFetchUser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { UserProps } from '@/@types/user';

interface SignUpModalProps {
  userId: number,
  onClose: () => void;
}

const signUpFormSchema = (changePassword: boolean) => z
  .object({
    email: z.string().min(3, { message: 'E-mail is required.' }),
    old_password: changePassword
      ? z.string().min(8, { message: 'Old password is required.' })
      : z.string().optional(),
    password: changePassword
      ? z.string().min(8, { message: 'Password must be at least 8 characters long.' })
      : z.string().optional(),
    password_confirm: changePassword
      ? z.string().min(8, { message: 'Password must be at least 8 characters long.' })
      : z.string().optional(),
    name: z.string().min(3, { message: 'Name is required.' }),
    avatar_url: z.custom<File>((file) => file instanceof File && file.size > 0).optional(),
  })
  .refine((data) => changePassword ? data.password === data.password_confirm : true, {
    message: "Passwords don't match",
    path: ['password_confirm'],
  });

  type SignUpFormData = z.infer<ReturnType<typeof signUpFormSchema>>;

export function EditUserModal({ userId, onClose }: SignUpModalProps) {
  const inputFileRef = useRef<HTMLInputElement>(null);

  const [avatarUrl, setAvatarUrl] = useState<string | null>(null)

  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);

  const [changePassword, setChangePassword] = useState(false);

  const { userData } = useFetchUser(userId)

  const { handleUpdateUser } = useAuth()

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { isSubmitting, errors },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpFormSchema(changePassword)),
    defaultValues: {
      email: '',
      name: '',
      password: '',
      password_confirm: '',
    },
  });

  const handleUpdateProfile = async (data: SignUpFormData) => {
    if (userData) {
      const formData = new FormData();
    formData.append('email', data.email);
    formData.append('name', data.name);
    formData.append('user_id', userData.id.toString());

    if (data.avatar_url) {
      formData.append('avatar_url', data.avatar_url);
    }

    if (data.old_password) {
      formData.append('old_password', data.old_password);
    }

    if (data.password) {
      formData.append('password', data.password);
    }

    try {
      const response = await axios.post('http://localhost:8000/edit-user', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      if (response.data.status === 'success') {
        console.log(response.data)
        handleUpdateUser(response.data.user.name, response.data.user.email, response.data.user.avatar_url);
      
        toast.success(response.data.message);
        console.log(response.data.message)
        onClose();
      }
    } catch (error) {
      console.log('hi')
      handleAxiosError(error);
    }
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setValue('avatar_url', file);

      // Criar URL para o preview
      const reader = new FileReader();
      reader.onload = () => {
        setAvatarPreview(reader.result as string); // Atualiza o estado do preview
      };
      reader.readAsDataURL(file); // Lê o arquivo como uma URL de dados
    }
  };

  const handleFileButtonClick = () => {
    inputFileRef.current?.click();
  };

  useEffect(() => {
    if (userData) {
      setAvatarPreview(`../${userData.avatar_url}`)

      setAvatarUrl(`../${userData.avatar_url}`)

      setValue('name', userData.name)

      setValue('email', userData.email)
    }
  }, [userData])

  return (
    <Dialog.Portal>
      <Overlay className="DialogOverlay" />

      <Content className="DialogContent">
        <Header>
          <Title className="DialogTitle">
            Please, fill the fields above to sign up.
          </Title>
          <CloseButton>
            <X alt="Close" />
          </CloseButton>
        </Header>

        <Description className="DialogDescription">
          <FormContainer>
            <AvatarSectionContainer>
              <PreviewContainer>
                <ImagePreview>
                  {avatarPreview ? (
                    <img
                      src={avatarPreview}
                      alt="Avatar Preview"
                    />
                  ) : (
                    <User />
                  )}
                </ImagePreview>
                <EditBtn type="button" onClick={handleFileButtonClick}>
                  <Pencil/>
                </EditBtn>
              </PreviewContainer>
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
                  <span>{!watch('avatar_url')?.name ? avatarUrl : watch('avatar_url')?.name}</span>
                </ImageInput>
                {errors.avatar_url && (
                  <FormErrors error={errors.avatar_url.message} />
                )}
              </InputContainer>
            </AvatarSectionContainer>
            <InputContainer>
              <CustomLabel>Your name here</CustomLabel>
              <Input type="text" placeholder="Jon Doe" {...register('name')} />
              {errors.name && <FormErrors error={errors.name.message} />}
            </InputContainer>

            <InputContainer>
              <CustomLabel>Your e-mail here</CustomLabel>
              <Input placeholder="myuser@email.com" {...register('email')} />
              {errors.email && <FormErrors error={errors.email.message} />}
            </InputContainer>

            <ChangePasswordInputContainer>
              <StyledCheckbox className="CheckboxRoot" defaultChecked={changePassword} id="c1" onCheckedChange={() => setChangePassword(!changePassword)}>
                <StyledIndicator className="CheckboxIndicator">
                  <FontAwesomeIcon icon={faCheck} />
                </StyledIndicator>
              </StyledCheckbox>
              <CustomLabel>Change password?</CustomLabel>
              </ChangePasswordInputContainer>

            {changePassword && (
<>
<InputContainer>
              <CustomLabel>Your current password here</CustomLabel>
              <Input
                type="password"
                placeholder="password"
                {...register('old_password')}
              />
              {errors.password && (
                <FormErrors error={errors.password.message} />
              )}
            </InputContainer>
                            <InputContainer>
                            <CustomLabel>Your new password here</CustomLabel>
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
                            <CustomLabel>Confirm your new password</CustomLabel>
                            <Input
                              type="password"
                              placeholder="confirm password"
                              {...register('password_confirm')}
                            />
                            {errors.password_confirm && (
                              <FormErrors error={errors.password_confirm.message} />
                            )}
                          </InputContainer>
</>
            )}

            <CustomButton
              content="Update Profile"
              onClick={handleSubmit(handleUpdateProfile)}
              disabled={isSubmitting}
            />
          </FormContainer>
        </Description>
      </Content>
    </Dialog.Portal>
  );
}
