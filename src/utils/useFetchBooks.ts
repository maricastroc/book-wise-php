import { useEffect, useState } from 'react'
import axios from 'axios'
import { BookProps } from '@/@types/book'
import { CategoryProps } from '@/@types/category'
import { handleAxiosError } from './handleAxiosError'

export function useFetchBooks(selectedCategory: CategoryProps | null, search: string) {
  const [books, setBooks] = useState<BookProps[]>()

  const [isBooksFetchLoading, setIsBooksFetchLoading] = useState(false)

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:8000/get-books', {
          params: {
            title: search,
            author: search,
            category_id: selectedCategory?.id ?? null,
          },
        })

        if (response?.data) {
          setBooks(response.data)
        }
      } catch (error) {
        handleAxiosError(error)
      } finally {
        setIsBooksFetchLoading(false)
      }
    }

    fetchBooks()
  }, [selectedCategory, search])

  return { books, isBooksFetchLoading }
}
