import { useEffect, useState } from 'react'
import axios from 'axios'
import { RatingProps } from '@/@types/rating'
import { handleAxiosError } from './handleAxiosError'

export function useFetchUserRatings(userId: number | undefined, search: string) {
  const [userRatings, setUserRatings] = useState<RatingProps[] | null>(null)
  
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (userId) {
      const fetchUserRatings = async () => {
        setIsLoading(true)
        try {
          const response = await axios.get('http://localhost:8000/get-user-ratings', {
            params: { user_id: userId, search },
          })
          
          if (response?.data) {
            setUserRatings(response.data)
          }
        } catch (error) {
          handleAxiosError(error)
        } finally {
          setIsLoading(false)
        }
      }

      fetchUserRatings()
    }
  }, [userId, search])

  return { userRatings, isLoading }
}
