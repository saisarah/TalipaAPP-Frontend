import { currentUserKey, fetchCurrentUser } from "@/apis/UserApi";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import queryKeyFactory from "../queryKeyFactory";

export default function useCurrentUserQuery() {
  const queryClient = useQueryClient();

  return useQuery(currentUserKey, fetchCurrentUser, {
    retry: 0,
    staleTime: 1000 * 60 * 60 * 2,
    onError(error) {
      console.log(JSON.stringify(error));
      if (error?.response?.status === 401) {
        queryClient.setQueryData(queryKeyFactory.currentUser, null);
      }
    },
  });
}
