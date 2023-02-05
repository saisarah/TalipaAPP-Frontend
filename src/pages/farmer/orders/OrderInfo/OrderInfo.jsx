import PageHeader from "@/components/PageHeader";
import { useQuery } from "@tanstack/react-query";
import { Spin } from "antd";
import { useParams } from "react-router-dom";
import { getOrder } from "../ordersData";

export default function OrderInfo() {
  const { id } = useParams();

  const { data: order, isLoading } = useQuery(["orders", id], () =>
    getOrder(id)
  );

  return (
    <div className="app-size bg-white">
      <PageHeader back={"farmer/orders"} title="Order" />

      {isLoading ? (
        <div className="flex items-center justify-center py-16">
          <Spin tip="Fetching Order Information" />
        </div>
      ) : (
        <>
          <div className=" bg-slate-300">
            <div className="my-6 text-center">
              <h1>{order.name}</h1>
              <h1>{order.quantity}</h1>
              <p>{order.status} </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
