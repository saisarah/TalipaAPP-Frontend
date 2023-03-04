import { fetchPosts } from "@/apis/Post";
import PostCard from "@/components/PostCard";
import { useQuery } from "@tanstack/react-query";
import { Spin } from "antd";

export default function ForSale() {
  const { data: posts, isLoading } = useQuery(["posts"], fetchPosts);

  if (isLoading)
    return (
      <div className="flex items-center justify-center py-16">
        <Spin tip="Fetching posts" />
      </div>
    );

  return (
    <div className=" columns-2 gap-2 px-1 py-4">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} to={`/posts/${post.id}`} />
      ))}
    </div>
  );
}
