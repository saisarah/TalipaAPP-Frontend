import PageHeader from "@/components/PageHeader";
import UserOutlined from "@/icons/heroicons/UserOutlined";
import { Avatar, Button, Select } from "antd";

export default function ForgotPassword() {
  return (
    <div className="app-size bg-white">
      <PageHeader
        left={<img src="/assets/images/logo.png" className="h-16" />}
        title="TalipaAPP"
      />

      <div className="justify-start p-4">
        <p className="font-bold ">We sent you an SMS verification code</p>
        <Avatar
          className="border border-green-500"
          size={"large"}
          icon={<UserOutlined />}
        />
        <span className="p-2">Lalata, Jhunriz B.</span>
      </div>
    
      <div className="p-5">
      <p className="font-bold">We'll send it to on number: </p>
        <Select
          className="m"
          mode="multiple"
          disabled
          size="large"
          style={{ width: "100%" }}
          placeholder="+***********17"
        />
      </div>

    <div className="flex justify-center p-16">
    <img src="/assets/images/searchGroup.png" sizes="large" />
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
