import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { useState } from "react";
import { useParams } from "react-router-dom";
// import { About } from "../components/About";
import PageHeader from "@/components/PageHeader";
// import MemberPosts from "../components/MembersPosts";
import MembersPosts from "../components/MembersPosts";
import groupIllustrationImg from "../images/group_illustration.png";
// import { items } from "./post-data";

export const Posts = () => {
  const [active, setActive] = useState("forum");
  const { id } = useParams();

  return (
    <div className="app-size">
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
          <Dropdown menu={[]} trigger={["click"]}>
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
          <MembersPosts />
        ) : (
          <div className="flex flex-col items-center gap-4 bg-slate-100 py-16">
            <img src={groupIllustrationImg} />
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

        {active === "about" && null}
      </>
      {/* )} */}
    </div>
  );
};
