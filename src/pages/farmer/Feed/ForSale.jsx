import { useQuery } from "@tanstack/react-query";
import { Spin } from "antd";
import { fetchPosts } from "../../../apis/Post";
import { getPosts } from "../posts";
import PostCard from "./components/PostCard";

export default function ForSale() {
  const { data: posts, isLoading } = useQuery(["posts"], fetchPosts);

  if (isLoading)
    return (
      <div className="flex items-center justify-center py-16">
        <Spin tip="Fetching posts" />
      </div>
    );

  return (
    <div className="my-6 columns-2 gap-4 px-4">
      {posts.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
        {/* <img className="mb-4" src="https://source.unsplash.com/random/1" /> */}

    </div>
  );
}
