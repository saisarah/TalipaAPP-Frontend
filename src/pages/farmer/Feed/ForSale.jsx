import { useQuery } from "@tanstack/react-query";
import { Spin } from "antd";
import { getPosts } from "../posts";
import PostCard from "./components/PostCard";

export default function ForSale() {
  const { data: posts, isLoading } = useQuery(["posts"], getPosts);

  if (isLoading)
    return (
      <div className="flex items-center justify-center py-16">
        <Spin tip="Fetching posts" />
      </div>
    );

  return (
    <div className="my-6 flex flex-col gap-4">
      {posts.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </div>
  );
}
