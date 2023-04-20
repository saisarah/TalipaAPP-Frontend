import Page from "@/components/Page";
import PageHeader from "@/components/PageHeader/PageHeader";
import VendorPage from "@/components/VendorPage";
import CashIn from "@/components/Wallet/CashIn/CashIn";
import { Navigate, useLocation } from "react-router-dom";

export default function CashInPage() {
  const { state } = useLocation();
  const { method, label, logo, title } = state ?? {};

  if (!state) return <Navigate to="/wallet/cash-in-methods" />;

  return (
    <div className="p-4 flex-grow">
      <VendorPage className="lg:rounded-lg lg:shadow">
        <PageHeader back="/wallet/cash-in-methods" title={title} />
        <CashIn method={method} label={label} logo={logo} />
      </VendorPage>
    </div>
  );
}
