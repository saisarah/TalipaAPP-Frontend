import FarmerPageHeader from "@/components/PageHeader/FarmerPageHeader";
import { usePendingInvitationsQuery } from "@/query/queries/useFarmerGroupsQuery";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { EmptySentInvitations } from "./components/EmptySentInvitations";
import { LoadingInvitations } from "./components/LoadingInvitations";


const InvitationCard = ({ user }) => {
  return (
    <div className="rounded border border-slate-300 bg-white p-3 mt-3">
      <div className="flex items-center">
        <img
          className="aspect-square w-10 rounded border border-slate-200"
          src={user.profile_picture}
        />
        <div className="ml-3 flex flex-col">
          <div className="text-sm font-bold">{user.fullname}</div>
          <div className="text-xs text-slate-500">{user.address.municipality} {user.address.province}</div>
        </div>
      </div>

      <div className="mt-3 flex justify-end gap-3">
        <Button type="default">Cancel Invite</Button>
      </div>
    </div>
  );
}

export default function PendingInvitations() {
  const { data, isLoading } = usePendingInvitationsQuery();

  return (
    <div>
      <FarmerPageHeader back="/farmer/groups/manage" title="Group" />
      <div className="p-3">
        <Link to="/farmer/groups/invite">
          <Button size="large" block>
            Invite New Member
          </Button>
        </Link>
        {isLoading ? (
          <LoadingInvitations />
        ) : data.length === 0 ? (
          <EmptySentInvitations />
        ) : data.map(user => <InvitationCard key={user.id} {...user} />)}
      </div>
    </div>
  );
}
