import TabLink from "@/components/TabLink";
import { useTitle } from "@/contexts/VendorContext";
import { useTab } from "@/helpers/hooks";
import OrderLists from "./components/OrderLists";

export default function Orders() {
  const tabs = ["pending", "confirmed", "shipped", "cancelled", "completed"];
  const { selected } = useTab(tabs);

  useTitle("Orders");

  return (
    <div>
      <div className="no-scrollbar sticky top-0 z-10 flex  flex-nowrap overflow-x-auto bg-white text-lg shadow-md">
        {tabs.map((tab) => (
          <TabLink
            key={tab}
            tab={tab}
            className="flex items-center justify-center p-4 capitalize"
            activeClassName="border-b border-primary text-primary"
          />
        ))}
      </div>

      <OrderLists status={selected} />
    </div>
  );
}
