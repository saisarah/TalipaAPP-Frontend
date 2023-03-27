import { fetchDemands } from "@/apis/DemandApi"
import { useQuery } from "@tanstack/react-query"


export const useDemandsQuery = ({ crop_id } = {}) => {
    return useQuery(['demands', { crop_id }], () => fetchDemands({crop_id}))
}