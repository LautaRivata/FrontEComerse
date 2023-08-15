import axios from "axios"
import { useMutation } from "@tanstack/react-query"

const postOrder = order => axios.post("/api/orders", order)

const useOrderMutation = () => {
  const {
    mutate: createOrder,
    isError,
    isLoading,
  } = useMutation({ mutationFn: postOrder })

  return { createOrder, isLoading, isError }
}

export default useOrderMutation
