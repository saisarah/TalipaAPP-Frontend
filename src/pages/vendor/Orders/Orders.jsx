import { useTitle } from "@/contexts/VendorContext";
import { useTab } from "@/helpers/hooks";
import { NavLink, useSearchParams } from "react-router-dom";
import OrderLists from "./components/OrderLists";
export default function Orders() {
  const tabs = ["pending", "confirmed", "shipped", "cancelled", "completed"];
  const { selected } = useTab(tabs, "pending");

  useTitle("Orders");

  return (
    <>
      <div className="no-scrollbar sticky top-0 z-10 flex  flex-nowrap overflow-x-auto bg-white text-lg shadow-md">
        {tabs.map((tab) => (
          <TabLink key={tab} tab={tab} />
        ))}
      </div>

      <OrderLists status={selected} />
    </>
  );
}

function TabLink({ tab }) {
  const [params] = useSearchParams();
  const isActive = params.get("tab") === tab;

  return (
    <NavLink
      to={`?tab=${tab}`}
      end
      className={`
        flex items-center justify-center ${
          isActive ? "border-b border-primary text-primary" : ""
        }      
      `}
      replace
    >
      <span className="p-4 capitalize">{tab}</span>
    </NavLink>
  );
}
