import Page from "@/components/Page";
import PageHeader from "@/components/PageHeader/PageHeader";
import { useFarmerGroupsQuery } from "@/query/queries/useFarmerGroupsQuery";
import { Spin } from "antd";
import GroupItem from "./components/GroupItem";

export default function SuggestedGroups() {
  const { data, isLoading } = useFarmerGroupsQuery()

  if (isLoading)
    return (
      <Page>
        <PageHeader back="/farmer" title="Group" />
        <div className="flex flex-col items-center py-16">
          <Spin />
        </div>
      </Page>
    );

  return (
    <Page>
      <PageHeader back="/farmer" title="Group" />
      <div className=" divide-slate-200">
        {data.map((item) => (
          <GroupItem key={item.id} {...item} />
        ))}
      </div>
    </Page>
  );
}
