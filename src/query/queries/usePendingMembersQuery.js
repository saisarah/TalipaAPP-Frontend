import { fetchPendingMembers } from "@/apis/FarmerGroupApi";
import { useQuery } from "@tanstack/react-query";


export const usePendingMembersQuery = () => {
  return useQuery(
    fetchPendingMembers.key(), 
    fetchPendingMembers
  );
};