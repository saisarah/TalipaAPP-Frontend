import {
  BellOutlined,
  HeartOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Badge } from "antd";
import { Link } from "react-router-dom";

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
  return (
    <>
      <div className="bg-white px-4">
        <div className="flex items-center justify-between py-4">
          <h1 className="text-xl font-bold">Home</h1>
          <div className="space-x-4">
            <Link to='/notifications'>
              <BellOutlined style={{ fontSize: 24 }} />
            </Link>
            <Badge count={3}>
              <Link to='/likes'>
                <HeartOutlined style={{ fontSize: 24 }} />
              </Link>
            </Badge>
            <Badge count={2}>
              <Link to='/cart'>
                <ShoppingCartOutlined style={{ fontSize: 24 }} />
              </Link>
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
      </div>

      <div className="pt-2 flex overflow-x-auto bg-white px-4 sticky top-0 shadow">
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
    </>
  );
}
