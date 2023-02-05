import { EditOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Spin } from "antd";
import useCurrentUserQuery from "../../../query/queries/useCurrentUserQuery";
import { Button } from "antd";
import { useQuery } from "@tanstack/react-query";
import { fetchUserPosts } from "@/apis/Post";
import PostCard from "@/components/PostCard";
import PageHeader from "@/components/PageHeader";
import Page from "@/components/Page";
import { useTab } from "@/helpers/hooks";
import { About } from "../group/components/About";
import { Link } from "react-router-dom";

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
  const { isActive } = useTab(["posts", "about"], "posts");

  return (
    <Page className="bg-slate-50">
      <PageHeader back="/farmer" title="Profile" />
      <div className="flex aspect-video flex-col items-center justify-end bg-slate-300">
        <Avatar
          icon={<UserOutlined />}
          src={user.profile_picture}
          size={120}
          className="relative -bottom-[60px]"
        />
      </div>
      <div className="flex flex-col items-center gap-2  bg-white pt-[60px]">
        <span className="mt-2 font-bold">
          {user.firstname} {user.lastname}
        </span>
        <Button shape="round" icon={<EditOutlined />}>
          Edit Profile
        </Button>

        <div className="grid h-16 w-full grid-cols-2 bg-white text-lg shadow-md">
          <Link
            to="/posts"
            className="flex items-center justify-center border-b border-primary text-primary"
          >
            Posts
          </Link>
         
          <Link to="/temp" className="flex items-center justify-center">
            About
          </Link>
          
        </div>
      </div>

      {isActive("posts") ? <UserPosts id={user.id} /> : null}
      {isActive("about") ? <About /> : null}
    </Page>
  );
}
