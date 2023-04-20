import Page from "@/components/Page";
import PageHeader from "@/components/PageHeader/PageHeader";
import VendorPage from "@/components/VendorPage";
import ChooseMethod from "@/components/Wallet/CashIn/ChooseMethod";

export default function ChooseMethodPage() {
  return (
    <div className="p-4 flex-grow">
      <VendorPage className="bg-slate-50 h-full lg:rounded-lg lg:shadow">
        <PageHeader back="/wallet" title="Cash In" />

        <ChooseMethod to="/wallet/cash-in" />
      </VendorPage>
    </div>
  );
}
