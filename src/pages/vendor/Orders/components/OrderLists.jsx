import { fetchOrders } from "@/apis/OrderApi";
import OrderItem from "@/components/OrderItem/OrderItem";
import { useQuery } from "@tanstack/react-query";
import { Spin } from "antd";

export default function OrderLists({ status }) {
  const { data, isLoading } = useQuery(
    fetchOrders.key(status),
    fetchOrders.fetcher(status)
  );

  if (isLoading)
    return (
      <div className="flex flex-col items-center py-16">
        <Spin />
      </div>
    );

  return (
    <div className="divide-y divide-slate-200">
      {data.map(({ id, post, total, ...order }) => (
        <OrderItem
          key={id}
          name={post.author.fullname}
          to={`/orders/${id}`}
          avatar={post.author.profile_picture}
          created_at={order.created_at}
          crop={post.crop.name}
          quantity={total["quantity"]}
          location={post.location}
          status={order.order_status}
          total={total["price"]}
        />
      ))}
    </div>
  );
}
