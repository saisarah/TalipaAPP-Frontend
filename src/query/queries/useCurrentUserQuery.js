import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchCurrentUser } from "../../apis/AuthApi";
import queryKeyFactory from "../queryKeyFactory";


export default function useCurrentUserQuery()
{
    return useQuery(queryKeyFactory.currentUser, fetchCurrentUser)
}
