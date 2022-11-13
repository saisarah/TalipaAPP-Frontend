import { ShoppingCartOutlined } from "@ant-design/icons";
import { Button } from "antd";

export default function Product({ setIsOpen, image, name }) {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-xl">
      <div className="relative h-32 bg-yellow-500">
        <img
          src={image}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <Button
          type="text"
          icon={<ShoppingCartOutlined className="text-white" />}
          className="absolute top-2 right-2"
        />
        <div className="absolute bottom-0 flex w-full items-end justify-between bg-white bg-opacity-20 px-2 pt-1">
          <div
            onClick={() => setIsOpen(true)}
            className="text-lg font-semibold"
          >
            {name}
          </div>
          <div className="text-sm font-bold text-orange-900">₱20/kg</div>
        </div>
      </div>
      <div className="p-2">lorem ipsum dolor sit amet</div>
    </div>
  );
}