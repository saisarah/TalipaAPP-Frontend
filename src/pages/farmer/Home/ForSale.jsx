import PostCard from "@/components/PostCard";
import { useCurrentUserQuery } from "@/query/queries/useCurrentUserQuery";
import { usePostsQuery } from "@/query/queries/usePostsQuery";
import { Spin } from "antd";

export default function ForSale() {
  const { data } = useCurrentUserQuery();
  const crop_ids = data.farmer.crops.map((crop) => crop.id);
  const { data: posts, isLoading } = usePostsQuery(crop_ids.join());

  if (isLoading)
    return (
      <div className="flex items-center justify-center py-16">
        <Spin tip="Fetching data" />
      </div>
    );

  return (
    <div className=" columns-2 gap-2 px-1 py-4 sm:grid sm:columns-auto sm:grid-cols-3 md:px-4 md:pt-0 lg:grid-cols-4">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} to={`/farmer/posts/${post.id}`} />
      ))}
    </div>
  );
}
