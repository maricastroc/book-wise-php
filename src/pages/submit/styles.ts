import { styled } from '../../styles'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: '0 1rem',
  minWidth: '100vw',
  alignItems: 'center',
  justifyContent: 'center',
  maxWidth: '100vw',
  overflowX: 'hidden',

  '@media (min-width: 480px)': {
    padding: '0 2rem',
  },

  '@media (min-width: 768px)': {
    flexDirection: 'row',
    height: '100%',
    alignItems: 'flex-start',
    padding: '0 2rem 0 1rem',
    paddingLeft: '18rem',
  },

  '@media (min-width: 1024px)': {
    gap: '3rem',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    height: '100vh',
  },

  '@media (min-width: 1440px)': {
    gap: '5rem',
    paddingLeft: '21rem',
  },
})

export const SubmitWrapper = styled('div', {
  display: 'flex',
  width: '100%',
  gap: '2.5rem',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  maxHeight: '100%',

  '@media (min-width: 980px)': {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem',
    paddingTop: '2rem',
  },
})

export const SubmitContainer = styled('div', {
  display: 'flex',
  width: '100%',
  gap: '3.8rem',
  alignItems: 'center',
  justifyContent: 'center',
  maxHeight: '100%',

  '@media (min-width: 480px)': {
    alignItems: 'center',
  },

  '@media (min-width: 1024px)': {
    gap: '2.5rem',
  },
})

export const MainContent = styled('div', {
  display: 'flex',
  padding: '0 1.25rem',
  gap: '3.8rem',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '30rem',
  minHeight: '100%',

  '@media (min-width: 980px)': {
    maxHeight: '100vh',
    padding: '0 1.25rem',
    minWidth: '26rem',
    maxWidth: '100%',
  },

  '@media (min-width: 1024px)': {
    gap: '2.5rem',
  },

  '@media (min-width: 1200px)': {
    maxWidth: '40rem',
  },
})

export const Heading = styled('div', {
  marginTop: '2.5rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.2rem',
  textAlign: 'center',

  h2: {
    fontSize: '$xl',
  },

  p: {
    marginTop: '0.8rem',
    color: '$gray200',
    fontSize: '0.9rem',
    lineHeight: '1.5rem',
  },

  '@media (min-width: 980px)': {
    textAlign: 'left',
  },
})

export const FormContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  width: '100%',
  maxHeight: '100%',

  '@media (min-width: 980px)': {
    maxHeight: '100vh',
    overflowY: 'scroll',
    paddingBottom: '2rem',
  },
})

export const FormContent = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  width: '100%',
  height: '100%',

  '@media (min-width: 980px)': {
    paddingRight: '1rem',
  },
})

export const SignUpBtn = styled('button', {
  backgroundColor: '$transparent',
  cursor: 'pointer',
  fontSize: '0.8rem',
  border: 'none',
  color: '$gray400',
  marginTop: '-1rem',

  '&:hover': {
    color: '$gray300',
    transition: '200ms',
  },

  '@media (min-width: 480px)': {
    fontSize: '0.9rem',
  },
})

export const Divider = styled('span', {
  display: 'block',
  backgroundColor: '$gray600',
  height: 0.5,
  color: '$gray300',
  width: '100%',
  marginTop: 1,

  '@media (min-width: 980px)': {
    display: 'none',
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

export const TextArea = styled('textarea', {
  width: '100%',
  marginTop: '1rem',
  backgroundColor: '$gray800',
  padding: '0.875rem 0.875rem 1.25rem',
  border: 'solid 1px $gray500',
  borderRadius: 8,
  height: 164,
  minHeight: 80,
  resize: 'none',
  color: '$white',
})

export const ImageInput = styled('div', {
  backgroundColor: 'transparent',
  border: 'solid 1px $gray500',
  color: '$gray100',
  padding: '0.4rem 0.6rem',
  fontSize: '0.95rem',
  borderRadius: 10,

  'input': {
    display: 'none',
  },

  'button': {
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

  'span': {
    marginLeft: '0.7rem',
  }
})

export const UserDetailsContainer = styled('div', {
  alignItems: 'flex-start',
  flexDirection: 'column',
  padding: '0 2rem',
  width: '100%',

  '@media (min-width: 980px)': {
    borderLeft: '2px solid $gray700',
    height: '100vh',
    overflow: 'scroll',
    padding: 0,
  },

  '@media (min-width: 1200px)': {
    borderLeft: '2px solid $gray700',
    width: '50%',
    height: '100vh',
    overflow: 'scroll',
  },
})

