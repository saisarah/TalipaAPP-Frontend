import { LoadingSkeleton } from "@/components/LoadingSkeleton";
import Page from "@/components/Page";
import PageHeader from "@/components/PageHeader";
import { currency } from "@/helpers/utils";
import { usePostQuery } from "@/query/queries/usePostsQuery";
import { Avatar, Button, Descriptions, Rate } from "antd";
import { useParams } from "react-router-dom";

export default function PostDetails() {
  const { id } = useParams();
  const { data: post, isLoading } = usePostQuery(id)

  return (
    <Page className="bg-white">
      <PageHeader back="/farmer/home?tab=sale" title="Post Details" />

      <LoadingSkeleton loadingText="Fetching post" loading={isLoading}>
        <PostInformation post={post} />
      </LoadingSkeleton>
    </Page>
  );
}

function PostInformation({ post }) {
  if (post === null) return null;

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
            <Button shape="round">S</Button>
            <Button shape="round">M</Button>
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

        <div className="mt-4">
          <Descriptions
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
