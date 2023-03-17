import Page from "@/components/Page";
import PageHeader from "@/components/PageHeader";
import { useTab } from "@/helpers/hooks";
import OrderLists from '@/components/Orders/OrderLists';
import OrderTabLinks from "@/components/Orders/OrderTabLinks";
export default function Orders() {
  const tabs = ["pending", "confirmed", "shipped", "cancelled", "completed"];
  const { selected } = useTab(tabs);

  return (
    <Page className="bg-slate-50">
      <PageHeader back="/farmer" title="Orders" />

      <OrderTabLinks tabs={tabs} />

      <OrderLists
        cardLink={id => `/farmer/orders/${id}`}
        status={selected}
      />
    </Page>
  );
}
