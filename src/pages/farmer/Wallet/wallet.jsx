import Page from "@/components/Page";
import PageHeader from "@/components/PageHeader";
import {
  DownloadOutlined,
  UnorderedListOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import Card from "antd/lib/card/Card";

export default function Wallet() {
  return (
    <Page className="bg-white">
      <PageHeader back="/farmer" title="Wallet" />
      <div>
        <div className="h-auto w-full bg-slate-50 p-2">
          <div className="text-center">
            <span className="font-light text-slate-800">
              CURRENT WALLET BALANCE
            </span>
            <div className="text-[40px] font-bold text-black">
              942983.89<sup className=" top-[-20px] text-xl font-light"> ₱</sup>
            </div>
          </div>

          <div className="inline-flex w-full justify-center gap-6 p-2 text-center">
            <Button
              className="min-w-[100px] rounded border text-[15px] font-bold"
              type="primary"
            >
              <span className="mr-2">
                <UploadOutlined style={{ fontWeight: "bold" }} />
              </span>
              Send
            </Button>
            <Button className="min-w-[100px] rounded border border-[#739559] text-[15px] font-bold text-[#739559]">
              <span className="mr-2">
                <DownloadOutlined />
              </span>
              Cash In
            </Button>
          </div>
        </div>
      </div>

      <div className="flex p-4">
        <div className="inline-flex">
          <div>Transaction History</div>
          <div className="flex-end">
            <UnorderedListOutlined />
          </div>
        </div>
      </div>
    </Page>
  );
}
