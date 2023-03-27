import PostCard from "@/components/PostCard";
import { usePostsQuery } from "@/query/queries/usePostsQuery";
import { Spin } from "antd";

export default function ForSale() {
  const { data: posts, isLoading } = usePostsQuery()

  if (isLoading)
    return (
      <div className="flex items-center justify-center py-16">
        <Spin tip="Fetching posts" />
      </div>
    );

  return (
    <div className=" columns-2 gap-2 px-1 py-4 sm:columns-auto sm:grid sm:grid-cols-3 md:pt-0 md:px-4 lg:grid-cols-4">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} to={`/farmer/posts/${post.id}`} />
      ))}
    </div>
  );
}
