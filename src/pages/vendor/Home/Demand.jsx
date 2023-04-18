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
      <div className="grid grid-flow-col grid-cols-3  items-center gap-2">
        <div className="col-span-3">
          Add Your Monthly Commodity Demand Here (Note: Only one demand can be
          submitted per month)
        </div>
        <div className="text-right">
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6"
          >
            <path d="M21 6.375c0 2.692-4.03 4.875-9 4.875S3 9.067 3 6.375 7.03 1.5 12 1.5s9 2.183 9 4.875z" />
            <path d="M12 12.75c2.685 0 5.19-.586 7.078-1.609a8.283 8.283 0 001.897-1.384c.016.121.025.244.025.368C21 12.817 16.97 15 12 15s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.285 8.285 0 001.897 1.384C6.809 12.164 9.315 12.75 12 12.75z" />
            <path d="M12 16.5c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 001.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 001.897 1.384C6.809 15.914 9.315 16.5 12 16.5z" />
            <path d="M12 20.25c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 001.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 001.897 1.384C6.809 19.664 9.315 20.25 12 20.25z" />
          </svg>

          <div className="flex flex-col">
            <div className="text-xl">{demand.quantity}</div>
            <div className="pl-1 text-xs text-slate-500">Quanity</div>
          </div>
        </div>
      </div>
    </div>
  );
};
