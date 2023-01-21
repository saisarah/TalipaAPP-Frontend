import { ArrowLeftOutlined } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import PageHeader from "../../../components/PageHeader";
import { Avatar, Button, Descriptions, Divider, Rate } from "antd";
import { LoadingSkeleton } from "@/components/LoadingSkeleton";
import { currency } from "@/helpers/utils";
import { fetchPost } from "@/apis/Post";

export default function PostDetails() {
  const { id } = useParams();
  const { data: post, isLoading } = useQuery(["posts", id], () => fetchPost(id));

  return (
    <div className="mx-auto min-h-screen max-w-md  bg-white">
      <PageHeader
        left={
          <Link to="/farmer/home?tab=sale">
            <ArrowLeftOutlined style={{ fontSize: "16px" }} />
          </Link>
        }
        title="Post Details"
      />

      <LoadingSkeleton
        loadingText="Fetching post"
        loading={isLoading}
      >
        <PostInformation post={post} />
      </LoadingSkeleton>
    </div>
  );
}

function PostInformation({ post }) {
  if (post === null) return null;

  const { attachments, caption, display_price, unit, author } = post

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
          <span className="text-lg">{ currency(display_price) } / { unit }</span>
        </div>
        <div>
          <div>Available Sizes</div>
          <div className="flex gap-2">
            <Button shape='round'>S</Button>
            <Button shape='round'>M</Button>
            <Button shape='round'>L</Button>
            <Button shape='round'>XL</Button>
          </div>
        </div>

        <div className="border-y mt-4 py-2 flex items-center">
          <Avatar src={author.profile_picture} />
          <div className="font-bold ml-2">{author.fullname}</div>
          <span className="ml-auto text-base">
            <Rate count={1} value={1} disabled/>
            <span className="ant-rate-text text-sm text-slate-500">4.5</span>  
          </span>
        </div>

        <div className="mt-4">
          <Descriptions title="Product Details" size="small" bordered column={1}>
            <Descriptions.Item label="Location">Sta. Rosa City Laguna</Descriptions.Item>
            <Descriptions.Item label="Payment Method">Gcash</Descriptions.Item>
            <Descriptions.Item label="Delivery Method">Transportify</Descriptions.Item>
            <Descriptions.Item label="Available">1000kg</Descriptions.Item>
            <Descriptions.Item label="Sizes">
              <div>XL - 155.00 / kg</div>
              <div>L - 120.00 / kg</div>
            </Descriptions.Item>
          </Descriptions>
        </div>

      </div>
    </>
  );
}
