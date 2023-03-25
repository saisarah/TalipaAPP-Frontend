import CashInPage from "@/pages/farmer/Wallet/CashIn/CashInPage";
import CashInResultPage from "@/pages/farmer/Wallet/CashIn/CashInResultPage";
import ChooseMethodPage from "@/pages/farmer/Wallet/CashIn/ChooseMethodPage";
import ConfirmTransfer from "@/pages/farmer/Wallet/TransferMoney/ConfirmTransfer";
import WalletTransferMoney from "@/pages/farmer/Wallet/TransferMoney/TransaferMoney";
import WalletPage from "@/pages/farmer/Wallet/WalletPage";

export const wallet = [
  {
    path: "wallet",
    element: <WalletPage />,
  },
  {
    path: "wallet/transfer-money",
    element: <WalletTransferMoney />,
  },
  {
    path: "wallet/transfer-money/confirm-transfer",
    element: <ConfirmTransfer />,
  },
  {
    path: "wallet/cash-in-methods",
    element: <ChooseMethodPage />,
  },
  {
    path: "wallet/cash-in",
    element: <CashInPage />,
  },
  {
    path: "wallet/cash-in/result-paymongo",
    element: <CashInResultPage type="paymongo"/>,
  },
  {
    path: "wallet/cash-in/result-paypal",
    element: <CashInResultPage type="paypal" />
  }
];
