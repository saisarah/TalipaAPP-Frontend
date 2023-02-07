import { Link } from "react-router-dom";
import { useTab } from "@/helpers/hooks";
import PageHeader from "@/components/PageHeader";
import Page from "@/components/Page";
import OrderLists from "./components/OrderLists";
// import { Pending } from "./Pending";
// import { Confirmed } from "./Confirmed";
// import { Shipped } from "./Shipped";
// import { Cancelled } from "./Cancelled";
// import { Completed } from "./Completed";
export default function Orders() {
  const { isActive, selected } = useTab(
    ["pending", "confirmed", "shipped", "cancelled", "completed"],
    "pending"
  );

  return (
    <Page className="bg-slate-50">
      <PageHeader back="/farmer" title="Orders" />
      <div className="no-scrollbar sticky top-0 z-30 flex  flex-nowrap overflow-x-auto bg-white text-lg shadow-md">
        <TabLink tab="pending" isActive={isActive}>
          <span className="p-4">Pending</span>
        </TabLink>
        <TabLink tab="confirmed" isActive={isActive}>
          <span className="p-4">Confirmed</span>
        </TabLink>
        <TabLink tab="shipped" isActive={isActive}>
          <span className="p-4">Shipped</span>
        </TabLink>
        <TabLink tab="cancelled" isActive={isActive}>
          <span className="p-4">Cancelled</span>
        </TabLink>
        <TabLink tab="completed" isActive={isActive}>
          <span className="p-4">Complete</span>
        </TabLink>
      </div>

      <OrderLists selected={selected} />
      {/* {isActive("pending") && <OrderLists />} */}
      {/* {isActive("confirmed") && <OrderLists />}
      {isActive("shipped") && <OrderLists />}
      {isActive("completed") && <OrderLists />}
      {isActive("cancelled") && <OrderLists />} */}
    </Page>
  );
}

function TabLink({ children, tab, isActive }) {
  return (
    <Link
      to={`?tab=${tab}`}
      className={`flex items-center justify-center ${
        isActive(tab) ? "border-b border-primary text-primary" : ""
      }`}
      replace
    >
      {children}
    </Link>
  );
}
