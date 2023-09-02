import { useState, useEffect } from "react"

function useGetFetch(url = "") {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    if (url) {
      fetch(url)
        .then(response => response.json())
        .then(responseData => setData(responseData))
        .catch(() => setIsError(true))
        .finally(() => setIsLoading(false))
    }
  }, [url])
  return { data, isLoading, isError }
}
export default useGetFetch
