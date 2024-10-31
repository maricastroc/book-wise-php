import { styled } from '@/styles'
import Link from 'next/link'

export const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  gap: '0.8rem',
})

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: '2rem',
  backgroundColor: '$gray700',
  borderRadius: 8,
  alignItems: 'flex-start',
  justifyContent: 'center',
  width: '100%',
  position: 'relative',
})

export const Heading = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',

  time: {
    color: '$gray400',
    fontSize: '$sm',
  },
})

export const UserInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem',
  width: '100%',

  '@media (min-width: 580px)': {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
})

export const BookContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',

  '@media (min-width: 580px)': {
    alignItems: 'flex-start',
    width: 'auto',
    justifyContent: 'flex-start',
  },

  '@media (min-width: 980px)': {
    flexDirection: 'row',
    gap: '1.5rem',
  },
})

export const BookCover = styled('img', {
  height: 'auto',
  borderRadius: 8,
  width: '7.5rem',
})

export const BookDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem',
  width: '100%',
})

export const BookData = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  gap: '1rem',

  '@media (min-width: 580px)': {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
    alignItems: 'stretch',
    textAlign: 'left',
  },
})

export const BookInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.8rem',

  '@media (min-width: 580px)': {
    justifyContent: 'space-between',
    minHeight: '100%',
    alignItems: 'flex-start',
  },
})

export const BookInfoText = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.2rem',

  h2: {
    fontSize: '$md',
  },

  p: {
    color: '$gray400',
    fontSize: '$sm',
  },

  '@media (min-width: 580px)': {
    alignItems: 'flex-start',
  },
})

export const BookDescription = styled('div', {
  maxHeight: '6.5rem',
  position: 'relative',
  overflow: 'scroll',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',

  p: {
    color: '$gray300',
    lineHeight: '160%',
    fontSize: '$sm',
    wordBreak: 'break-word',
    paddingRight: '0.3rem',
  },
})

export const Separator = styled('span', {
  width: '100%',
  height: 0.5,
  backgroundColor: '$gray400',
  opacity: 0.4,
})

export const ImageWrapper = styled(Link, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: 42,
  height: 42,

  borderRadius: '$full',
  background: '$gradient-vertical',
})

export const ReadNotice = styled('div', {
  display: 'flex',
  position: 'absolute',
  top: 0,
  right: 0,
  padding: '0.2rem 0.5rem',
  fontSize: '$xs',
  borderRadius: '0 8px 0 8px',
  backgroundColor: '$green300',
  color: '$green100',
})
