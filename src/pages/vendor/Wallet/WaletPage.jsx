import { useTitle } from "@/contexts/VendorContext";
import { Balance } from "@/components/Wallet/components/Balance";
import Transactions from "@/components/Wallet/components/Transactions";
import { DownloadOutlined, UnorderedListOutlined, UploadOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Link } from "react-router-dom";

export default function WalletPage() {
  useTitle("Wallet");

  return (
    <div className="bg-white flex-grow h-full">
      <div className="h-auto w-full bg-slate-50 p-2">
        <Balance />

        <div className="inline-flex w-full justify-center gap-6 p-2 text-center">
          {/* <Link to="/farmer/wallet/transfer-money"> */}
          <Button
            className="min-w-[100px] rounded border text-[15px]"
            type="primary"
            icon={<UploadOutlined />}
          >
            Send
          </Button>
          {/* </Link> */}

          <Link to="/wallet/cash-in-methods">
            <Button
              icon={<DownloadOutlined />}
              className="min-w-[100px] rounded border border-[#739559] text-[15px] text-[#739559]"
            >
              Cash In
            </Button>
          </Link>
        </div>
      </div>

      <div className="flex w-full justify-between p-4">
        <div className="text-base font-bold">Transaction History</div>
        <div className="">
          <UnorderedListOutlined />
        </div>
      </div>

      <Transactions />
    </div>
  );
}
