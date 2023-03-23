import Page from "@/components/Page";
import { ArrowUpOutlined } from "@ant-design/icons";
import peso from "./icons/peso-solid.svg";
import quantity from "./icons/input-symbol-for-numbers.svg";

import { Link } from "react-router-dom";
import { useDemandsQuery } from "@/query/queries/useDemandsQuery";
import { Spin } from "antd";

export const Demands = () => {
  const { data, isLoading } = useDemandsQuery();

  if (isLoading) {
    return (
      <div className="flex justify-center py-16">
        <Spin tip="Fetching demands" />
      </div>
    );
  }

  return (
    <div className=" p-4">
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
      {data.map((demand) => (
        <div
          key={demand.id}
          className="mt-2 w-full rounded border border-slate-200 bg-white p-4 "
        >
          <div className="text-xl font-bold leading-[20px] text-black">
            {demand.crop.name}
            <br />
            <span className="text-sm font-thin text-slate-500">
              Commodity interest
            </span>
          </div>

          <div className="text-justify text-sm font-normal text-black">
            {demand.description}
          </div>

          <div className="flex justify-between">
            <div className=" flex justify-start gap-2 pt-2 ">
              <img className="h-7 w-7" src={peso} alt="" />
              <div className="flex flex-col">
                <div className="text-xl">{demand.budget}</div>
                <div className="pl-1 text-xs text-slate-500">Budget</div>
              </div>
            </div>
            <div className=" flex justify-start gap-2 pt-2 ">
              <img className="h-7 w-7" src={quantity} alt="" />
              <div className="flex flex-col">
                <div className="text-xl">{demand.quantity}</div>
                <div className="pl-1 text-xs text-slate-500">Quanity</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
