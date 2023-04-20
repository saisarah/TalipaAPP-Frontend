import FarmerPageHeader from "@/components/PageHeader/FarmerPageHeader";
import { TabLinks } from "@/components/TabLink";
import { useTabAdvance } from "@/helpers/hooks";
import { useCurrentGroup } from "@/query/queries/useCurrentGroup";
import { SettingOutlined } from "@ant-design/icons";
import { Badge, Spin } from "antd";
import { Link } from "react-router-dom";
import { GroupInvitations } from "./GroupInvitations/GroupInvitations";
import Posts from "./Posts/Posts";

export default function Group() {
  const { data: group, isLoading } = useCurrentGroup();
  const { outlet, tabs } = useTabAdvance({
    home: {
      title: "Home",
      element: <Posts />,
    },
    join: {
      title: "About",
      element: null,
    },
  });

  if (isLoading)
    return (
      <div className="flex justify-center py-16">
        <Spin tip="Please wait" />
      </div>
    );

  if (!group) return <GroupInvitations />;

  return (
    <div className="pb-4">
      <FarmerPageHeader back="/farmer" />
      <div className="relative aspect-video w-full bg-gray-500 md:aspect-auto md:h-56">
        <Link
          to="/farmer/groups/manage"
          className="absolute bottom-0 flex w-full items-center justify-between p-3 text-white"
        >
          <div>
            <div className="text-lg font-bold">{group.name}</div>
            <div className="text-xs">{group.type}</div>
          </div>
        </Link>
      </div>
      <TabLinks
        activeClassName="border-b border-primary text-primary"
        defaultClassName="flex items-center justify-center"
        className="sticky top-0 grid h-16 grid-cols-2 bg-white text-lg shadow-sm"
        tabs={tabs}
      />
      {group.pivot.role === "president" && group.pendings_count > 0 && (
        <Link
          to="/farmer/groups/requests"
          className="flex items-center bg-white p-3"
        >
          <SettingOutlined />
          <div className="ml-2 flex-grow">Member Requests</div>
          <Badge count={group.pendings_count} />
        </Link>
      )}

      {outlet}
    </div>
  );
}
