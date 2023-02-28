import Http from "@/helpers/Http";
import { useQuery } from "@tanstack/react-query";
import { Spin } from "antd";
import OrderItem from "./OrderItem";

const fetchOrders = async (status) => {
  const { data } = await Http.get(`/orders`, {
    params: { status },
  });
  return data;
};

export default function OrderLists({ status }) {
  const { data, isLoading } = useQuery(["orders", { status }], () =>
    fetchOrders(status)
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
