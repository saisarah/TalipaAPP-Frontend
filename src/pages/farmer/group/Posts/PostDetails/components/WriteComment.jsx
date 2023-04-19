import { SendOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";

export default function WriteComment() {
  return (
    <div className="flex-shrink-0 bg-white p-2 shadow">
      <div className="flex overflow-hidden rounded-full border bg-[#EFF3F4] pl-2">
        <Input
          className="text-base text-[#0F141A] placeholder:text-[#536471]"
          bordered={false}
          size="large"
          placeholder="Write comment"
        />
        <Button
          icon={<SendOutlined className="text-primary" />}
          className="border-none"
          type="link"
          size="large"
        />
      </div>
    </div>
  );
}
