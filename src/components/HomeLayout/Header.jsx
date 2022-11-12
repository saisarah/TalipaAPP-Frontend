import { SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";

export default function Header() {
  return (
    <div className="sticky -top-8 z-20 rounded-b-[2rem] bg-orange-200 p-8 pt-12 shadow-md">
      <div className="flex items-center gap-16">
        <Input
          prefix={<SearchOutlined className="mr-2" />}
          size="large"
          className="rounded-full text-sm"
          placeholder="Search Products"
        />
        <Button
          type="text"
          size="large"
          shape="circle"
          icon={<ShoppingCartOutlined size={48} className="text-black" />}
        />
      </div>
    </div>
  );
}
