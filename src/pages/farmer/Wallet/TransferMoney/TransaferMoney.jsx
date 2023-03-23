import Page from "@/components/Page";
import PageHeader from "@/components/PageHeader/PageHeader";
import { CloseOutlined, SearchOutlined } from "@ant-design/icons";
import { Avatar, Input } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { Link } from "react-router-dom";

export default function WalletTransferMoney({ setStep }) {
  // const [members, setMembers] = useState([
  //   "Reilly Rubante",
  //   "Paolo Ortega",
  //   "Ruel Almonia",
  // ]);

  return (
    <Page className="bg-slate-50">
      <PageHeader back="/farmer/wallet" title="Transfer Money" />

      <div className="border-b bg-white p-4">
        <span className="text-lg font-semibold">Invite Members</span>

        <div className="flex items-center gap-2 rounded-lg border bg-white p-1">
          <SearchOutlined className=" text-slate-500" />
          <input
            type="text"
            className="flex-grow  outline-none"
            placeholder="Search or type email"
          />
          <CloseOutlined />
        </div>
      </div>
      <div className="flex w-full items-center gap-2 p-4">
        <Avatar size={35} />
        <div className="flex h-full flex-grow flex-col leading-4">
          <span className="text-sm font-bold">Juan Paolo Ortega</span>

          <span className="">09123456789</span>
        </div>
        <Link>
          <div className="text-[#16A34A] underline opacity-50">
            <span>Change</span>
          </div>
        </Link>
      </div>
      <div className="bg-white p-4">
        <TextArea rows={4} placeholder="Add Note" />
      </div>

      <div className="p-4 text-center">
        <span className=" text-sm text-slate-500">Enter amount</span>
        <Input
          type="number"
          className="mt-5 border-b-2 border-t-0 border-r-0 border-l-0 bg-transparent text-center text-lg font-bold hover:border-t-0 hover:border-r-0 hover:border-l-0 active:border-red-50 "
        />
      </div>
      <Link to="/farmer/wallet/transfer-money/confirm-transfer">
        <div className="mt-4 flex w-full justify-center px-4 text-center">
          <button className="w-11/12 rounded-[4px] bg-[#739559] p-1  font-bold  text-white">
            Accept
          </button>
        </div>
      </Link>
    </Page>
  );
}
