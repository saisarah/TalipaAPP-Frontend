import { Avatar, Badge } from "antd";
import moment from "moment";
import { Link } from "react-router-dom";

const statusMap = {
  pending: {
    status: "warning",
    color: "#ea580c",
    text: "Pending",
    className: "text-lg text-[#ea580c]",
  },
  confirmed: {
    status: "confirmed",
    color: "#FDE047",
    text: "Confirmed",
    className: "text-lg text-[#FDE047]",
  },

  shipped: {
    status: "shipped",
    color: "#2563eb",
    text: "Shipped",
    className: "text-lg text-[#2563eb]",
  },

  cancelled: {
    status: "cancelled",
    color: "#dc2626",
    text: "Cancelled",
    className: "text-lg text-[#dc2626]",
  },

  completed: {
    status: "completed",
    color: "#16a34a",
    text: "Completed",
    className: "text-lg text text-[#16a34a]",
  },
};

export default function OrderItem({
  id,
  created_at,
  order_status,
  total,
  post,
}) {
  return (
    <div className="w-full border-b border-t bg-white">
      <ul className="">
        <li className="">
          <div href="#" className="flex w-full items-center gap-2 p-4">
            <Avatar size={52} src={post.author.profile_picture} />
            <div className="flex h-full flex-grow flex-col leading-4">
              <Link to={`/vendor/orders/${id}`}>
                <span className="text-xl font-bold">
                  {post.author.fullname}
                </span>
              </Link>
              <span className="">{moment(created_at).fromNow()}</span>
            </div>
            <div className="">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </div>
          </div>
        </li>
      </ul>

      {/* Order name */}
      <div className="flex justify-between px-4">
        <div className="text-lg font-bold text-zinc-500">
          <p>Order Name:</p>
        </div>

        <div className="text-lg">
          <p>{post.crop.name}</p>
        </div>
      </div>

      {/* Order quantity */}
      <div className="flex justify-between px-4">
        <div className="text-lg font-bold text-zinc-500">
          <p>Quantity:</p>
        </div>

        <div className="text-lg">
          <p>
            {total["quantity"]} {post.unit}
          </p>
        </div>
      </div>

      {/* Order location */}
      <div className="flex justify-between px-4">
        <div className="text-lg font-bold text-zinc-500">
          <p>Location:</p>
        </div>

        <div className="text-lg">
          <p>{post.location}</p>
        </div>
      </div>

      {/* Order status */}
      <div className="with-full border-b border-t pt-4">
        <div className="flex justify-between px-4">
          <Badge
            status={statusMap[order_status].status}
            color={statusMap[order_status].color}
            text={
              <span className={statusMap[order_status].className}>
                {statusMap[order_status].text}
              </span>
            }
          />

          <div className="text-lg">
            <p>Total: {total["price"]}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
