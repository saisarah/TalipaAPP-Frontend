import Http from "@/helpers/Http";
import { useQuery } from "@tanstack/react-query";
import { Navigate } from "react-router-dom";

const fetchGroupInvitations = async () => {
  const { data } = await Http.get("/farmer-groups/invitations");
  return data;
};

const useGroupInvitations = (option) => {
  return useQuery(
    ["farmer-groups", "invitations"],
    fetchGroupInvitations,
    option
  );
};

export const GroupInvitations = () => {
  const { data, isLoading } = useGroupInvitations();

  if (isLoading) return "Fetching invitations";

  if (data.length === 0) return <Navigate to="/farmer/groups/pending-request" replace />;

  return "Invitations";
};