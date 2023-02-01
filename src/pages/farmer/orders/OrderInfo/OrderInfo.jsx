import PageHeader from "@/components/PageHeader";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getOrder } from "../Orders";

export default function OrderInfo() {
  const { id } = useParams();
  const { data: orders, isLoading } = useQuery(["orders", id], () =>
    getOrder(id)
  );

  return (
    <div className="app-size bg-white">
      <PageHeader back="/farmer/orders" title="Order" />
    </div>
  );
}
