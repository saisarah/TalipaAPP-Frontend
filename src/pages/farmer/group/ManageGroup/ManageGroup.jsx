import FarmerPageHeader from "@/components/PageHeader/FarmerPageHeader";
import { useCurrentGroup } from "@/query/queries/useCurrentGroup";
import { CaretRightOutlined, RightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

export default function ManageGroup() {
  const { data: group, isLoading } = useCurrentGroup();

  if (isLoading) return "Loading....";

  return (
    <div>
      <FarmerPageHeader back="/farmer/groups" title="Manage Group" />

      <div className="flex flex-col divide-y divide-slate-100">
        <Link to="/farmer/groups/requests" className="flex justify-between bg-white p-3">
          Pending Requests
          <RightOutlined />
        </Link>
        <div className="flex justify-between bg-white p-3">
          Invited Members
          <RightOutlined />
        </div>
        <div className="flex justify-between bg-white p-3">
          Members
          <RightOutlined />
        </div>
      </div>
    </div>
  );
}
