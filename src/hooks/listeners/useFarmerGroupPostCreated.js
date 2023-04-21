import { fetchGroupPosts } from "@/apis/FarmerGroupApi"
import { useQueryClient } from "@tanstack/react-query"
import useSocket from "../useSocket"


export const useFarmerGroupPostCreated = (farmer_group_id) => {
  const queryClient = useQueryClient()
  useSocket({
    channel: `farmer-groups.${farmer_group_id}`,
    event: 'FarmerGroupPostCreated',
    listener: () => {
      queryClient.invalidateQueries(fetchGroupPosts.key())
    }
  })
}