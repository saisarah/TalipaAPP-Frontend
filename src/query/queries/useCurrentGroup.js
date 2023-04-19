import { fetchCurrentGroup } from "@/apis/GroupApi";
import { useQuery } from "@tanstack/react-query";


export const useCurrentGroup = () => {
  return useQuery(["farmer-group"], fetchCurrentGroup);
};