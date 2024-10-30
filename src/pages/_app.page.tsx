import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import { StyledToastContainer } from './home/styles'
import 'react-toastify/dist/ReactToastify.css'
import { AuthProvider } from '@/contexts/AuthContenxt'

globalStyles()

export default function App({
  Component,
  pageProps: { ...pageProps },
}: AppProps) {
  return (
    <>
      <AuthProvider>
        <StyledToastContainer />
        <Component {...pageProps} />
      </AuthProvider>
    </>
  )
}
