import { fetchPost } from "@/apis/Post";
import { LoadingSkeleton } from "@/components/LoadingSkeleton";
import PageHeader from "@/components/PageHeader";
import { currency } from "@/helpers/utils";
import { useQuery } from "@tanstack/react-query";
import { Avatar, Button, Descriptions, Rate } from "antd";
import { useParams } from "react-router-dom";

export function PostDetailsPage() {
  const { id } = useParams();
  const { data: post, isLoading } = useQuery(["posts", id], () =>
    fetchPost(id)
  );

  return (
    <div className="app-size bg-white">
      <PageHeader back="/" title="Post Details" />

      <LoadingSkeleton loadingText="Fetching Post" loading={isLoading}>
        {!isLoading && <PostDetails post={post} />}
      </LoadingSkeleton>
    </div>
  );
}

function PostDetails({ post }) {
  const { attachments, caption, display_price, unit, author } = post;

  return (
    <>
      <div>
        <img
          className="aspect-video w-full object-cover"
          src={attachments[0].source}
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between">
          <h1 className="text-xl font-semibold">{caption}</h1>
          <span className="text-lg">
            {currency(display_price)} / {unit}
          </span>
        </div>
        <div>
          <div>Available Sizes</div>
          <div className="flex gap-2">
            <Button shape="round" disabled>S</Button>
            <Button shape="round" disabled>M</Button>
            <Button shape="round">L</Button>
            <Button shape="round">XL</Button>
          </div>
        </div>

        <div className="mt-4 flex items-center border-y py-2">
          <Avatar src={author.profile_picture} />
          <div className="ml-2 font-bold">{author.fullname}</div>
          <span className="ml-auto text-base">
            <Rate count={1} value={1} disabled />
            <span className="ant-rate-text text-sm text-slate-500">4.5</span>
          </span>
        </div>

        <Descriptions
          className="mt-4"
          title="Product Details"
          size="small"
          bordered
          column={1}
        >
          <Descriptions.Item label="Location">
            Sta. Rosa City Laguna
          </Descriptions.Item>
          <Descriptions.Item label="Payment Method">Gcash</Descriptions.Item>
          <Descriptions.Item label="Delivery Method">
            Transportify
          </Descriptions.Item>
          <Descriptions.Item label="Available">1000kg</Descriptions.Item>
        </Descriptions>

        <Descriptions
          className="mt-4"
          title="Prices"
          size="small"
          bordered
          column={1}
        >
          <Descriptions.Item label="Large">{currency(120)} / kg</Descriptions.Item>
          <Descriptions.Item label="Extra Large">{currency(155)} / kg</Descriptions.Item>
        </Descriptions>
        <Button size="large" className="mt-4" type="primary" block>Order Now</Button>
      </div>

    </>
  );
}
