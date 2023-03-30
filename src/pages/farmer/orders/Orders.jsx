import Page from "@/components/Page";
import { useTab } from "@/helpers/hooks";
import OrderLists from "@/components/Orders/OrderLists";
import OrderTabLinks from "@/components/Orders/OrderTabLinks";
import FarmerPageHeader from "@/components/PageHeader/FarmerPageHeader";
export default function Orders() {
  const tabs = ["pending", "processing", "shipped", "cancelled", "completed"];
  const { selected } = useTab(tabs);

  return (
    <Page className="md:pt-16">
      <FarmerPageHeader back="/farmer" title="Orders" />

      <div className="md:fixed md:inset-x-0 md:top-16 md:z-10 md:bg-white md:shadow-md">
        <OrderTabLinks tabs={tabs} className="max-w-screen-lg mx-auto md:shadow-none"/>
      </div>
      
      <OrderLists
        className="flex flex-col gap-2 p-2"
        cardLink={(id) => `/farmer/orders/${id}`}
        status={selected}
      />
    </Page>
  );
}
