import { acceptOrder } from "@/apis/OrderApi"
import { useMutation } from "@tanstack/react-query"


export const useAcceptOrder = (id, option) => {
  return useMutation(
    () => acceptOrder(id),
    option
  )
}