import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import axios from 'axios'
import { handleAxiosError } from '@/utils/handleAxiosError'
import { UserProps } from '@/@types/user'

interface AuthContextData {
  user: UserProps | null
  token: string | null
  signIn: (data: { email: string; password: string }) => Promise<void>
  signOut: () => void
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserProps | null>(null)
  const [token, setToken] = useState<string | null>(null)

  useEffect(() => {
    const storedToken = localStorage.getItem('token')
    const storedUser = localStorage.getItem('user')

    if (storedToken && storedUser) {
      setToken(storedToken)
      setUser(JSON.parse(storedUser))
    }
  }, [])

  const signIn = async (data: { email: string; password: string }) => {
    try {
      const response = await axios.post('http://localhost:8000/sign-in', data)

      if (response.data.status === 'success') {
        const { token, user_id, name, email, avatar_url } = response.data

        const userData: UserProps = { id: user_id, name, avatar_url, email }
        setUser(userData)
        setToken(token)

        localStorage.setItem('token', token)
        localStorage.setItem('user', JSON.stringify(userData))
      } else {
        throw new Error(response.data.message || 'Login failed')
      }
    } catch (error) {
      handleAxiosError(error)
    }
  }

  const signOut = () => {
    setUser(null)
    setToken(null)
    localStorage.removeItem('token')
    localStorage.removeItem('user')
  }

  return (
    <AuthContext.Provider value={{ user, token, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
