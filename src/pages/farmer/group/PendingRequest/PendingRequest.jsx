import PageHeader from "@/components/PageHeader/PageHeader";
import { TabLinks } from "@/components/TabLink";
import { Button } from "antd";
import { Navigate } from "react-router-dom";
import Forum from "../components/Forum";
import Join from "../components/Join";
import { useTabAdvance } from "@/helpers/hooks";
import Http from "@/helpers/Http";
import { useQuery } from "@tanstack/react-query";
import SuggestedGroups from "../SuggestedGroups/SuggestedGroups";

const fetchPendingGroup = async () => {
  const { data } = await Http.get("/farmer-group/pending");
  return data;
};

const usePendingGroup = () => {
  return useQuery(["farmer-group", "pending"], fetchPendingGroup);
};

export const PendingRequest = () => {
  const { data, isLoading } = usePendingGroup();

  const { outlet, tabs } = useTabAdvance({
    join: {
      title: "Join",
      element: data && <Join data={data} />,
    },
    forum: {
      title: "Forum",
      element: <Forum />,
    },
  });

  if (isLoading) return "Fetching Loading group";

  if (!data) return <SuggestedGroups />;

  return (
    <div className="app-size bg-white">
      <PageHeader back="/farmer" title="Pending Request" />

      <div className="h-[80px] w-[100%] max-w-md flex-shrink-0 bg-slate-300"></div>
      <img
        className="mx-auto h-[75px] w-[75px] max-w-md flex-shrink-0 rounded-full bg-slate-300 ring"
        style={{ marginTop: "-45px" }}
      />
      <div className="my-6 text-center">
        <h1>{data.name}</h1>
        <h1>{data.type}</h1>
        <p>Members</p>
        <Button className="mx-auto">Cancel Request</Button>
      </div>

      <TabLinks
        activeClassName="border-b border-primary text-primary"
        defaultClassName="flex items-center justify-center"
        className="sticky top-0 grid h-16 grid-cols-2 bg-white text-lg shadow-md"
        tabs={tabs}
      />
      {outlet}
    </div>
  );
};