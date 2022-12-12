import { Link } from "react-router-dom";
import PageHeader from "../../../components/PageHeader";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useState } from "react";
import SuggestedGroups from "./components/SuggestedGroups";
import GroupInvitation from "./GroupInvitation";

const HAS_INVITATION = true;

export default function Group() {
  const [active, setActive] = useState("join");

  if (HAS_INVITATION) return <GroupInvitation />;

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
        <SuggestedGroups />
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
