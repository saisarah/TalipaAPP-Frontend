import { fetchPost } from "@/apis/PostApi";
import { useQuery } from "@tanstack/react-query";

export const usePostQuery = (post_id) => {
  return useQuery(["posts", post_id], () => fetchPost(post_id));
};
