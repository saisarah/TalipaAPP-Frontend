import { fetchOrder } from "@/apis/OrderApi"
import { useQuery } from "@tanstack/react-query"


export const useOrderQuery = (id) => {
    return useQuery(fetchOrder.key(id), () => fetchOrder(id))
}