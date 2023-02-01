import { Avatar, Badge, Space } from "antd";
import PageHeader from "@/components/PageHeader";
import Page from "@/components/Page";
import { useTab } from "@/helpers/hooks";
import { Link } from "react-router-dom";
import Pending from "./Pending";
import Shipped from "./Shipped";
import Confirmed from "./Confirmed";
import Completed from "./Completed";
import Cancelled from "./Cancelled";

export default function Orders() {
  const { isActive } = useTab(
    ["pending", "confirmed", "shipped", "completed", "cancelled"],
    "pending"
  );
  return (
    <Page className="bg-white">
      <PageHeader back="/farmer" title="Orders" />

      <div className="sticky top-0 grid h-16 grid-cols-3 bg-white text-lg shadow-md">
        <TabLink tab="pending" isActive={isActive}>
          Pending
        </TabLink>
        <TabLink useTab="confirmed" isActive={isActive}>
          Confirmed
        </TabLink>
        <TabLink tab="shipped" isActive={isActive}>
          Shipped
        </TabLink>
        <TabLink tab="completed" isActive={isActive}>
          Completed
        </TabLink>
        <TabLink tab="cancelled" isActive={isActive}>
          Cancelled
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
