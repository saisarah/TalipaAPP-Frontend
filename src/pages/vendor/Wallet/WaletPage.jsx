import VendorPageHeader from "@/components/PageHeader/VendorPageHeader";
import VendorPage from "@/components/VendorPage";
import Wallet from "@/components/Wallet/Wallet";
import { useTitle } from "@/contexts/VendorContext";

export default function WalletPage() {
  useTitle("Wallet");

  return (
    <div className="h-full flex-grow lg:p-4">
      <Wallet className="h-full flex-grow bg-white lg:max-w-lg lg:rounded-lg lg:shadow" />
    </div>
  );
}
