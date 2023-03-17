import { fetchOrder } from "@/apis/OrderApi"
import { useQuery } from "@tanstack/react-query"


export const useOrderQuery = (id) => {
    return useQuery(['orders', id], () => fetchOrder(id))
}