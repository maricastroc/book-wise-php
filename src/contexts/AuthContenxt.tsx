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
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'

interface AuthContextData {
  user: UserProps | null
  token: string | null
  handleUpdateUser: (name: string, email: string, avatar_url: string) => void
  signIn: (data: { email: string; password: string }) => Promise<void>
  signOut: () => void
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export function AuthProvider({ children }: { children: ReactNode }) {
  const router = useRouter()

  const [user, setUser] = useState<UserProps | null>(null)
  
  const [token, setToken] = useState<string | null>(null)

  const handleUpdateUser = (name: string, email: string, avatar_url: string) => {
    const storedUser = localStorage.getItem('user');

    if (storedUser) {
        const userData = JSON.parse(storedUser);

        const updatedUser = {
            ...userData,
            name,
            email,
            avatar_url
        };
console.log(updatedUser)
        localStorage.setItem('user', JSON.stringify(updatedUser));

        setUser(updatedUser);
    }
};

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

        toast.success('Welcome to the Book Wise!')
        router.push('/home')
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
    <AuthContext.Provider value={{ user, token, signIn, signOut, handleUpdateUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
