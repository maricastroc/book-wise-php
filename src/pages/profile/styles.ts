import { styled } from '../../styles'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: '0 1rem',
  minWidth: '100vw',
  alignItems: 'center',
  justifyContent: 'center',
  maxWidth: '100vw',

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
    overflow: 'hidden',
  },

  '@media (min-width: 1440px)': {
    gap: '5rem',
    paddingLeft: '21rem',
  },
})

export const ProfileWrapper = styled('div', {
  display: 'flex',
  width: '100%',
  gap: '2.5rem',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  maxHeight: '100%',
  paddingTop: '2rem',
  maxWidth: '32rem',

  '@media (min-width: 1024px)': {
    flexDirection: 'row',
    maxWidth: '100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    gap: '1rem',
  },
})

export const ProfileContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: 0,
  width: '100%',
  gap: 0,
  alignItems: 'flex-start',
  justifyContent: 'flex-start',

  '@media (min-width: 1024px)': {
    maxHeight: '100vh',
    padding: '0 1.25rem',
  },
})

export const MainContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  margin: '0 auto',
  width: '100%',
  minHeight: '100%',

  '@media (min-width: 1024px)': {
    minWidth: '26rem',
    maxWidth: '100%',
    gap: 0,
  },

  '@media (min-width: 1200px)': {
    maxWidth: '40rem',
  },
})

export const Heading = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  alignSelf: 'start',
  gap: '0.8rem',
  textAlign: 'left',
  marginBottom: '1rem',
  width: '100%',
})

export const HeadingTitle = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '0.8rem',

  h2: {
    fontSize: '1.5rem',
  },

  svg: {
    fontSize: '2rem',
    color: '$green100',
  },
})

export const Divider = styled('span', {
  display: 'block',
  backgroundColor: '$gray600',
  height: 0.5,
  color: '$gray300',
  width: '100%',
  marginTop: 1,

  '@media (min-width: 1024px)': {
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
  backgroundColor: '$gray800',
  padding: '0.875rem 0.875rem 1.25rem',
  border: 'solid 1px $gray500',
  borderRadius: 8,
  height: 164,
  minHeight: 80,
  resize: 'none',
  color: '$gray200',
  lineHeight: '1.3rem',
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

export const UserDetailsContainer = styled('div', {
  alignItems: 'flex-start',
  flexDirection: 'column',
  padding: '0 2rem',
  width: '100%',

  '@media (min-width: 1024px)': {
    borderLeft: '2px solid $gray700',
    height: '100vh',
    overflow: 'scroll',
    padding: 0,
    paddingBottom: '3rem',
  },

  '@media (min-width: 1200px)': {
    borderLeft: '2px solid $gray700',
    width: '50%',
    height: '100vh',
    overflow: 'scroll',
  },
})

export const SearchBar = styled('div', {
  display: 'flex',
  backgroundColor: '$gray800',
  border: 'solid 1px $gray500',
  borderRadius: 8,
  padding: '0.875rem 1.25rem',
  width: '100%',
  justifyContent: 'space-between',
  alignItems: 'center',

  input: {
    backgroundColor: 'transparent',
    border: 'none',
    color: '$white',

    '&:focus': {
      boxShadow: 'none',
      outline: 'none',
      padding: 'none',
    },

    '&::placeholder': {
      color: '$gray400',
    },
  },

  svg: {
    fontSize: '1.2rem',
    color: '$gray500',
  },

  '&:has(input:focus)': {
    borderColor: '$green200',
    padding: 'none',

    svg: {
      color: '$green200',
    },
  },

  '@media (min-width: 1024px)': {
    width: '100%',
    maxWidth: '100%',
  },
})

export const BooksContainer = styled('div', {
  marginTop: '2rem',
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  width: '100%',
  gap: '1.5rem',

  '@media (min-width: 768px)': {
    paddingRight: '1rem',
  },

  '@media (min-width: 1024px)': {
    overflowY: 'scroll',
    height: '100%',
    paddingBottom: '4rem',
    minWidth: '27rem',
  },

  '@media (min-width: 1200px)': {
    justifyContent: 'flex-start',
  },
})
