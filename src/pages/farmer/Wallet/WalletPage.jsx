import Page from "@/components/Page";
import PageHeader from "@/components/PageHeader/PageHeader";
import Wallet from "@/components/Wallet/Wallet";

export default function WalletPage() {
  return (
    <Page className="bg-white">
      <PageHeader className="block md:hidden" back="/farmer" title="Wallet" />
      <Wallet />
    </Page>
  );
}
