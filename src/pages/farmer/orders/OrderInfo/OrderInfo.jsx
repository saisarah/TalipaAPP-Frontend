import { OrderAction } from "@/components/Orders/OrderAction";
import OrderDescriptions from "@/components/Orders/OrderDescriptions";
import OrderProfile from "@/components/Orders/OrderProfile";
import PostLink from "@/components/Orders/PostLink";
import PageHeader from "@/components/PageHeader";
import { useOrderQuery } from "@/query/queries/useOrdersQuery";
import { Divider, Spin } from "antd";
import { useParams } from "react-router-dom";

export default function OrderInfo() {
  const { id } = useParams();

  const { data: order, isLoading } = useOrderQuery(id);

  return (
    <div className="app-size bg-white ">
      <PageHeader back="/farmer/orders?tab=pending" title="Order" />

      {isLoading ? (
        <div className="flex items-center justify-center py-16">
          <Spin tip="Fetching Order Information" />
        </div>
      ) : (
        <div className="w-full border-b border-t bg-white p-4">
          <OrderProfile
            messageLink={`/farmer/messages/${order.buyer_id}`}
            user={order.buyer}
            label="Buyer"
          />
          <OrderDescriptions className="mt-4" order={order} />

          <Divider />

          <PostLink className="mb-4" to={`/farmer/posts/${order.id}`} post={order.post} />

          <OrderAction status={order.order_status} />
        </div>
      )}
    </div>
  );
}
