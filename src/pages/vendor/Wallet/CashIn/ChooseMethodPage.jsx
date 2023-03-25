import Page from "@/components/Page";
import PageHeader from "@/components/PageHeader/PageHeader";
import ChooseMethod from "@/components/Wallet/CashIn/ChooseMethod";

export default function ChooseMethodPage() {
  return (
    <Page className="bg-slate-50">
      <PageHeader back="/wallet" title="Cash In" />

      <ChooseMethod to="/wallet/cash-in" />
    </Page>
  );
}
