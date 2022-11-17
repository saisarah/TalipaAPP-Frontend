import {
  ArrowLeftOutlined,
  MinusOutlined,
  RightOutlined,
  ShopOutlined,
} from "@ant-design/icons";
import { Button, Checkbox } from "antd";
import { Link } from "react-router-dom";
import MapPinOutline from "../../../icons/heroicons/MapPinOutline";

export default function Cart() {
  return (
    <div className="mx-auto min-h-screen max-w-md pb-14">
      <div className="bg-white px-4">
        <div className="flex items-center gap-4 py-4">
          <Link to="/" className="text-current">
            <ArrowLeftOutlined style={{ fontSize: 20 }} />
          </Link>
          <span className="text-lg font-semibold">My Cart</span>
        </div>
      </div>
      <div className="flex bg-white">
        <button className="flex-grow border-b border-primary py-2 px-4">
          All
        </button>
        <button className="flex-grow border-b border-white py-2 px-4">
          Buy Again
        </button>
      </div>

      <div className="mt-4 bg-white p-4">
        <div className="flex items-center border-b border-gray-200 pb-2">
          <Checkbox className="font-semibold" />

          <div className="flex items-center">
            <ShopOutlined className="mx-2" />
            <span className="font-bold">Sarah Grace Arlyn</span>
            <RightOutlined className="mx-2" style={{ fontSize: 12 }} />
          </div>
        </div>
        <div className="pt-2">
          {/*  */}
          <div className="flex items-center gap-2">
            <Checkbox />
            <div className="flex flex-grow gap-2 py-2">
              <img
                className="aspace-square w-1/4 self-start rounded"
                src="https://via.placeholder.com/150"
              />
              <div className="flex flex-grow flex-col">
                <span className="text-base">Kalabasa</span>
                <div className="flex items-center gap-2 overflow-hidden overflow-ellipsis text-xs text-slate-400">
                  <MapPinOutline />
                  <span className=" whitespace-nowrap ">
                    Sta. Rosa City, Laguna hkkn
                  </span>
                </div>
                <span className="text-lg font-bold text-primary">₱70.00</span>
                <div className="mt-2 flex">
                  <button className="bg-slate-100 px-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-2 w-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 12h-15"
                      />
                    </svg>
                  </button>
                  <span className="px-2 text-sm">1</span>
                  <button className="bg-slate-100 px-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-2 w-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="items-cemter fixed bottom-0 flex w-full max-w-md bg-white shadow">
        <div className="flex flex-grow justify-between p-4">
          <Checkbox>All</Checkbox>
          <div>
            <span className="text-xs">Total: </span>
            <span className="text-base font-bold text-primary">₱0</span>
          </div>
        </div>
        <div className="flex items-center bg-primary">
          <Button type="primary" size="large">
            Check Out
          </Button>
        </div>
      </div>
    </div>
  );
}
