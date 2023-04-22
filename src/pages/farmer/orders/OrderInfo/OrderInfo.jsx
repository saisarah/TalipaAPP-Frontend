import OrderDescriptions from "@/components/Orders/OrderDescriptions";
import OrderProfile from "@/components/Orders/OrderProfile";
import PostLink from "@/components/Orders/PostLink";
import Page from "@/components/Page";
import PageHeader from "@/components/PageHeader/PageHeader";
import { useOrderStatusChangedListener } from "@/hooks/listeners/useOrderStatusChangedListener";
import { useOrderQuery } from "@/query/queries/useOrdersQuery";
import { Divider, Spin } from "antd";
import { useParams } from "react-router-dom";
import { OrderAction } from "./components/OrderAction";

export default function OrderInfo() {
  const { id } = useParams();

  const { data: order, isLoading, refetch } = useOrderQuery(id);

  useOrderStatusChangedListener(id)

  return (
    <div className="md:p-4">
      <Page className="bg-white md:rounded-lg md:shadow-lg">
        <PageHeader className="md:static" back="/farmer/orders?tab=pending" title="Order" />

        {isLoading ? (
          <div className="flex items-center justify-center py-16">
            <Spin tip="Fetching Order Information" />
          </div>
        ) : (
          <div className="w-full border-b border-t bg-white p-4">
            <OrderProfile
              messageLink={`/farmer/messages/?user_id=${order.buyer_id}`}
              user={order.buyer}
              label="Buyer"
            />
            <OrderDescriptions className="mt-4" order={order} />

            <Divider />

            <PostLink
              className="mb-4"
              to={`/farmer/posts/${order.post_id}`}
              post={order.post}
            />

            <OrderAction refetch={refetch} order={order} />
          </div>
        )}
      </Page>
    </div>
  );
}
