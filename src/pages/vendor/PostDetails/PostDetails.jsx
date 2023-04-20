import { LoadingSkeleton } from "@/components/LoadingSkeleton";
import { currency } from "@/helpers/utils";
import { usePostQuery } from "@/query/queries/usePostsQuery";
import { Avatar, Button, Rate } from "antd";
import { useState } from "react";
import { useParams } from "react-router-dom";
import CreateOrder from "../CreateOrder/CreateOrder";
import { PostDescription } from "./components/PostDescription";
import { PostDetailsLayout } from "./components/PostDetailsLayout";
import { SetQuantityModal } from "./components/SetQuantityModal/SetQuantityModal";

export const PostDetails = () => {
  const { id } = useParams();
  const { data: post, isLoading } = usePostQuery(id);
  const [isOpen, setIsOpen] = useState(false);
  const [order, setOrder] = useState(null);

  if (isLoading) {
    return (
      <PostDetailsLayout>
        <LoadingSkeleton loadingText="Fetching Posts" loading />
      </PostDetailsLayout>
    );
  }

  const { attachments, author } = post;

  if (order) {
    return <CreateOrder order={order} setOrder={setOrder} />;
  }

  return (
    <PostDetailsLayout>
      <div className="talipaapp-scrollbar flex snap-x snap-mandatory overflow-x-auto">
        {attachments.map((img) => (
          <img
            key={img.id}
            className="aspect-video h-full w-full flex-shrink-0 snap-start object-cover sm:aspect-auto sm:h-56"
            src={img.source}
          />
        ))}
      </div>
      <div className="p-4">
        <div className="flex justify-between gap-2">
          <h1 className="text-xl font-semibold ">{post.title}</h1>
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
          prices={post.prices}
          caption={post.caption}
          address={`${author.address.municipality} ${author.address.province}`}
        />

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

      <SetQuantityModal
        open={isOpen}
        setOpen={setIsOpen}
        post={post}
        setOrder={setOrder}
      />
    </PostDetailsLayout>
  );
};
