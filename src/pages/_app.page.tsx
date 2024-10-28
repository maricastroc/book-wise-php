import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import { StyledToastContainer } from './home/styles'
import 'react-toastify/dist/ReactToastify.css'

globalStyles()

export default function App({
  Component,
  pageProps: { ...pageProps },
}: AppProps) {
  return (
    <>
      <StyledToastContainer />
      <Component {...pageProps} />
    </>
  )
}
