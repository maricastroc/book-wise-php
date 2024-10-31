import { styled } from '@/styles'

import {
  Overlay as RadixOverlay,
  Content as RadixContent,
  Title as RadixTitle,
  Description as RadixDescription,
  Close as RadixClose,
} from '@radix-ui/react-dialog'

export const Overlay = styled(RadixOverlay, {
  position: 'fixed',
  width: '100%',
  height: '100vh',
  inset: 0,
  zIndex: 2,
  backgroundColor: 'rgba(10, 10, 10, 0.7)',
})

export const Content = styled(RadixContent, {
  padding: '3rem 1rem',
  backgroundColor: '$gray700',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'clamp(300px, 80vw, 300px)',
  borderRadius: '4px',
  zIndex: 9999,
  overflow: 'scroll',
  border: 'solid 1px $gray500',

  '@media (min-width: 480px)': {
    padding: '3rem',
    width: 'clamp(300px, 85vw, 460px)',
  },

  '@media (min-width: 768px)': {
    width: 'clamp(20rem, 80vw, 40rem)',
    height: 'clamp(20rem, 80vh, 30rem)',
  },
})

export const Title = styled(RadixTitle, {
  color: '$gray100',
  fontSize: '1.1rem',
  marginTop: '1rem',
  marginBottom: '2rem',
  textAlign: 'center',

  '@media (min-width: 480px)': {
    marginTop: 0,
    textAlign: 'left',
  },
})

export const Description = styled(RadixDescription, {
  fontSize: '0.9rem',
  width: '100%',
  marginTop: '1rem',
  textAlign: 'left',
  color: '$gray300',
  lineHeight: '180%',
})

export const CloseButton = styled(RadixClose, {
  color: '$gray300',
  fontWeight: '700',
  position: 'absolute',
  display: 'flex',
  transform: 'translate(-50%, -50%)',
  top: '8%',
  left: '93%',
  cursor: 'pointer',
  backgroundColor: '$gray700',
  border: '0',

  svg: {
    color: '$gray300',
    fontSize: '1.3rem',
  },

  '&:hover': {
    transition: '200ms',

    svg: {
      color: '$purple100',
    },
  },

  '&:focus': {
    boxShadow: '0 0 0 2px $purple100',
  },

  '@media (min-width: 480px)': {
    top: '13%',
    left: '93%',
  },
})

export const FormContainer = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  width: '100%',
  alignItems: 'center',
})

export const ImageInput = styled('div', {
  backgroundColor: 'transparent',
  border: 'solid 1px $gray500',
  color: '$gray100',
  padding: '0.4rem 0.6rem',
  fontSize: '0.95rem',
  borderRadius: 10,

  input: {
    display: 'none',
  },

  button: {
    backgroundColor: '$gray600',
    color: '$gray100',
    padding: '0.2rem 0.7rem',
    cursor: 'pointer',
    borderRadius: 8,
    fontSize: '0.8rem',
    border: 'none',

    '&:hover': {
      transition: '200ms',
      backgroundColor: '$gray500',

      svg: {
        backgroundColor: '$gray500',
      },
    },
  },

  span: {
    marginLeft: '0.7rem',
  },
})

export const Input = styled('input', {
  backgroundColor: 'transparent',
  border: 'solid 1px $gray500',
  color: '$gray100',
  padding: '0.6rem',
  fontSize: '0.95rem',
  borderRadius: 10,
})
