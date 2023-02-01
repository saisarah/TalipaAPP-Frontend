import { Link } from "react-router-dom";
import { useTab } from "@/helpers/hooks";
import PageHeader from "@/components/PageHeader";
import Page from "@/components/Page";
import { Pending } from "./Pending";
import { Confirmed } from "./Confirmed";
export default function Orders() {
  const { isActive } = useTab(
    ["pending", "confirmed", "shipped", "cancelled", "completed"],
    "pending"
  );

  return (
    <Page className="bg-slate-50">
      <PageHeader back="/farmer" title="Orders" />
      <div className=" sticky top-0 grid h-16 grid-cols-5 gap-2 bg-white p-2 text-lg shadow-md">
        <TabLink tab="pending" isActive={isActive}>
          Pending
        </TabLink>
        <TabLink tab="confirmed" isActive={isActive}>
          Confirmed
        </TabLink>
        <TabLink tab="shipped" isActive={isActive}>
          Shipped
        </TabLink>
        <TabLink tab="cancelled" isActive={isActive}>
          Cancelled
        </TabLink>
        <TabLink tab="completed" isActive={isActive}>
          Completed
        </TabLink>
      </div>

      {isActive("pending") && <Pending />}
      {isActive("confirmed") && <Confirmed />}
      {isActive("shipped") && <Shipped />}
      {isActive("completed") && <Completed />}
      {isActive("cancelled") && <Cancelled />}
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
