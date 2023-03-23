import OrderLists from "@/components/Orders/OrderLists";
import OrderTabLinks from "@/components/Orders/OrderTabLinks";
import { useTitle } from "@/contexts/VendorContext";
import { useTab } from "@/helpers/hooks";

export default function Orders() {
  const tabs = ["pending", "processing", "shipped", "cancelled", "completed"];
  const { selected } = useTab(tabs);

  useTitle("Orders");

  return (
    <div>
      <OrderTabLinks tabs={tabs} />
      <OrderLists 
        status={selected} 
        cardLink={id => `/orders/${id}`}
      />
    </div>
  );
}
