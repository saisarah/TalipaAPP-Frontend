import { fetchPost } from "@/apis/Post";
import { LoadingSkeleton } from "@/components/LoadingSkeleton";
import Page from "@/components/Page";
import PageHeader from "@/components/PageHeader";
import { currency } from "@/helpers/utils";
import { useCrop } from "@/query/queries/useCropsQuery";
import { useQuery } from "@tanstack/react-query";
import { Avatar, Button, Descriptions, Divider, Rate } from "antd";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { SetQuantityStraight } from "./components/SetQuantityStraight";

export function PostDetailsPage() {
  const { id } = useParams();
  const { data: post, isLoading } = useQuery(["posts", id], () =>
    fetchPost(id)
  );
  const crop = useCrop(post?.crop_id);

  return (
    <Page className="bg-white">
      <PageHeader back="/" title={crop?.name || "Post Details"} />

      <LoadingSkeleton loadingText="Fetching Post" loading={isLoading}>
        {!isLoading && <PostDetails post={post} />}
      </LoadingSkeleton>
    </Page>
  );
}

function PostDetails({ post }) {
  const [isOpen, setIsOpen] = useState(false);

  const {
    attachments,
    title,
    caption,
    display_price,
    unit,
    author,
    pricing_type,
    prices,
  } = post;

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
          <h1 className="text-xl font-semibold">{title}</h1>
          <span className="text-lg">
            {currency(display_price)} / {unit}
          </span>
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

          {pricing_type === "Straight" && (
            <Descriptions.Item label="Available">
              {prices[0].stocks}
              {unit}
            </Descriptions.Item>
          )}
        </Descriptions>

        {pricing_type !== "Straight" && (
          <Descriptions
            className="mt-4"
            title="Prices"
            size="small"
            bordered
            column={1}
          >
            <Descriptions.Item label="Large">
              {currency(120)} / kg
            </Descriptions.Item>
            <Descriptions.Item label="Extra Large">
              {currency(155)} / kg
            </Descriptions.Item>
          </Descriptions>
        )}

        <Divider />

        <p className="whitespace-pre-line">{caption}</p>

        <Button
          onClick={() => setIsOpen(true)}
          size="large"
          className="mt-4"
          type="primary"
          block
        >
          Order Now
        </Button>
      </div>

      {pricing_type === "Straight" &&
        <SetQuantityStraight unit={unit} caption={caption} title={title} price={prices[0]} isOpen={isOpen} setIsOpen={setIsOpen} />
      }
      
    </>
  );
}

