import { LoadingSkeleton } from "@/components/LoadingSkeleton";
import Page from "@/components/Page";
import PageHeader from "@/components/PageHeader/PageHeader";
import { currency } from "@/helpers/utils";
import { PostDescription } from "@/pages/vendor/PostDetails/components/PostDescription";
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
      <div className="talipaapp-scrollbar flex snap-x snap-mandatory overflow-x-auto">
        {attachments.map((img) => (
          <img
            key={img.id}
            className="aspect-video w-full flex-shrink-0 snap-start object-cover"
            src={img.source}
          />
        ))}
      </div>
      <div className="p-4">
        <div className="flex justify-between gap-2">
          <h1 className="text-xl font-semibold">{post.title}</h1>
          <span className="whitespace-nowrap text-lg">
            {currency(post.display_price)} / {post.unit}
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

        <PostDescription
          paymentOption={"TalipaAPP Wallet"}
          isStraight={post.is_straight}
          deliveryOption={"Transportify"}
          unit={post.unit}
          address={`${author.address.municipality} ${author.address.province}`}
          prices={post.prices}
          caption={post.caption}
        />

      </div>
    </>
  );
}
