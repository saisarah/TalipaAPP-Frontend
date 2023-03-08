import { EditOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Spin } from "antd";
import { Button } from "antd";
import { useQuery } from "@tanstack/react-query";
import { fetchUserPosts } from "@/apis/Post";
import PostCard from "@/components/PostCard";
import PageHeader from "@/components/PageHeader";
import Page from "@/components/Page";
import { useTab } from "@/helpers/hooks";
import { Link } from "react-router-dom";
import About from "./components/About";
import { useCurrentUserQuery } from "@/query/queries/useCurrentUserQuery";

const UserPosts = ({ id }) => {
  const { data: posts, isLoading } = useQuery(["users", id, "posts"], () =>
    fetchUserPosts(id)
  );

  if (isLoading)
    return (
      <div className="flex items-center justify-center py-16">
        <Spin tip="Fetching posts" />
      </div>
    );

  return (
    <div className=" columns-2 gap-2 px-1 py-4">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} to={`/farmer/posts/${post.id}`} />
      ))}
    </div>
  );
};

export default function Profile() {
  const { data: user } = useCurrentUserQuery();
  const { isActive, selected } = useTab(["posts", "about"], "posts");

  return (
    <Page className="bg-slate-50">
      <PageHeader back="/farmer" title="Profile" />
      <div className="flex aspect-video flex-col items-center justify-end gap-2 bg-slate-300">
        <Avatar
          icon={<UserOutlined />}
          src={user.profile_picture}
          size={120}
          className="relative -bottom-[60px]"
        />
      </div>
      <div className="flex flex-col items-center gap-2 bg-white pt-[60px]">
        <span className="mt-2 font-bold">
          {user.firstname} {user.lastname}
        </span>

        <Button shape="round" icon={<EditOutlined />}>
          Edit Profile
        </Button>
      </div>
      <div className="no-scrollbar sticky top-0 z-30 grid grid-cols-2 items-center justify-center overflow-x-auto bg-white text-lg shadow-md ">
        <TabLink tab="posts" isActive={isActive}>
          <span className="p-4">Post</span>
        </TabLink>
        <TabLink tab="about" isActive={isActive}>
          <span className="flex items-center justify-center p-4">About</span>
        </TabLink>
      </div>

      {isActive("about") ? <About /> : <UserPosts id={user.id} />}
    </Page>
  );
}

function TabLink({ children, tab, isActive }) {
  return (
    <Link
      to={`?tab=${tab}`}
      className={`flex items-center justify-center  ${
        isActive(tab) ? "border-b border-primary text-primary" : ""
      }`}
      replace
    >
      {children}
    </Link>
  );
}
