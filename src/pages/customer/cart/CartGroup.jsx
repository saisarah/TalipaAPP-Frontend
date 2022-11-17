import { RightOutlined, ShopOutlined } from "@ant-design/icons";
import { Checkbox } from "antd";
import CartItem from "./CartItem";

export default function CartGroup({ children, name }) {
  return (
    <div className="bg-white p-4">
      <div className="flex items-center border-b border-gray-200 pb-2">
        <Checkbox className="font-semibold" />

        <div className="flex items-center">
          <ShopOutlined className="mx-2" />
          <span className="font-bold">{ name }</span>
          <RightOutlined className="mx-2" style={{ fontSize: 12 }} />
        </div>
      </div>
      <div className="pt-2">
        {children}
      </div>
    </div>
  );
}
