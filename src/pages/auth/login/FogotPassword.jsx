import PageHeader from "@/components/PageHeader";
import UserOutlined from "@/icons/heroicons/UserOutlined";
import { Avatar, Button, Input, Select } from "antd";

export default function ForgotPassword() {
  return (
    <div className="app-size bg-white">
      <PageHeader back="/login" title="TalipaAPP" />


      <div className="p-5">
        <p className="font-bold">Enter your number here </p>
        <Input
          className="m"
          mode="multiple"
          size="large"
          style={{ width: "100%" }}
          placeholder="+63"
        />
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
