import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchCurrentUser } from "../../apis/AuthApi";
import queryKeyFactory from "../queryKeyFactory";


export default function useCurrentUserQuery()
{
    const queryClient = useQueryClient()

    return useQuery(queryKeyFactory.currentUser, fetchCurrentUser, {
        retry: 0,
        staleTime: 1000 * 60 * 60 * 2,
        onError(error){
            if (error?.response.status === 401) {
                queryClient.setQueryData(queryKeyFactory.currentUser, null)
            }
        }
    })
}
