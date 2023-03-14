import MapPinOutline from "@/icons/heroicons/MapPinOutline";
import { Avatar, Badge, Space } from "antd";
import { Link } from "react-router-dom";
// import mangoJpg from "../images/manga.jpg";

const statusMap = {
  pending: {
    status: "warning",
    color: "#ea580c",
    text: "Pending",
    className: "text-sm text-[#ea580c]",
  },
  confirmed: {
    status: "confirmed",
    color: "#FDE047",
    text: "Confirmed",
    className: "text-sm text-[#FDE047]",
  },

  shipped: {
    status: "shipped",
    color: "#2563eb",
    text: "Shipped",
    className: "text-sm text-[#2563eb]",
  },

  cancelled: {
    status: "cancelled",
    color: "#dc2626",
    text: "Cancelled",
    className: "text-sm text-[#dc2626]",
  },

  completed: {
    status: "completed",
    color: "#16a34a",
    text: "Completed",
    className: "text-sm text text-[#16a34a]",
  },
};

export default function OrderCard({
  id,
  timestamp,
  order_name,
  quantity,
  location,
  status,
  total,
  displayphoto,
  to
}) {
  return (
    <div className="w-full border-b border-t bg-white">
      <Link to={to}>
        <div className="flex justify-between px-4 py-2">
          <div className="flex flex-col ">
            <span className="text-xl  font-bold text-black">{order_name}</span>
            <span className=" text-lg text-black">Quantity: {quantity}</span>
            <span className="text-lg text-black">Price: {total}</span>
            <div className="mt-2 flex items-center gap-2 overflow-hidden overflow-ellipsis text-xs text-slate-400">
              <MapPinOutline />
              <span className=" whitespace-nowrap ">
                {location} | {timestamp}
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar className="mt-2" size={70} src={displayphoto} />

            <Badge
              status={statusMap[status].status}
              color={statusMap[status].color}
              text={
                <span className={statusMap[status].className}>
                  {statusMap[status].text}
                </span>
              }
            />
          </div>
        </div>
      </Link>
    </div>
  );
}
