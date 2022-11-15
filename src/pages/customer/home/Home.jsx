import {
  BellOutlined,
  HeartOutlined,
  HomeFilled,
  MessageOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  WalletOutlined,
} from "@ant-design/icons";
import { Badge, Tabs } from "antd";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../../contexts/AppContext";

function SubcategoryCard() {
  return (
    <div className="bg-white p-4 text-center shadow">
      <Link
        to="/categories/1"
        className="mb-2 block font-semibold text-current"
      >
        Apples
      </Link>
      <div className="aspect-square w-full rounded bg-slate-400"></div>
    </div>
  );
}

export default function HomeCustomer() {
  const { isLogin } = useContext(AppContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mx-auto max-w-md pb-16">
      <div className="bg-white px-4">
        <div className="flex items-center justify-between py-4">
          <h1 className="text-xl font-bold">Home</h1>
          <div className="space-x-4">
            <button>
              <BellOutlined style={{ fontSize: 24 }} />
            </button>
            <Badge count={3}>
              <button>
                <HeartOutlined style={{ fontSize: 24 }} />
              </button>
            </Badge>
            <Badge count={2}>
              <button>
                <ShoppingCartOutlined style={{ fontSize: 24 }} />
              </button>
            </Badge>
          </div>
        </div>

        <div className="talipaapp-scrollbar overflow-auto py-2">
          <div className="flex gap-4">
            <img
              className="aspect-video h-36 rounded shadow"
              src="https://via.placeholder.com/500x350"
            />
            <img
              className="aspect-video h-36 rounded shadow"
              src="https://via.placeholder.com/500x350"
            />
            <img
              className="aspect-video h-36 rounded shadow"
              src="https://via.placeholder.com/500x350"
            />
          </div>
        </div>

        <div className="py-2">
          <div className="flex gap-2 rounded bg-slate-200 p-3">
            <SearchOutlined
              style={{ fontSize: 20 }}
              className="text-slate-500"
            />
            <input
              className="flex-grow bg-transparent focus:outline-none"
              type="search"
              placeholder="Search for fruits, vegetables, etc..."
            />
          </div>
        </div>

        <div className="mt-2 flex overflow-x-auto">
          <button className="whitespace-nowrap border-b-2 border-primary px-4 py-2 text-primary">
            Fruits
          </button>
          <button className="whitespace-nowrap border-b-2 border-white px-4 py-2">
            Vegetables
          </button>
          <button className="whitespace-nowrap border-b-2 border-white px-4 py-2">
            Meats
          </button>
          <button className="whitespace-nowrap border-b-2 border-white px-4 py-2">
            Root Crops
          </button>
        </div>
      </div>

      <div className="py-4">
        <div className="grid grid-cols-2 gap-2">
          <SubcategoryCard />
          <SubcategoryCard />
          <SubcategoryCard />
          <SubcategoryCard />
          <SubcategoryCard />
          <SubcategoryCard />
          <SubcategoryCard />
          <SubcategoryCard />
          <SubcategoryCard />
          <SubcategoryCard />
        </div>
      </div>


      <div className="fixed bottom-0 flex w-full max-w-md bg-white text-xs shadow">
        <button className="flex flex-grow flex-col items-center gap-1 py-3 text-primary">
          <HomeFilled style={{ fontSize: 20 }} />
          Home
        </button>
        <button className="flex flex-grow flex-col items-center gap-1 py-3">
          <WalletOutlined style={{ fontSize: 20 }} />
          E-Wallet
        </button>
        <button className="flex flex-grow flex-col items-center gap-1 py-3">
          <MessageOutlined style={{ fontSize: 20 }} />
          Messages
        </button>
        <button className="flex flex-grow flex-col items-center gap-1 py-3">
          <UserOutlined style={{ fontSize: 20 }} />
          Account
        </button>
      </div>
    </div>
  );
}
