import { useQuery } from "@tanstack/react-query";
import { Spin } from "antd";
import { getPosts } from "../Posts/groups";
import GroupPosts from "./GroupPosts";

export default function SuggestedGroups() {
  const { data, isLoading } = useQuery(["groups"], getPosts);

  if (isLoading)
    return (
      <div className="flex flex-col items-center py-16">
        <Spin />
      </div>
    );

  return (
    <div className="divide-y divide-slate-200">
      {data.map((group) => (
        <GroupPosts key={group.id} {...group} />
      ))}
    </div>
  );
}
