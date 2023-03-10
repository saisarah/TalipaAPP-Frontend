import Page from "@/components/Page";
import PageHeader from "@/components/PageHeader";
import { RightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import gcashLogoImg from "./images/gcash_logo.png";

export default function CashInMethod() {
  return (
    <Page className="bg-slate-50">
      <PageHeader back="/wallet" title="Cash In" />

      <div className="mt-1">
        <Link
          to="/wallet/cash-in"
          className="flex items-center gap-4 border-b border-slate-100 bg-white p-4 text-black"
        >
          <div>
            <img src={gcashLogoImg} className="h-8 w-8 rounded" />
          </div>
          <div className="flex-grow text-lg">GCash</div>
          <RightOutlined />
        </Link>
      </div>
    </Page>
  );
}
