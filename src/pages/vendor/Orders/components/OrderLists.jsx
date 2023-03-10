import { fetchOrders } from "@/apis/OrderApi";
import OrderCard from "@/components/OrderCard";
import OrderItem from "@/components/OrderItem/OrderItem";
import { currency } from "@/helpers/utils";
import { useQuery } from "@tanstack/react-query";
import { Spin } from "antd";
import moment from "moment";
import emptySvg from "../image/undraw_empty_cart_co35.svg";
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
    <div className="divide-y divide-slate-200">
      {data.map(({ id, post, total, ...order }) => (
        <OrderCard
          to={`/orders/${id}`}
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
        // <OrderItem
        //   key={id}
        //   name={post.author.fullname}
        //   to={`/orders/${id}`}
        //   avatar={post.author.profile_picture}
        //   created_at={order.created_at}
        //   crop={post.crop.name}
        //   quantity={total["quantity"]}
        //   location={post.location}
        //   status={order.order_status}
        //   total={total["price"]}
        // />
      ))}
    </div>
  );
}
