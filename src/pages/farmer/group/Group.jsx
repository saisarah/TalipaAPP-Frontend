import Http from "@/helpers/Http";
import { useQuery } from "@tanstack/react-query";
import { Navigate } from "react-router-dom";

const HAS_INVITATION = false;

const fetchCurrentGroup = async () => {
  const { data } = await Http.get("/farmer-group");
  return data;
};




const useCurrentGroup = () => {
  return useQuery(["farmer-group"], fetchCurrentGroup);
};


export default function Group() {
  const { data, isLoading } = useCurrentGroup();

  if (isLoading) return "Loading";

  if (!data) return <Navigate to="/farmer/groups/invitations" replace/>;

  return "Group Page";
}
