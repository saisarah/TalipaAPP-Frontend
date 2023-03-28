import Page from "@/components/Page";
import { ArrowUpOutlined } from "@ant-design/icons";
import peso from "./icons/peso-solid.svg";
import quantity from "./icons/input-symbol-for-numbers.svg";

import { Link, useLocation } from "react-router-dom";
import { useDemandsQuery } from "@/query/queries/useDemandsQuery";
import { Button, Divider, Form, Modal, Spin } from "antd";
import AddDemand, { AddDemandModal } from "./components/AddDemand";
import { useAppContext } from "@/contexts/AppContext";
import { useRef, useState } from "react";

export const Demands = () => {
  const { state } = useLocation();
  const { data, isLoading } = useDemandsQuery();
  const [open, setOpen] = useState(state?.from === "/demands/create");
  const { viewport } = useAppContext();

  const handleClick = (e) => {
    if (viewport.isLarge) {
      e.preventDefault();
      setOpen(true);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center py-16">
        <Spin tip="Fetching demands" />
      </div>
    );
  }

  return (
    <div className=" p-4">
      <div className="flex  items-center justify-between gap-4">
        <div className="flex-initial">
          Add Your Monthly Commodity Demand Here (Note: Only one demand can be
          submitted per month)
        </div>
        <div className="">
          <Link to="/demands/create" onClick={handleClick}>
            <Button shape="round" size="large">
              New
            </Button>
          </Link>
        </div>
      </div>

      <Divider />

      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-3">
        {data.map((demand) => (
          <DemandCard demand={demand} key={demand.id} />
        ))}
      </div>

      <AddDemandModal open={open} setOpen={setOpen} />
    </div>
  );
};

const DemandCard = ({ demand }) => {
  return (
    <div className="w-full rounded border border-slate-200 bg-white p-4 ">
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
  );
};
