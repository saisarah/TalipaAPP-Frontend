import { fetchOrders } from "@/apis/OrderApi";
import OrderCard from "@/components/OrderCard";
import { currency } from "@/helpers/utils";
import { useQuery } from "@tanstack/react-query";
import { Spin } from "antd";
import moment from "moment";
import emptySvg from "../image/undraw_empty_cart_co35.svg";
export default function OrderLists({ status, cardLink }) {
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

  if (data.length == 0)
    return (
      <div className="flex flex-col items-center py-40">
        <img width="200" height="100" src={emptySvg} alt="" />
        <span className="px-24 text-center text-sm">
          You have no orders yet, browse commodities in the home section
        </span>
      </div>
    );

  return (
    <div className="flex flex-col gap-2 p-2">
      {data.map(({ id, post, total, ...order }) => (
        <OrderCard
          to={cardLink(id)}
          key={id}
          id={id}
          order_name={post.crop.name}
          displayphoto={post.thumbnail.source}
          status={order.order_status}
          quantity={`${total.quantity} ${post.unit}`}
          total={currency(parseFloat(total.price))}
          location={post.location}
          timestamp={moment(order.created_at).fromNow()}
        />
      ))}
    </div>
  );
}
