import { styled } from '@/styles'

export const Container = styled('div', {
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column',
  padding: '2.5rem 3.5rem',
  borderRadius: 8,
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: '100%',
})

export const Header = styled('div', {
  display: 'flex',
  width: '5rem',
  margin: '0 auto',
  gap: '1rem',
  marginBottom: '5rem',
})

export const Main = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '3rem',
  width: '100%',
})