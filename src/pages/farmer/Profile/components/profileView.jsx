import { useTab } from "@/helpers/hooks";
import { useQuery } from "@tanstack/react-query";
import { Spin } from "antd";
import { useSearchParams } from "react-router-dom";
import { getProfiles } from "../profileData";
import About from "./About";

export default function ProfileView({ selected }) {
  const { data, isLoading } = useQuery(["profiles", selected], () =>
    getProfiles(selected)
  );

  if (isLoading)
    return (
      <div className="flex flex-col items-center py-16">
        <Spin />
      </div>
    );

  return (
    <div className="divide-y divide-slate-200">
      {data.map((profile) => (
        <About key={profile.id} {...profile} />
      ))}
    </div>
  );
}