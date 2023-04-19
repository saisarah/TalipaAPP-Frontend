import FarmerPageHeader from "@/components/PageHeader/FarmerPageHeader";
import { usePendingInvitationsQuery } from "@/query/queries/useFarmerGroupsQuery";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { EmptySentInvitations } from "./components/EmptySentInvitations";
import { LoadingInvitations } from "./components/LoadingInvitations";


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
        ) : null}
      </div>
    </div>
  );
}
