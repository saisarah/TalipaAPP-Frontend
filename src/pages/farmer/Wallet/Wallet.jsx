import Page from "@/components/Page";
import PageHeader from "@/components/PageHeader";
import {
  DownCircleOutlined,
  DownloadOutlined,
  UnorderedListOutlined,
  UpCircleOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import { Balance } from "./components/Balance";


export default function Wallet() {
  return (
    <Page className="bg-white">
      <PageHeader back="/farmer" title="Wallet" />
      <div>
        <div className="h-auto w-full bg-slate-50 p-2">
          <Balance />

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

      <div className="flex w-full justify-between p-4">
        <div className="text-base font-bold">Transaction History</div>
        <div className="">
          <UnorderedListOutlined />
        </div>
      </div>

      <div className="flex w-full items-center gap-6 p-4">
        <span>
          <DownCircleOutlined
            className="opacity-50"
            style={{ fontSize: "22px", color: "#739559" }}
          />
        </span>
        <div className="flex h-full flex-grow flex-col leading-4">
          <span className="text-sm ">Payment received by wallet</span>
          <span className="text-xs text-slate-500">
            July 22, 2023 <span className="ml-8">2:00 am</span>
          </span>
        </div>
        <div className="text-lg font-semibold">₱ 9835.98</div>
      </div>

      <div className="flex w-full items-center gap-6 p-4">
        <span>
          <DownCircleOutlined
            className="opacity-50"
            style={{ fontSize: "22px", color: "#739559" }}
          />
        </span>
        <div className="flex h-full flex-grow flex-col leading-4">
          <span className="text-sm ">Payment received by wallet</span>
          <span className="text-xs text-slate-500">
            July 22, 2023 <span className="ml-8">2:00 am</span>
          </span>
        </div>
        <div className="text-lg font-semibold">₱ 9835.98</div>
      </div>

      <div className="flex w-full items-center gap-6 p-4">
        <span>
          <UpCircleOutlined
            className="opacity-50"
            style={{ fontSize: "22px", color: "#FF0000" }}
          />
        </span>
        <div className="flex h-full flex-grow flex-col leading-4">
          <span className="text-sm ">Payment sent to name</span>
          <span className="text-xs text-slate-500">
            July 22, 2023 <span className="ml-8">2:00 am</span>
          </span>
        </div>
        <div className="text-lg font-semibold">₱ 9835.98</div>
      </div>
    </Page>
  );
}
