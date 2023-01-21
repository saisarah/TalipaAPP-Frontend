import { DownOutlined } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import { Dropdown, Space } from "antd";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { About } from "../components/About";
import { items } from "./post-data";
import MemberPosts from "../components/MembersPosts";
import PageHeader from "@/components/PageHeader";

export const Posts = () => {
  const [active, setActive] = useState("forum");
  const { id } = useParams();

  const { data: group, isLoading } = useQuery(["groups", id], () =>
    getGroup(id)
  );
  return (
    <div className="mx-auto min-h-screen max-w-md">
      <PageHeader back="/farmer/groups" title="Group" />

      {/* {isLoading ? (
        <div className="flex items-center justify-center py-16">
          <Spin tip="Fetching group informations" />
        </div>
      ) : ( */}
      <>
        <div className="sticky top-0 grid h-16 grid-cols-2 bg-white text-lg shadow-md">
          <button
            onClick={() => setActive("forum")}
            className={`flex items-center justify-center ${
              active === "forum" ? "border-b border-primary text-primary" : ""
            }`}
          >
            Forum
          </button>

          <button
            onClick={() => setActive("about")}
            className={`flex items-center justify-center ${
              active === "about" ? "border-b border-primary text-primary" : ""
            }`}
          >
            About
          </button>
        </div>

        <input
          className="my-4 w-[100%] flex-grow p-4 focus:outline-none"
          type="search"
          placeholder="Start a discussion"
        />
        <div className="pb-4 text-center">
          <Dropdown menu={{ items }} trigger={["click"]}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                Showing:
                <b>
                  <DownOutlined />
                </b>
              </Space>
            </a>
          </Dropdown>
        </div>

        {active === "forum" ? (
          <MemberPosts />
        ) : (
          <div className="flex flex-col items-center gap-4 bg-slate-100 py-16">
            <img src="/assets/temp/group/group_illustration.png" />
            <span className="text-lg font-bold">Create Group</span>
            <span className="px-2 text-center">
              Farmer groups are group of individual farmers, an association,
              cooperative or any legal entity with a common farming interest.
            </span>
            <button className="rounded" size="large">
              Create
            </button>
          </div>
        )}

        {active === "about" && <About />}
      </>
      {/* )} */}
    </div>
  );
};
