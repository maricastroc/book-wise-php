import { styled } from '@/styles'

export const Container = styled('div', {
  display: 'flex',
  backgroundColor: 'gray800',
  padding: '1.5rem',
  width: '100%',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  '@media (min-width: 1200px)': {
    marginTop: '1.5rem',
  },
})

export const UserInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',

  h2: {
    fontSize: '1.25rem',
    color: '$white',
  },

  time: {
    fontSize: '0.85rem',
    color: '$gray400',
  },
})

export const EditUserBtn = styled('button', {
  backgroundColor: 'transparent',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.7rem',
  cursor: 'pointer',
  color: '$green100',
  padding: '0.3rem',
  fontSize: '0.85rem',
  borderRadius: 10,
  border: 'solid 1px $green100',
  width: '7rem',
  marginTop: '1rem',

  svg: {
    color: '$green100',
  },

  '&:hover': {
    backgroundColor: '$green200',
    color: '#FFFFFF',
    transition: '200ms',
    border: 'solid 1px $green200',

    svg: {
      color: '#FFFFFF',
    },
  },

  '&:focus': {
    outline: '1px solid $green200',
  },
})

export const Separator = styled('span', {
  width: 30,
  background: '$gradient-horizontal',
  borderRadius: 8,
  height: 4,
  margin: '2.8rem 0',
})

export const UserInfoContainer = styled('div', {
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2.5rem',
  paddingLeft: '6.5rem',
})

export const UserInfoItem = styled('div', {
  display: 'flex',
  alignItems: 'center',
  width: '15rem',
  gap: '1rem',

  svg: {
    fontSize: '2rem',
    color: '$green100',
  },

  '@media (min-width: 580px)': {
    svg: {
      fontSize: '2.1rem',
    },
  },
})

export const ItemText = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '0.1rem',

  p: {
    fontSize: '0.875rem',
    color: '$gray300',
  },

  h2: {
    fontSize: '1rem',
    color: '$white',
  },

  '@media (min-width: 580px)': {
    h2: {
      fontSize: '1rem',
    },
  },
})

export const AvatarContainer = styled('a', {
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 70,
  height: 70,
  borderRadius: '50%',
  background: '$gradient-vertical',
  marginBottom: '1.5rem',
})

export const AvatarDefault = styled('img', {
  overflow: 'hidden',
  objectFit: 'cover',
  borderRadius: '50%',
  width: 66,
  aspectRatio: 'auto 68 / 68',
  height: 66,
})
