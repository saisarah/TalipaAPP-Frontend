import PageHeader from "@/components/PageHeader";
import UserOutlined from "@/icons/heroicons/UserOutlined";
import { Avatar, Button, Input, Select } from "antd";

export default function ForgotPassword() {
  return (
    <div className="app-size bg-white">
      <PageHeader back="/login" title="TalipaAPP" />

      <div className="p-5">
        <div className="py-3">
          <h2 className="text-xl font-bold ">Forgot Password</h2>
          <div className="flex">
            <div className="flex-col">
              <span className="mt-2">
                Enter your number fot the verification process,
              </span>
              <p>we will send 4 digits code to your number.</p>
            </div>
          </div>
        </div>
        <Input
          className="m"
          mode="multiple"
          size="large"
          style={{ width: "100%" }}
          placeholder="+63"
        />
      </div>

      <div className="my-20 flex">
        <Button className="mx-7 flex-grow rounded-md" type="primary">
          Continue
        </Button>
      </div>
    </div>
  );
}
