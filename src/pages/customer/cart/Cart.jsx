import {
  ArrowLeftOutlined,
  RightOutlined,
  ShopOutlined,
} from "@ant-design/icons";
import { Button, Checkbox, Empty } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import CartGroup from "./CartGroup";
import CartItem from "./CartItem";

function All() {
  return (
    <>
      <div className="my-4 flex flex-col gap-4">
        <CartGroup name="Sarah Grace Arlyn">
          <CartItem name="Kalabasa" />
          <CartItem name="Apple" />
          <CartItem name="Mangga" />
        </CartGroup>

        <CartGroup name="Lenard Mangay-ayam">
          <CartItem name="Repolyo" />
          <CartItem name="Broccoli" />
        </CartGroup>

        <CartGroup name="Paolo Ortega">
          <CartItem name="Grapes" />
          <CartItem name="Avocado" />
        </CartGroup>
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
    </>
  );
}

export default function Cart() {
  const [tab, setTab] = useState("all");

  return (
    <div className="mx-auto min-h-screen max-w-md pb-14">
      <div className="sticky top-0 bg-white z-10">
        <div className="bg-white px-4">
          <div className="flex items-center gap-4 py-4">
            <Link to="/" className="text-current">
              <ArrowLeftOutlined style={{ fontSize: 20 }} />
            </Link>
            <span className="text-lg font-semibold">My Cart</span>
          </div>
        </div>
        <div className="flex">
          <button
            onClick={() => setTab("all")}
            className={`flex-grow border-b py-2 px-4 ${
              tab === "all" ? "border-primary" : ""
            }`}
          >
            All
          </button>
          <button
            onClick={() => setTab("buy_again")}
            className={`flex-grow border-b py-2 px-4 ${
              tab === "buy_again" ? "border-primary" : ""
            }`}
          >
            Buy Again
          </button>
        </div>
      </div>

      {tab === "all" ? <All /> : <Empty className="my-16" />}
    </div>
  );
}
