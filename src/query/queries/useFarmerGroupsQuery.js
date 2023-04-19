import { fetchFarmerGroups, fetchGroup, fetchPendingInvitations } from "@/apis/FarmerGroupApi";
import { useQuery } from "@tanstack/react-query";

export const useFarmerGroupsQuery = () => {
  return useQuery(["farmer-groups"], fetchFarmerGroups);
};

export const useFarmerGroupQuery = (id) => {
  return useQuery(["farmer-groups", id], () => fetchGroup(id));
};

export const usePendingInvitationsQuery = () => {
  return useQuery(
    fetchPendingInvitations.key(),
    fetchPendingInvitations
  );
};