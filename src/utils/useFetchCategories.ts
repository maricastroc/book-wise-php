import { CategoryProps } from "@/@types/category"
import axios from "axios"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { handleAxiosError } from "./handleAxiosError"

export function useFetchCategories() {
  const [categories, setCategories] = useState<CategoryProps[] | null>(null)

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:8000/get-categories')

        if (response?.data) {
          setCategories(response.data)
        }
      } catch (error) {
        handleAxiosError(error)
      }
    }

    fetchCategories()
  }, [])

  return { categories }
}
