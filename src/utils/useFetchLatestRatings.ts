import { RatingProps } from "@/@types/rating"
import axios from "axios"
import { useEffect, useState } from "react"
import { handleAxiosError } from "./handleAxiosError"

export function useFetchLatestRatings() {
  const [latestRatings, setLatestRatings] = useState<RatingProps[] | null>(null)
  
  const [isLatestRatingsRequestLoading, setIsLatestRatingsRequestLoading] = useState(true)

  useEffect(() => {
    const fetchLatestRatings = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/get-latest-ratings`,
        )

        if (response?.data) {
          setLatestRatings(response.data)
        }
      } catch (error) {
        handleAxiosError(error)
      } finally {
        setIsLatestRatingsRequestLoading(false)
      }
    }

    fetchLatestRatings()
  }, [])

  return { latestRatings, isLatestRatingsRequestLoading }
}
