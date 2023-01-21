import { fetchPost } from "@/apis/Post";
import PageHeader from "@/components/PageHeader";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";





export function PostDetailsPage() {
  const { id } = useParams();
  const { data: post, isLoading } = useQuery(["posts", id], () =>
    fetchPost(id)
  );

  return (
    <div className="app-size bg-white">
      <PageHeader back="/" title="Post Details" />
      test
    </div>
  );
}
