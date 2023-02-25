import Page from "@/components/Page";
import PageHeader from "@/components/PageHeader";
import {RightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import gcashLogoImg from './images/gcash_logo.png'

export default function ChooseMethod() {

  return (
    <Page className="bg-slate-50">
      <PageHeader back="/farmer/wallet" title="Cash In" />

      <div className="mt-1">
        <Link to="/farmer/wallet/cash-in" className="p-4 bg-white border-b border-slate-100 text-black flex items-center gap-4">
          <div>
            <img src={gcashLogoImg} className="w-8 h-8 rounded"/>
          </div>
          <div className="text-lg flex-grow">GCash</div>
          <RightOutlined />
        </Link>
      </div>

    </Page>
  );
}
