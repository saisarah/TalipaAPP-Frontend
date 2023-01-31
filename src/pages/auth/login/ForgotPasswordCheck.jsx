import PageHeader from "@/components/PageHeader";
import UserOutlined from "@/icons/heroicons/UserOutlined";
import { Avatar, Button, Input, Radio, Select } from "antd";

export default function ForgotPasswordCheck() {
  return (
    <div className="app-size bg-white">
      <PageHeader back="/forgotpassword" title="TalipaAPP" />

      <div className="p-5">
        <p className="font-bold">Enter your number here </p>
      </div>
      <div className="flex flex-col content-start rounded-md px-5">
        <div className="flex grow bg-gray-100 p-5 px-5 shadow-sm">
          <div className="flex grow flex-col p-2 text-xs">
            <span className="ml-2 font-bold flex grow"> Send code via SMS </span>

          </div>
        </div>
      </div>

      <div className="my-20 flex">
        <Button className="mx-4 flex-grow rounded-md">Back</Button>
        <Button className="mx-4 flex-grow rounded-md" type="primary">
          Continue
        </Button>
      </div>
    </div>
  );
}
