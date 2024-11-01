import { useCallback, useEffect, useState } from 'react'
import axios from 'axios'
import { handleAxiosError } from './handleAxiosError'
import { UserProps } from '@/@types/user'

export function useFetchUser(userId: number | null) {
  const [userData, setUserData] = useState<UserProps | null>(null)

  const fetchUser = useCallback(async () => {
    try {
      const response = await axios.get('http://localhost:8000/get-user', {
        params: { user_id: userId },
      })
      
      if (response?.data) {
        setUserData(response.data)
      }
    } catch (error) {
      handleAxiosError(error)
    }
  }, []);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return { userData, refetchUser: fetchUser }
}
