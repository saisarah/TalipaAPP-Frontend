import FarmerPageHeader from "@/components/PageHeader/FarmerPageHeader";
import { useCurrentGroup } from "@/query/queries/useCurrentGroup";

export default function Manage()
{

  const { data: group, isLoading } = useCurrentGroup()

  if (isLoading) return "Loading...."

  return (
    <div>
      <FarmerPageHeader back="/farmer/groups" title={group.name}/>

      <div>

        <div>Member Requests</div>

      </div>

    </div>
  )
}