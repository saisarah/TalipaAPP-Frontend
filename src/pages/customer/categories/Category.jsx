import { ArrowLeftOutlined } from "@ant-design/icons";
import { Rate, Tabs } from "antd";
import { Link } from "react-router-dom";
import MapPinOutline from "../../../icons/heroicons/MapPinOutline";

function ProductCard()
{
  return (
    <div className="bg-white shadow rounded">
      <div className="bg-slate-300 w-full aspect-square"></div>
      <div className="p-4 flex flex-col">
        <Link className="text-current text-base" to="/products/1">Fresh fruit apple</Link>
        <span className="text-base text-primary font-medium">₱100.00</span>
        <div className="flex items-end gap-2">
          <Rate className="text-sm" allowHalf={true} value={4.5} disabled />
          <span className="text-xs text-slate-400">10 Sold</span>
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-400 mt-2 overflow-hidden overflow-ellipsis">
          <MapPinOutline />
          <span className=" whitespace-nowrap ">Sta. Rosa City, Laguna hkkn</span>
        </div>
      </div>
    </div>
  )
}

export default function Category() {
  return (
    <div className="mx-auto max-w-md">
      <div className="bg-white px-4">
        <div className="flex items-center gap-4 py-4">
          <Link to="/" className="text-current">
            <ArrowLeftOutlined style={{ fontSize: 20 }} />
          </Link>
          <span className="text-lg font-semibold">Apples</span>
        </div>
        <div className="mt-2 flex overflow-x-auto">
          <button className="whitespace-nowrap border-b-2 border-primary px-4 py-2 text-primary">
            Nearest
          </button>
          <button className="whitespace-nowrap border-b-2 border-white px-4 py-2">
            Latest
          </button>
          <button className="whitespace-nowrap border-b-2 border-white px-4 py-2">
            Top Selling
          </button>
          <button className="whitespace-nowrap border-b-2 border-white px-4 py-2">
            Lowest Price
          </button>
        </div>
      </div>

      <div className="py-4 grid grid-cols-2 gap-2">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>

    </div>
  );
}
