import CashIn from "@/pages/farmer/Wallet/CashIn/CashIn";
import CashInSuccess from "@/pages/farmer/Wallet/CashIn/CashInSuccess";
import ChooseMethod from "@/pages/farmer/Wallet/CashIn/ChooseMethod";
import ConfirmTransfer from "@/pages/farmer/Wallet/TransferMoney/ConfirmTransfer";
import WalletTransferMoney from "@/pages/farmer/Wallet/TransferMoney/TransaferMoney";
import Wallet from "@/pages/farmer/Wallet/Wallet";

export const wallet = [
  {
    path: "wallet",
    element: <Wallet />,
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
    element: <ChooseMethod />,
  },
  {
    path: "wallet/cash-in",
    element: <CashIn />,
  },
  {
    path: "wallet/cash-in/success",
    element: <CashInSuccess />,
  },
];