import FarmerPageHeader from "@/components/PageHeader/FarmerPageHeader";
import Http from "@/helpers/Http";
import { useQuery } from "@tanstack/react-query";
import { Button } from "antd";
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

  const [group] = data

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <FarmerPageHeader back="/farmer" title="Group"/>
      <div className="flex-grow flex flex-col justify-center items-center">
        <div className="font-bold text-lg">Group Invitation</div>
        <div>from <span className="font-bold">{group.president.user.fullname}</span></div>
        <img className="w-20 aspect-square rounded-full mt-4" src={group.image_url} />
        <div className="mt-4 text-center px-8">
          <span className="font-bold">{group.president.user.fullname}</span> has sent you an invitation to join <span className="font-bold">{group.name}</span>
          <div>Do you want to join?</div>
        </div>
        <div className="flex gap-4 mt-4 justify-center">
          <Button type="primary">Accept</Button>
          <Button type="default">Decline</Button>
        </div>
      </div>
    </div>
  );
};