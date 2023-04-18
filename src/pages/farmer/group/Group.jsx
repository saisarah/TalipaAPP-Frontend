import FarmerPageHeader from "@/components/PageHeader/FarmerPageHeader";
import { TabLinks } from "@/components/TabLink";
import Http from "@/helpers/Http";
import { useTabAdvance } from "@/helpers/hooks";
import { CaretRightOutlined } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import { Navigate } from "react-router-dom";
import Posts from "./Posts/Posts";

const fetchCurrentGroup = async () => {
  const { data } = await Http.get("/farmer-group");
  return data;
};

const useCurrentGroup = () => {
  return useQuery(["farmer-group"], fetchCurrentGroup);
};

export default function Group() {
  const { data:group, isLoading } = useCurrentGroup();
  const { outlet, tabs } = useTabAdvance({
    forum: {
      title: "Forum",
      element: <Posts />,
    },
    join: {
      title: "About",
      element: null,
    },
  });

  if (isLoading) return "Loading";

  if (!group) return <Navigate to="/farmer/groups/invitations" replace />;

  return (
    <div className="pb-4">
      <FarmerPageHeader back="/farmer" />
      <div className="relative aspect-video w-full bg-gray-500">
        <div className="absolute bottom-0 flex w-full items-center justify-between p-3 text-white">
          <div>
            <div className="text-lg font-bold">{group.name}</div>
            <div className="text-xs">{group.type}</div>
          </div>
          <CaretRightOutlined />
        </div>
      </div>
      <TabLinks
        activeClassName="border-b border-primary text-primary"
        defaultClassName="flex items-center justify-center"
        className="sticky top-0 grid h-16 grid-cols-2 bg-white text-lg shadow-sm"
        tabs={tabs}
      />

      {outlet}
    </div>
  );
}
