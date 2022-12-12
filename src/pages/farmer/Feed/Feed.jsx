import { ArrowLeftOutlined } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import PageHeader from "../../../components/PageHeader";
import { getPosts } from "../posts";
import PostCard from "./PostCard";
import { Spin } from "antd";

function CropsFilter() {
  return (
    <div className="flex gap-4 p-4">
      <div className="flex flex-col items-center gap-1">
        <div className="h-12 w-12 rounded-full bg-slate-400"></div>
        <span className="text-xs">Mango</span>
      </div>
      <div className="flex flex-col items-center gap-1">
        <div className="h-12 w-12 rounded-full bg-slate-400"></div>
        <span className="text-xs">Banana</span>
      </div>
      <div className="flex flex-col items-center gap-1">
        <div className="h-12 w-12 rounded-full bg-slate-400"></div>
        <span className="text-xs">Pineapple</span>
      </div>
      <div className="flex flex-col items-center gap-1">
        <div className="h-12 w-12 rounded-full bg-slate-400"></div>
        <span className="text-xs">Garlic</span>
      </div>
      <div className="flex flex-col items-center gap-1">
        <div className="h-12 w-12 rounded-full bg-slate-400"></div>
        <span className="text-xs">Onion</span>
      </div>
    </div>
  );
}

export default function Feed() {
  const { data: posts, isLoading } = useQuery(["posts"], getPosts);

  return (
    <div className="mx-auto min-h-screen max-w-md  bg-slate-50">
      <PageHeader
        left={
          <Link to="/farmer">
            <ArrowLeftOutlined style={{ fontSize: "16px" }} />
          </Link>
        }
        title="Home"
      />

      <div className="sticky top-0 grid h-16 grid-cols-3 bg-white text-lg shadow-md">
        <div className="flex items-center justify-center border-b border-primary text-primary">
          For Sale
        </div>

        <div className="flex items-center justify-center">Demands</div>
        <div className="flex items-center justify-center">Create Post</div>
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center py-16">
          <Spin tip="Fetching posts" />
        </div>
      ) : (
        <div className="my-6 flex flex-col gap-4">
          {posts.map((post) => (
            <PostCard key={post.id} {...post} />
          ))}
        </div>
      )}
    </div>
    
  );
}
