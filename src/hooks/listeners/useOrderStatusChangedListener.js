import { fetchOrder } from "@/apis/OrderApi"
import { useQueryClient } from "@tanstack/react-query"
import useSocket from "../useSocket"


export const useOrderStatusChangedListener = (order_id) => {

  const queryClient = useQueryClient()

  useSocket({
    channel: `orders.${order_id}`,
    event: 'OrderStatusChanged',
    listener: () => {
      queryClient.invalidateQueries(fetchOrder.key(order_id))
    }
  })
}