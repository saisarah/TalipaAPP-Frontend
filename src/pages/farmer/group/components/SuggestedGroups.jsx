import Http from "@/helpers/Http";
import { useQuery } from "@tanstack/react-query";
import { Spin } from "antd";
import GroupItem from "./GroupItem";

const fetchFarmerGroups = async function () {
  const result = await Http.get("farmer-groups");
  return result.data;
};

export default function SuggestedGroups() {
  const { data, isLoading, error, isError } = useQuery(
    ["farmer-groups"],
    fetchFarmerGroups
  );

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
