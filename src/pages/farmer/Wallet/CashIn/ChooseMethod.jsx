import Page from "@/components/Page";
import PageHeader from "@/components/PageHeader/PageHeader";
import { RightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import gcashLogoImg from "./images/gcash_logo.png";
import paypalImg from "@/assets/paypal.svg"

export default function ChooseMethod() {
  return (
    <Page className="bg-slate-50">
      <PageHeader back="/farmer/wallet" title="Cash In" />

      <div className="mt-1">
        <Link
          to="/farmer/wallet/cash-in"
          className="flex items-center gap-4 border-b border-slate-100 bg-white p-4 text-black"
          state="gcash"
        >
          <div>
            <img src={gcashLogoImg} className="h-8 w-8 rounded" />
          </div>
          <div className="flex-grow text-lg">GCash</div>
          <RightOutlined />
        </Link>

        <Link
          to="/farmer/wallet/cash-in"
          className="flex items-center gap-4 border-b border-slate-100 bg-white p-4 text-black"
          state="paypal"
        >
          <div>
            <img src={paypalImg} className="h-8 w-8 rounded" />
          </div>
          <div className="flex-grow text-lg">PayPal</div>
          <RightOutlined />
        </Link>

      </div>
    </Page>
  );
}
