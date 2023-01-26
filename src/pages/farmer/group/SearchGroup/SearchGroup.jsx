import PageHeader from "@/components/PageHeader";
import { CloseCircleOutlined, SearchOutlined } from "@ant-design/icons";
import { Avatar, Button } from "antd";
import { useState } from "react";

export default function SearchGroup() {
  const [members, setMembers] = useState([
    "Reilly Rubante",
    "Paolo Ortega",
    "Ruel Almonia",
  ]);

  return (
    <div className="mx-auto min-h-screen max-w-md bg-[#F4F4F4]">
      <PageHeader title="Create Group" back="/farmer/groups/new" />

      <div className="bg-white p-4">
        <span className="text-lg font-semibold">Invite Members</span>
      </div>

      <div className="border-b p-4">
        <div className="flex items-center gap-2 rounded-lg bg-white p-2">
          <SearchOutlined className="text-slate-500" />
          <input
            type="text"
            className="flex-grow outline-none"
            placeholder="Search or type email"
          />
        </div>
      </div>
      <div>
        {members.map(function (member) {
          return (
            <div
              key={member}
              className="flex cursor-pointer items-center gap-2 border-b bg-white p-4 hover:bg-slate-50"
            >
              <Avatar className="border border-green-500" />
              <span className="flex-grow text-lg">{member}</span>
              <button className="text-red-500">
                <CloseCircleOutlined className="text-lg" />
              </button>
            </div>
          );
        })}
      </div>
      <div className="flex-col-2 flex gap-4 mx-7 bg-slate-100 py-16">
        <Button className="text-bold hover:bg-primary-500 flex-grow border-primary text-primary">
          Back
        </Button>
        <Button type="primary" className="hover:bg-primary-500 flex-grow">
          Create
        </Button>
      </div>
    </div>
  );
}
