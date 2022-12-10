import { Link } from "react-router-dom";
import PageHeader from "../../../components/PageHeader";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button, Tag } from "antd";
import { useState } from "react";

function GroupItem({ name, membersCount, type }) {
  return (
    <div className="flex gap-4 bg-white p-4">
      <div className="h-[72px] w-[72px] flex-shrink-0 rounded bg-slate-300"></div>
      <div className="flex flex-grow flex-col">
        <span className="font-bold">{name}</span>
        <span>{type}</span>
        <span className="text-slate-500">{membersCount} Members</span>
      </div>
    </div>
  );
}

export default function Group() {
  const [active, setActive] = useState("join");

  return (
    <div className="mx-auto max-w-md bg-slate-50">
      <PageHeader
        left={
          <Link to="/farmer">
            <ArrowLeftOutlined style={{ fontSize: "16px" }} />
          </Link>
        }
        title="Group"
      />
      <div className="sticky top-0 grid h-16 grid-cols-2 bg-white text-lg shadow-md">
        <button
          onClick={() => setActive("join")}
          className={`flex items-center justify-center ${
            active === "join" ? "border-b border-primary text-primary" : ""
          }`}
        >
          Join
        </button>
        <button
          onClick={() => setActive("create")}
          className={`flex items-center justify-center ${
            active === "create" ? "border-b border-primary text-primary" : ""
          }`}
        >
          Create
        </button>
      </div>

      {active === "join" ? (
        <div className="divide-y divide-slate-200">
          <GroupItem
            name="Totong Lipay Farmers Association"
            membersCount={235}
            type="Association"
          />

          <GroupItem
            name="Federation of Free Farmers"
            membersCount={187}
            type="Cooperatives"
          />

          <GroupItem
            name="Maharlika Organic Food Producers and Farmers Association"
            membersCount={235}
            type="Association"
          />

          <GroupItem
            name="Belgomar Upland Farmers Association"
            membersCount={235}
            type="Association"
          />

          <GroupItem
            name="Minongan Livelihood Farmers Association, Inc"
            membersCount={235}
            type="Association"
          />
        </div>
      ) : (
        <div className="flex flex-col items-center gap-4 bg-slate-100 py-16">
          <img src="/assets/temp/group/group_illustration.png" />
          <span className="text-lg font-bold">Create Group</span>
          <span className="px-2 text-center">
            Farmer groups are group of individual farmers, an association,
            cooperative or any legal entity with a common farming interest.
          </span>
          <Button className="rounded" size="large">
            Create
          </Button>
        </div>
      )}
    </div>
  );
}
