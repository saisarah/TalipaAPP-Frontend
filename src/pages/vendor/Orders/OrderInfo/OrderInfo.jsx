import { CancelOrderButton } from "@/components/Orders/CancelOrderButton";
import OrderDescriptions from "@/components/Orders/OrderDescriptions";
import OrderProfile from "@/components/Orders/OrderProfile";
import PostLink from "@/components/Orders/PostLink";
import PageHeader from "@/components/PageHeader/PageHeader";
import VendorPage from "@/components/VendorPage";
import { useOrderQuery } from "@/query/queries/useOrdersQuery";
import { Divider, Spin } from "antd";
import { useParams } from "react-router-dom";

export default function OrderInfo() {
  const { id } = useParams();
  const { data: order, isLoading } = useOrderQuery(id);

  return (
    <div className="p-4">
      <VendorPage className="w-full bg-white  lg:rounded-lg lg:shadow ">
        <PageHeader
          className="block md:hidden"
          back="/orders?tab=pending"
          title="Order"
        />

        {isLoading ? (
          <div className="flex items-center justify-center py-16">
            <Spin tip="Fetching Order Information" />
          </div>
        ) : (
          <div className="w-full bg-white p-4">
            <OrderProfile
              messageLink={`/messages/${order.post.author_id}`}
              user={order.post.author}
              label="Seller"
            />

            <OrderDescriptions order={order} className="my-4" />

            <Divider />

            <PostLink to={`/posts/${order.post_id}`} post={order.post} />

            {order.order_status === "pending" && (
              <CancelOrderButton className="mt-4 " id={id} />
            )}
          </div>
        )}
      </VendorPage>
    </div>
  );
}
