import Page from "@/components/Page";
import PageHeader from "@/components/PageHeader/PageHeader";
import ChooseMethod from "@/components/Wallet/CashIn/ChooseMethod";


export default function ChooseMethodPage()
{
  return (
    <Page className="bg-slate-50">
      <PageHeader back="/farmer/wallet" title="Cash In" />
      <ChooseMethod to="/farmer/wallet/cash-in" className="mt-1" />
    </Page>
  );
}