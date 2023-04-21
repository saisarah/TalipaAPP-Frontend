import { fetchGroupPostComments } from "@/apis/FarmerGroupApi"
import { useQueryClient } from "@tanstack/react-query"
import useSocket from "../useSocket"


export const useFarmerGroupPostsCommentCreated = (post_id) => {

  const queryClient = useQueryClient()

  useSocket({
    channel: `farmer-group-posts.${post_id}`,
    event: 'FarmerGroupPostsCommentCreated',
    listener() {
      queryClient.invalidateQueries(fetchGroupPostComments.key(post_id))
    }
  })
}