import { StyledInput } from './styles'

export const CustomInput = ({
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) => {
  return <StyledInput {...props} />
}
