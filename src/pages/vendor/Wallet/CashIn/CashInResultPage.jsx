import CashInResult from "@/components/Wallet/CashIn/CashInResult";

export default function CashInResultPage({ type }) {
  return <CashInResult type={type} walletLink="/wallet" />;
}
