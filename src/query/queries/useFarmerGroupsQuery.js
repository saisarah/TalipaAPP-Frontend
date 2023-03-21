import { fetchFarmerGroups } from "@/apis/FarmerGroupApi";
import { useQuery } from "@tanstack/react-query";

export const useFarmerGroupsQuery = () => {
  return useQuery(["farmer-groups"], fetchFarmerGroups);
};
