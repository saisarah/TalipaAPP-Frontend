import Http from "@/helpers/Http";
import { useCurrentUserQuery } from "@/query/queries/useCurrentUserQuery";
import { LikeOutlined, MessageOutlined } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import { Button } from "antd";
import { Link } from "react-router-dom";
import EmptyGroupPosts from "./components/EmptyGroupPosts";
import { GroupPostCard } from "./components/GroupPostCard";
import LoadingGroupPosts from "./components/LoadingGroupPosts";

const fetchGroupPosts = async () => {
  const { data } = await Http.get("/farmer-group/posts");
  return data;
};

const useGroupPostsQuery = () => {
  return useQuery(["farmer-group", "posts"], fetchGroupPosts);
};

export default function Posts() {
  const { data } = useCurrentUserQuery();
  const { data: posts, isLoading } = useGroupPostsQuery();

  return (
    <>
      <div className="mt-3 flex bg-white p-3">
        <img
          className="aspect-square w-10 rounded-full"
          src={data.profile_picture}
        />
        <Link
          to="/farmer/groups/posts/create"
          className="ml-3 flex flex-grow items-center rounded-3xl border border-slate-300 px-4"
        >
          Write something...
        </Link>
      </div>
      {isLoading ? (
        <LoadingGroupPosts />
      ) : posts.length === 0 ? (
        <EmptyGroupPosts />
      ) : (
        posts.map((post) => <GroupPostCard key={post.id} {...post} />)
      )}
    </>
  );
}
