import { useQuery } from "@tanstack/react-query";
import { Spin } from "antd";
import { getOrders } from "../Orders";
import OrderItem from "./OrderItem";

export default function OrderLists() {
  const { data, isLoading } = useQuery(["orders"], getOrders);

  if (isLoading)
    return (
      <div className="flex flex-col items-center py-16">
        <Spin />
      </div>
    );

  return (
    <div className="divide-y divide-slate-200">
      {data.map((order) => (
        <OrderItem key={order.id} {...order} />
      ))}
    </div>
  );
}
