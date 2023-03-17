import OrderDescriptions from "@/components/Orders/OrderDescriptions";
import PostLink from "@/components/Orders/PostLink";
import PageHeader from "@/components/PageHeader";
import Http from "@/helpers/Http";
import { useOrderQuery } from "@/query/queries/useOrdersQuery";
import { useQuery } from "@tanstack/react-query";
import { Avatar, Button, Card, Divider, Spin } from "antd";
import moment from "moment";
import { Link, useParams } from "react-router-dom";

export default function OrderInfo() {
  const { id } = useParams();
  const { data: order, isLoading } = useOrderQuery(id)

  return (
    <div className="app-size bg-white ">
      <PageHeader back="/orders?tab=pending" title="Order" />

      {isLoading ? (
        <div className="flex items-center justify-center py-16">
          <Spin tip="Fetching Order Information" />
        </div>
      ) : (
        <div className="w-full bg-white p-4">
          <div className="flex w-full items-center gap-2">
            <Avatar size={52} src={order.post.author.profile_picture} />
            <div className="leaing-4 flex h-full flex-grow flex-col">
              <span className=" text-xl font-bold ">
                {order.post.author.fullname}
              </span>
              <span className="">{moment(order.created_at).fromNow()}</span>
            </div>
            <div className="">
              <Link to={`/messages/${order.post.author_id}`}>
                <Button shape="round">Message</Button>
              </Link>
            </div>
          </div>

          <OrderDescriptions order={order} className="my-4" />

          <Divider />

          <PostLink to={`/orders/${order.id}`} post={order.post} />

          <div className="mt-4">
            {order.order_status == "pending" && (
              <Button danger size="large" type="primary" block>
                Cancel Order
              </Button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
