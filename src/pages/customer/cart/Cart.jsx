import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button, Checkbox } from "antd";
import { Link } from "react-router-dom";
import UnderConstruction from "../../../components/UnderConstruction";

export default function Cart() {
  return (
    <div className="mx-auto min-h-screen max-w-md">
      <div className="bg-white px-4">
        <div className="flex items-center gap-4 py-4">
          <Link to="/" className="text-current">
            <ArrowLeftOutlined style={{ fontSize: 20 }} />
          </Link>
          <span className="text-lg font-semibold">My Cart</span>
        </div>
      </div>

      <div className="bg-white fixed bottom-0 max-w-md shadow flex w-full items-cemter">
        <div className="flex-grow p-4 flex justify-between">
          <Checkbox>All</Checkbox>
          <div>
            <span className="text-xs">Total: </span>
            <span className="text-base font-bold text-primary">₱0</span>
          </div>
        </div>
        <div className="bg-primary flex items-center">
          <Button type="primary" size="large">Check Out</Button>
        </div>
      </div>

    </div>
  );
}
