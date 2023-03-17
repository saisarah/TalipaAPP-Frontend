import { currency } from "@/helpers/utils";
import { RightOutlined } from "@ant-design/icons";
import { Avatar, Badge } from "antd";
import moment from "moment";
import { Link } from "react-router-dom";

export default function OrderItem({
  to,
  avatar,
  name,
  created_at,
  crop,
  quantity,
  location,
  status,
  total,
}) {
  return (
    <div className="w-full border-b border-t bg-white">
      <div href="#" className="flex w-full items-center gap-2 p-4">
        <Avatar size={52} src={avatar} />
        <div className="flex h-full flex-grow flex-col leading-4">
          <Link to={to}>
            <span className="text-xl font-bold">{name}</span>
          </Link>
          <span>{moment(created_at).fromNow()}</span>
        </div>
        <RightOutlined />
      </div>

      <div className="flex justify-between px-4">
        <div className="text-lg font-bold text-zinc-500">Order Name:</div>
        <div className="text-lg">{crop}</div>
      </div>

      <div className="mt-4 flex justify-between px-4">
        <div className="text-lg font-bold text-zinc-500">Quantity:</div>
        <div className="text-lg">{quantity}</div>
      </div>

      <div className="mt-4 flex justify-between px-4 text-lg">
        <div className="text-lg font-bold text-zinc-500">Location:</div>
        <div>{location}</div>
      </div>

      <OrderStatus status={status} total={total} />
    </div>
  );
}

const statusColor = {
  pending: "#ea580c",
  confirmed: "#FDE047",
  shipped: "#2563eb",
  cancelled: "#dc2626",
  completed: "#16a34a",
};

const OrderStatus = function ({ status, total }) {
  const color = statusColor[status];

  return (
    <div className="with-full mt-4 border-b border-t py-4">
      <div className="flex justify-between px-4">
        <Badge
          style={{ color }}
          color={color}
          text={<span className="text-lg capitalize">{status}</span>}
        />{" "}
        <div className="text-lg">Total: {currency(total)}</div>
      </div>
    </div>
  );
};
