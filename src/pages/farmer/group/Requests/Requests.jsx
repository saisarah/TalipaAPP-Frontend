import FarmerPageHeader from "@/components/PageHeader/FarmerPageHeader";
import { usePendingMembersQuery } from "@/query/queries/usePendingMembersQuery";
import { EmptyPendingMembers } from "./components/EmptyPendingMembers";
import { LoadingPendingMembers } from "./components/LoadingPendingMembers";
import { RequestCard } from "./components/RequestCard";


export default function Requests() {
  const { data: pendingMembers, isLoading } = usePendingMembersQuery();

  return (
    <div>
      <FarmerPageHeader back="/farmer/groups" title="Pending Requests" />
      {isLoading ? (
        <LoadingPendingMembers />
      ) : pendingMembers.length === 0 ? (
        <EmptyPendingMembers />
      ) : (
        <div className="flex flex-col gap-3 p-3">
          {pendingMembers.map((member) => (
            <RequestCard key={member.id} {...member} />
          ))}
        </div>
      )}
    </div>
  );
}
