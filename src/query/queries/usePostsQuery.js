import { fetchPost, fetchPosts, fetchUserPosts } from "@/apis/PostApi";
import { useQuery } from "@tanstack/react-query";

export const usePostQuery = (post_id) => {
  return useQuery(["posts", post_id], () => fetchPost(post_id));
};

export const usePostsQuery = () => {
  return useQuery(["posts"], fetchPosts);
};

export const useUserPostsQuery = (user_id) => {
  return useQuery(["users", user_id, "posts"], () => fetchUserPosts(user_id));
};
