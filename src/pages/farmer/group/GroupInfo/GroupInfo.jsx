import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getGroup } from "../groups";
import { Button, Spin } from "antd";
import { useState } from "react";
import Join from "../components/Join";
import Forum from "../components/Forum";
import PageHeader from "@/components/PageHeader";

export default function GroupInfo() {
  const [active, setActive] = useState("join");
  const { id } = useParams();

  const { data: group, isLoading } = useQuery(["groups", id], () =>
    getGroup(id)
  );

  return (
    <div className="app-size bg-white">
      <PageHeader back="/farmer/groups" title="Group" />

      {isLoading ? (
        <div className="flex items-center justify-center py-16">
          <Spin tip="Fetching group informations" />
        </div>
      ) : (
        <>
          <div className="h-[80px] w-[100%] max-w-md flex-shrink-0 bg-slate-300"></div>
          <img
            className="mx-auto h-[75px] w-[75px] max-w-md flex-shrink-0 rounded-full bg-slate-300 ring"
            style={{ marginTop: "-45px" }}
          />
          <div className="my-6 text-center">
            <h1>{group.name}</h1>
            <h1>{group.type}</h1>
            <p>{group.members_count} Members</p>
            <Button type="primary" className="mx-auto">
              Join
            </Button>
          </div>

          <div className="sticky top-0 grid h-16 grid-cols-2 bg-white text-lg shadow-md">
            <button
              onClick={() => setActive("join")}
              className={`flex items-center justify-center ${
                active === "join" ? "border-b border-primary text-primary" : ""
              }`}
            >
              Info
            </button>

            <button
              onClick={() => setActive("forum")}
              className={`flex items-center justify-center ${
                active === "forum" ? "border-b border-primary text-primary" : ""
              }`}
            >
              Forum
            </button>
          </div>

          {active === "join" && <Join />}
          {active === "forum" && <Forum />}
        </>
      )}
    </div>
  );
}
