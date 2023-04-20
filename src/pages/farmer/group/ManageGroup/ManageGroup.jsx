import FarmerPageHeader from "@/components/PageHeader/FarmerPageHeader";
import { useCurrentGroup } from "@/query/queries/useCurrentGroup";
import { CaretRightOutlined, RightOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import { Link } from "react-router-dom";

export default function ManageGroup() {
  const { data: group, isLoading } = useCurrentGroup();

  if (isLoading)
    return (
      <div className="flex justify-center py-16">
        <Spin tip="Please wait " />
      </div>
    );

  return (
    <div>
      <FarmerPageHeader back="/farmer/groups" title="Manage Group" />

      <div className="flex flex-col divide-y divide-slate-100">
        <Link
          to="/farmer/groups/requests"
          className="flex justify-between bg-white p-3"
        >
          Pending Requests
          <RightOutlined />
        </Link>
        <Link
          to="/farmer/groups/invitations"
          className="flex justify-between bg-white p-3"
        >
          Invited Members
          <RightOutlined />
        </Link>
        <div className="flex justify-between bg-white p-3">
          Members
          <RightOutlined />
        </div>
      </div>
    </div>
  );
}
