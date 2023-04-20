import Page from "@/components/Page";
import FarmerPageHeader from "@/components/PageHeader/FarmerPageHeader";
import PageHeader from "@/components/PageHeader/PageHeader";
import { useFarmerGroupsQuery } from "@/query/queries/useFarmerGroupsQuery";
import GroupItem from "./components/GroupItem";
import LoadingGroups from "./components/LoadingGroups";
import { Spin } from "antd";

export default function SuggestedGroups() {
  const { data, isLoading } = useFarmerGroupsQuery();

  return (
    <div className="bg-white lg:m-3 lg:border border-slate-300 lg:rounded-md overflow-hidden">
      <h1 className="hidden md:block text-2xl font-bold p-4">Suggested Groups</h1>
      <hr/>
      <FarmerPageHeader back="/farmer" title="Group" />
      {isLoading ? (
        <LoadingGroups />
      ) : (
        <div className=" divide-slate-200">
          {data.map((item) => (
            <GroupItem key={item.id} {...item} />
          ))}
        </div>
      )}
    </div>
  );
}
