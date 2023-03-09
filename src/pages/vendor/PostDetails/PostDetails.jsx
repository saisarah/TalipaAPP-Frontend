import { LoadingSkeleton } from "@/components/LoadingSkeleton";
import { currency } from "@/helpers/utils";
import { usePost } from "@/query/queries/usePostsQuery";
import { Avatar, Button, Rate } from "antd";
import { useState } from "react";
import { useParams } from "react-router-dom";
import CreateOrder from "../CreateOrder/CreateOrder";
import { PostDescription } from "./components/PostDescription";
import { PostDetailsLayout } from "./components/PostDetailsLayout";
import { SetQuantityStraight } from "./components/SetQuantityStraight";

export const PostDetails = () => {
  const { id } = useParams();
  const { data: post, isLoading } = usePost(id);
  const [isOpen, setIsOpen] = useState(false);
  const [orderQuantities, setOrderQuantities] = useState([]);

  if (isLoading) {
    return (
      <PostDetailsLayout>
        <LoadingSkeleton loadingText="Fetching Posts" loading />
      </PostDetailsLayout>
    );
  }

  const { attachments, author, prices } = post;

  if (orderQuantities.length > 0) {
    return (
      <CreateOrder
        id={id}
        quantities={orderQuantities}
        setQuantities={setOrderQuantities}
        prices={prices}
      />
    );
  }

  return (
    <PostDetailsLayout>
      <div>
        <img
          className="aspect-video w-full object-cover"
          src={attachments[0].source}
        />
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
          prices={post.prices}
          caption={post.caption}
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

      {post.is_straight && (
        <SetQuantityStraight
          unit={post.unit}
          caption={post.caption}
          title={post.title}
          price={post.prices[0]}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          setOrderQuantities={setOrderQuantities}
        />
      )}
    </PostDetailsLayout>
  );
};
