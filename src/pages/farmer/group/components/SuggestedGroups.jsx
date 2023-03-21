import { useFarmerGroupsQuery } from "@/query/queries/useFarmerGroupsQuery";
import { Spin } from "antd";
import GroupItem from "./GroupItem";

export default function SuggestedGroups() {
  const { data, isLoading } = useFarmerGroupsQuery

  if (isLoading)
    return (
      <div className="flex flex-col items-center py-16">
        <Spin />
      </div>
    );

  return (
    <>
      <div className=" divide-slate-200">
        {data.map((item) => (
          <GroupItem key={item.id} {...item} />
        ))}
      </div>
    </>
  );
}
