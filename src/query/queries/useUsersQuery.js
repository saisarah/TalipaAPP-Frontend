import { fetchUser, fetchUserThread } from "@/apis/UserApi";
import { useQuery } from "@tanstack/react-query";

export const useUserQuery = (id) => {
  return useQuery(fetchUser.key(id), fetchUser.fetcher(id));
};

export const useUserThread = (user_id) => {
  return useQuery(
    ['users', parseInt(user_id), 'thread'],
    () => fetchUserThread(user_id), {
      enabled: !!user_id
    }
  )
}