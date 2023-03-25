import Wallet from "@/components/Wallet/Wallet";
import { useTitle } from "@/contexts/VendorContext";

export default function WalletPage() {
  useTitle("Wallet");

  return <Wallet className="bg-white flex-grow h-full" />

}
