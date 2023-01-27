import PageHeader from "@/components/PageHeader";
import UserOutlined from "@/icons/heroicons/UserOutlined";
import { Avatar, Button, Input, Select } from "antd";
import { CopyOutlined } from "@ant-design/icons";

export default function ForgotPasswordCode() {
  return (
    <div className="app-size bg-white">
      <PageHeader
        left={<img src="/assets/images/logo.png" className="h-16" />}
        title="TalipaAPP"
      />

      <div className="justify-start p-4">
        <p className="text-md font-bold">
          We sent you an SMS verification code
        </p>
        <span className="">
          Please check your phone for a text message with your code.
        </span>
      </div>

      <div>
        <span className="p-7 font-bold">Enter 6-digit code.</span>
      </div>

      <div className="mx-6 p-1">
        <Select
          className="m"
          mode="multiple"
          disabled
          size="large"
          style={{ width: "100%" }}
          placeholder="+***********17"
        />
      </div>

      <div className="mx-6 mt-2 flex items-center p-1">
        <Input
          className="flex grow justify-center"
          allowClear
          size="large"
          placeholder="Enter code Ex: ######"
        />
      </div>

      <div className="mb-34 my-80 flex">
        <Button className="mx-4 flex-grow rounded-md">Back</Button>
        <Button className="mx-4 flex-grow rounded-md" type="primary">
          Continue
        </Button>
      </div>
    </div>
  );
}
