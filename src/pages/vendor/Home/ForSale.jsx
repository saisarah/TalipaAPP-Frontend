import PostCard from "@/components/PostCard";
import useCropsQuery from "@/query/queries/useCropsQuery";
import { useCurrentUserQuery } from "@/query/queries/useCurrentUserQuery";
import { usePostsQuery } from "@/query/queries/usePostsQuery";
import { Select, Spin } from "antd";
import { useState } from "react";

export default function ForSale() {
  const { data } = useCurrentUserQuery();
  const { data: crops, isLoading: fetchingCrops } = useCropsQuery();
  const [cropIds, setCropIds] = useState(
    data.vendor.crops.map((crop) => crop.id)
  );
  const { data: posts, isLoading } = usePostsQuery(cropIds.join());

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center justify-end p-4 gap-x-2">
        <div className="flex-shrink-0">Filter by: </div>
        <Select
          className="inline-block w-auto"
          mode="multiple"
          size="small"
          value={cropIds}
          onChange={(crops) => setCropIds(crops)}
          options={crops?.map(({ name, id }) => ({ value: id, label: name }))}
          loading={fetchingCrops}
          placeholder="Select crops"
        />
      </div>
      {isLoading ? (
        <div className="flex items-center justify-center py-16">
          <Spin tip="Fetching posts" />
        </div>
      ) : (
        <div className="columns-2 gap-2 px-1 py-4 sm:grid sm:columns-auto sm:grid-cols-3 md:px-4 lg:grid-cols-4">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} to={`/posts/${post.id}`} />
          ))}
        </div>
      )}
    </div>
  );
}
