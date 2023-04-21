import { fetchGroupPosts } from "@/apis/FarmerGroupApi";
import Http from "@/helpers/Http";
import { useFarmerGroupPostCreated } from "@/hooks/listeners/useFarmerGroupPostCreated";
import { useCurrentUserQuery } from "@/query/queries/useCurrentUserQuery";
import { LikeOutlined, MessageOutlined } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import { Button } from "antd";
import { Link } from "react-router-dom";
import EmptyGroupPosts from "./components/EmptyGroupPosts";
import { GroupPostCard } from "./components/GroupPostCard";
import LoadingGroupPosts from "./components/LoadingGroupPosts";



const useGroupPostsQuery = () => {
  return useQuery(
    fetchGroupPosts.key(), 
    fetchGroupPosts
  );
};

export default function Posts({ group }) {
  const { data } = useCurrentUserQuery();
  const { data: posts, isLoading } = useGroupPostsQuery();

  useFarmerGroupPostCreated(group.id)

  return (
    <>
      <div className="mt-3 flex bg-white p-3 sm:mx-3 sm:border-slate-300 sm:border">
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
        <div className="flex flex-col gap-3 mt-3 sm:px-3">
          {posts.map((post) => <GroupPostCard key={post.id} {...post} />)}
        </div>
      )}
    </>
  );
}
