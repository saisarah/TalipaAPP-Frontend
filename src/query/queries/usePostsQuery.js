import { fetchPost } from "@/apis/Post";
import { useQuery } from "@tanstack/react-query";

export const usePost = (post_id) => {
  return useQuery(["posts", post_id], () => fetchPost(post_id));
};
