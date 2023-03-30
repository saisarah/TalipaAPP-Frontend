import MapPinOutline from "@/icons/heroicons/MapPinOutline";
import { Avatar, Badge } from "antd";
import { Link } from "react-router-dom";

const statusColor = {
  pending: "#ea580c",
  confirmed: "#FDE047",
  processing: "#FDE047",
  shipped: "#2563eb",
  cancelled: "#dc2626",
  completed: "#16a34a",
};

export default function OrderCard({
  timestamp,
  order_name,
  quantity,
  location,
  status,
  total,
  displayphoto,
  to,
}) {
  const color = statusColor[status];
  return (
    <Link
      to={to}
      className="flex w-full gap-4 justify-between rounded-md bg-white p-4 text-slate-700 shadow-sm"
    >
      <div className="flex flex-col ">
        <span className="mb-2 text-xl font-bold text-slate-600">
          {order_name}
        </span>
        <span className=" text-sm">Quantity: {quantity}</span>
        <span className="text-sm">Price: {total}</span>
        <div className="mt-auto flex items-center gap-2 overflow-hidden overflow-ellipsis text-xs text-slate-400">
          <MapPinOutline />
          <span className=" text-ellipsis">
            {location} | {timestamp}
          </span>
        </div>
      </div>
      <div className="flex flex-shrink-0 flex-col items-center gap-2">
        <Avatar className="mt-2" size={70} src={displayphoto} />

        <Badge
          style={{ color }}
          color={color}
          text={<span className="text-sm capitalize">{status}</span>}
        />
      </div>
    </Link>
  );
}
