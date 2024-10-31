import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    '&:focus': {
      outline: '1px solid $purple100',
      boxShadow: '0 0 0 2px rgba(37, 45, 74, 1)',
      borderRadius: 8,
      border: 'solid 1px transparent',
    },
  },

  body: {
    backgroundColor: '$gray800',
    color: '$gray100',
    display: 'flex',
    justifyContent: 'center',
    '-webkit-font-smoothing': 'antialiased',
    minHeight: '100vh',
    maxWidth: '100vw',
    overflowX: 'hidden',

    '& *::-webkit-scrollbar': {
      width: 2,
      height: 2,
      borderRadius: 9999,
    },

    '& *::-webkit-scrollbar-corner': {
      backgroundColor: 'transparent',
    },

    '& *::-webkit-scrollbar-thumb': {
      width: 6,
      backgroundColor: '$gray500',
      borderRadius: 80,
      boxShadow: 'inset 0 0 0px 6px $gray500',
      border: '10px solid transparent',
    },

    '& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button': {
      WebkitAppearance: 'none',
      margin: 0,
    },

    '& input[type=number]': {
      MozAppearance: 'textfield',
    },
  },

  'body, input, textarea, button': {
    fontFamily: 'Nunito sans, sans-serif',
    fontWeight: 400,
  },
})
