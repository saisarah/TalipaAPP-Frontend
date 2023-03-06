import FormItem from "@/components/FormItem";
import Page from "@/components/Page";
import PageHeader from "@/components/PageHeader";

import { Avatar, Button, Input } from "antd";

import { Link } from "react-router-dom";

export default function ConfirmTransfer() {
  return (
    <Page className="bg-white ">
      <PageHeader back="/wallet/transfer-money" title="Transfer Money" />
      <div className="mt-4 text-center">
        <span className="text-3xl font-bold text-black">₱ 999.42</span>
      </div>
      <div className="flex w-full items-center gap-2 p-8">
        <Avatar size={40} />
        <div className="flex h-full flex-grow flex-col leading-4">
          <span className="text-sm font-bold text-black">
            Juan Paolo Ortega
          </span>

          <span className="">09123456789</span>
        </div>
        <Link>
          <div className="text-[#16A34A] underline opacity-50">
            <span>Change</span>
          </div>
        </Link>
      </div>
      <div className="bg-white p-8">
        <div className="text-slate-500">Note:</div>
        <div className="text-justify text-black">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, alias
          quam! Cum delectus corrupti omnis at, eveniet facilis facere
          inventore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
          sequi veritatis mollitia eveniet illo inventore aliquid maxime, minus
          aspernatur in!
        </div>
      </div>

      <div className="p-4 text-center">
        <span className="text-[15px] text-black">
          To complete the transaction, please <br /> enter your password.
        </span>
        <FormItem name="password">
          <Input.Password
            required
            placeholder="Enter your password here"
            size="large"
            className="mt-10 rounded text-center"
          />
        </FormItem>
      </div>

      <div className="flex-col-2 mx-7 flex gap-4 py-4">
        <Button
          type="primary"
          className="hover:bg-primary-500 flex-grow rounded-[4px] bg-[#739559]  font-bold  text-white"
        >
          Send Money
        </Button>
      </div>
    </Page>
  );
}
