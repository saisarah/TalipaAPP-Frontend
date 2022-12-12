import { useQuery } from "@tanstack/react-query";
import { Spin } from "antd";
import { getGroups } from "../groups";
import GroupItem from "./GroupItem";

export default function SuggestedGroups() {
  const { data, isLoading } = useQuery(["groups"], getGroups);

  if (isLoading)
    return (
      <div className="flex flex-col items-center py-16">
        <Spin />
      </div>
    );

  return (
    <div className="divide-y divide-slate-200">
      {data.map((group) => (
        <GroupItem key={group.id} {...group} />
      ))}
    </div>
  );
}
