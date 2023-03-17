import { Link } from "react-router-dom";
import { useTab } from "@/helpers/hooks";
import PageHeader from "@/components/PageHeader";
import Page from "@/components/Page";
// import OrderLists from "./components/OrderLists";
import OrderLists from '@/pages/vendor/Orders/components/OrderLists'
import TabLink from "@/components/TabLink";
export default function Orders() {
  const tabs = ["pending", "confirmed", "shipped", "cancelled", "completed"];
  const { selected } = useTab(tabs);

  return (
    <Page className="bg-slate-50">
      <PageHeader back="/farmer" title="Orders" />
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

      <OrderLists
        cardLink={id => `/farmer/orders/${id}`}
        status={selected}
      />
    </Page>
  );
}
