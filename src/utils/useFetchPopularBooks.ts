import { BookProps } from "@/@types/book"
import axios from "axios"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"

export function useFetchPopularBooks() {
  const [popularBooks, setPopularBooks] = useState<BookProps[] | null>(null)
  
  const [isPopularBooksRequestLoading, setIsPopularBooksRequestLoading] = useState(true)

  useEffect(() => {
    const fetchPopularBooks = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/get-popular-books`,
        )
  
        if (response?.data) {
          setPopularBooks(response.data)
        }
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          const errorMessage =
            typeof error.response.data.message === 'string'
              ? error.response.data.message
              : Object.values(error.response.data.message).join(', ')
          toast.error(errorMessage)
        } else {
          toast.error('Ooops, something went wrong. Please try again later.')
        }
      } finally {
        setIsPopularBooksRequestLoading(false)
      }
    }
  
    fetchPopularBooks()
  }, [])

  return { popularBooks, isPopularBooksRequestLoading }
}
