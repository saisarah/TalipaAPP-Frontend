import Page from "@/components/Page";
import PageHeader from "@/components/PageHeader/PageHeader";
import CashIn from "@/components/Wallet/CashIn/CashIn";
import { Navigate, useLocation } from "react-router-dom";

export default function CashInPage()
{
  const { state } = useLocation();
  const { method, label, logo, title } = state ?? {}

  if (!state)
    return <Navigate to="/farmer/wallet/cash-in-methods" />

  return (
    <Page>
      <PageHeader         
        back="/farmer/wallet/cash-in-methods"
        title={title}
      />
      <CashIn title={label} method={method} logo={logo}/>
    </Page>
  )
}