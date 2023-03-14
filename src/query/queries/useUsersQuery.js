import { fetchUser } from "@/apis/UserApi";
import { useQuery } from "@tanstack/react-query";

export const useUserQuery = (id) => {
  return useQuery(fetchUser.key(id), fetchUser.fetcher(id));
};
