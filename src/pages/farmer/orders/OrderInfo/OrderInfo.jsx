import PageHeader from "@/components/PageHeader";
import { useQuery } from "@tanstack/react-query";
import { Avatar, Card, Spin, Steps } from "antd";
import { Link, useParams } from "react-router-dom";
import { getOrder } from "../ordersData";

const statusMap = {
  pending: {
    className: "text-lg text-[#ea580c] capitalize",
  },
  confirmed: {
    className: "text-lg text-[#FDE047] capitalize",
  },

  shipped: {
    className: "text-lg text-[#2563eb] capitalize",
  },

  cancelled: {
    className: "text-lg text-[#dc2626] capitalize",
  },

  completed: {
    className: "text-lg text text-[#16a34a] capitalize",
  },
};

const steps = [
  {
    title: "Step 1",
    description: "This is Description",
    timestamp: "3 Days ago",
  },

  {
    title: "Step 2",
    description: "This is Description",
    timestamp: "3 Days ago",
  },

  {
    title: "Step 3",
    description: "This is Description",
    timestamp: "3 Days ago",
  },
];
const description = "This is a description.";
const extra = "this is subdescription";
const timestamp = "3 days ago";
export default function OrderInfo() {
  const { id } = useParams();

  const { data: order, isLoading } = useQuery(["orders", id], () =>
    getOrder(id)
  );

  return (
    <div className="app-size bg-white ">
      <PageHeader back={"farmer/orders"} title="Order" />

      {isLoading ? (
        <div className="flex items-center justify-center py-16">
          <Spin tip="Fetching Order Information" />
        </div>
      ) : (
        <>
          <div className="w-full border-b border-t bg-white">
            <ul>
              <li>
                <div className="flex w-full items-center gap-2 p-4">
                  <Avatar size={52} src={order.displayphoto} />
                  <div className="leaing-4 flex h-full flex-grow flex-col">
                    <span className=" text-xl font-bold ">{order.name}</span>
                    <span className="">{order.timestamp}</span>
                  </div>
                  <div className="">
                    <button className=" w-20 rounded-full border-2 border-solid border-[#314026] p-1  text-xs font-bold text-[#314026] ">
                      Message
                    </button>
                  </div>
                </div>
              </li>
            </ul>

            {/* Order Status */}
            <div className="flex justify-between px-4">
              <div className="text-lg font-bold text-zinc-400">
                <p>Order Name:</p>
              </div>

              <div className={statusMap[order.status].className}>
                <p>{order.status}</p>
              </div>
            </div>

            {/* Order name */}
            <div className="flex justify-between px-4">
              <div className="text-lg font-bold text-zinc-400">
                <p>Order Name:</p>
              </div>

              <div className="text-lg capitalize">
                <p>{order.order_name}</p>
              </div>
            </div>

            {/* Unit Price */}
            <div className="flex justify-between px-4">
              <div className="text-lg font-bold text-zinc-400">
                <p>Unit Price:</p>
              </div>

              <div className="text-lg capitalize">
                <p>₱{order.price}</p>
              </div>
            </div>

            {/* Quantity */}
            <div className="flex justify-between px-4">
              <div className="text-lg font-bold text-zinc-400">
                <p>Quantity:</p>
              </div>

              <div className="text-lg capitalize">
                <p>{order.quantity}</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex justify-between px-4">
              <div className="text-lg font-bold text-zinc-400">
                <p>Quantity:</p>
              </div>

              <div className="text-lg capitalize">
                <p>{order.location}</p>
              </div>
            </div>
          </div>

          <Link>
            <Card className="mx-4 mt-2 rounded-lg bg-white  shadow">
              <div className="flex">
                <Avatar
                  size={100}
                  className=" rounded-lg"
                  src={order.displayphoto}
                ></Avatar>
                <div className="ml-4">
                  <h3 className="text-lg font-bold">Title</h3>
                  <p className="text-gray-600">Description</p>

                  <p className="text-red-600">*tap to see post</p>
                </div>
              </div>
            </Card>
          </Link>

          {order.status == "pending" && (
            <div className="mt-4 justify-end text-center">
              <button class="align-items-center mt-2 w-10/12 rounded-[4px] bg-[#739559] p-2 font-bold text-white">
                Accept
              </button>
            </div>
          )}

          {order.status == "shipped" && (
            <>
              <div className="mt-2 w-full border-b bg-white">
                {/* Delivery Method */}
                <div className="flex justify-between px-4">
                  <div className="text-lg font-bold text-zinc-400">
                    <p>Delivery Method:</p>
                  </div>

                  <div className="text-lg capitalize">
                    {/* <p>{order.deliveryMethod}</p> */}
                    Transportify
                  </div>
                </div>

                {/* Payment Method */}
                <div className="flex justify-between px-4">
                  <div className="text-lg font-bold text-zinc-400">
                    <p>Payment Method:</p>
                  </div>

                  <div className="text-lg capitalize">
                    {/* <p>{order.paymentMethod}</p> */}
                    Gcash
                  </div>
                </div>

                {/* Tracking */}
                <div className="flex justify-between px-4">
                  <div className="text-lg font-bold text-zinc-400">
                    <p>Tracking #:</p>
                  </div>

                  <div className="text-lg capitalize">
                    {/* <p>{order.trackingNum}</p> */}
                    1Akw1298DCM5398
                  </div>
                </div>
              </div>
              <div>
                {/* <div className=" flex flex-row">
                <div className="flex">
                  {steps.map((item) => (
                    <div className="px-4 py-2">
                      <p>{item.timestamp}</p>
                      <p>{item.description}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <Steps current={1}>
                    {steps.map((step) => (
                      <Steps
                        key={step.title}
                        title={step.title}
                        extra={step.timestamp}
                      />
                    ))}
                  </Steps>
                </div> */}
                <Steps
                  className=""
                  direction="vertical"
                  current={2}
                  items={[
                    {
                      title: "To Ship",
                      description,
                      timestamp,
                      extra,
                    },
                    {
                      title: "In Progress",
                      description,
                      timestamp,
                      extra,
                      description,
                    },
                    {
                      title: "Arrived",
                      description,
                      timestamp,
                      extra,
                      description,
                    },
                    {
                      title: "Arrived",
                      description,
                      timestamp,
                      extra,
                      description,
                    },
                  ]}
                />
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}
