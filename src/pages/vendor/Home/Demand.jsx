import Page from "@/components/Page";
import { ArrowUpOutlined } from "@ant-design/icons";
import peso from "./icons/peso-solid.svg";
import quantity from "./icons/input-symbol-for-numbers.svg";

import { Link } from "react-router-dom";
import { useDemandsQuery } from "@/query/queries/useDemandsQuery";
import { Button, Divider, Modal, Spin } from "antd";
import AddDemand from "./components/AddDemand";
import { useAppContext } from "@/contexts/AppContext";
import { useState } from "react";

export const Demands = () => {
  const { data, isLoading } = useDemandsQuery();
  const [open, setOpen] = useState(false)
  const { viewport } = useAppContext()

  const handleClick = (e) => {
    if (viewport.isMedium) {
      e.preventDefault()
      setOpen(true)
    }
  }

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
            <Button shape="round" size="large" color="green">
              New
            </Button>
            {/* <button className="p w-full rounded border border-emerald-700">
              New
            </button> */}
          </Link>
        </div>
      </div>

      <Divider />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
        {data.map((demand) => (
          <div
            key={demand.id}
            className="w-full rounded border border-slate-200 bg-white p-4 "
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

      <Modal
        open={open}
        centered
        bodyStyle={{ padding: 0, overflowY: 'auto' }}
        title="Post Demand"
        footer={null}
        onCancel={() => setOpen(false)}
        >
          <AddDemand />
      </Modal>
    </div>
  );
};
