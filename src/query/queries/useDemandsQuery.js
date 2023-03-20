import { fetchDemands } from "@/apis/DemandApi"
import { useQuery } from "@tanstack/react-query"


export const useDemandsQuery = () => {
    return useQuery(['demands'], () => fetchDemands())
}