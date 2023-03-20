import Page from "@/components/Page";
import { ArrowUpOutlined } from "@ant-design/icons";
import peso from "./icons/peso-solid.svg";
import quantity from "./icons/input-symbol-for-numbers.svg";

import { Link } from "react-router-dom";

export const Demands = () => {
  return (
    <Page className=" p-4">
      <div className="flex  items-center gap-4">
        <div className=" w-72 flex-initial">
          Add Your Monthly Commodity Demand Here (Note: Only one demand can be
          submitted per month)
        </div>
        <div className=" w-32 flex-initial">
          <Link to="/demands/create">
            <button className="p w-full rounded border border-emerald-700">
              New
            </button>
          </Link>
        </div>
      </div>
      <div className="mt-2 w-full rounded border border-slate-200 bg-white p-4 ">
        <div className="text-xl font-bold leading-[20px] text-black">
          Pineapple
          <br />
          <span className="text-sm font-thin text-slate-500">
            Commodity interest
          </span>
        </div>

        <div className="text-justify text-sm font-normal text-black">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>

        <div className="flex justify-between">
          <div className=" flex justify-start gap-2 pt-2 ">
            <img className="h-7 w-7" src={peso} alt="" />
            <div className="flex flex-col">
              <div className="text-xl">10,000</div>
              <div className="pl-1 text-xs text-slate-500">Budget</div>
            </div>
          </div>
          <div className=" flex justify-start gap-2 pt-2 ">
            <img className="h-7 w-7" src={quantity} alt="" />
            <div className="flex flex-col">
              <div className="text-xl">10,000</div>
              <div className="pl-1 text-xs text-slate-500">Quanity</div>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};
