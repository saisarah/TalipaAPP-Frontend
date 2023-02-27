
import { useQuery } from "@tanstack/react-query";
import { Spin } from "antd";
import { getOrders } from "../ordersData";
import OrderItem from "./OrderItem";

export default function OrderLists({ selected }) {
  const { data, isLoading } = useQuery(["orders", selected], () =>
    getOrders(selected)
  );

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
