import Page from "@/components/Page";
import PageHeader from "@/components/PageHeader";
import { useQuery } from "@tanstack/react-query";
import { Avatar, Card, Descriptions, Spin, Steps } from "antd";
import { Link, useParams } from "react-router-dom";
import { getOrder } from "../ordersData";
import mangoJpg from "../images/manga.jpg";
import vendorjpg from "../images/vendorjpg.jpg";
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
    className: "text-lg text-[#16a34a] capitalize",
  },
};

const { Step } = Steps;

export default function OrderInfo() {
  const { id } = useParams();

  const { data: order, isLoading } = useQuery(["orders", id], () =>
    getOrder(id)
  );

  const items = [
    {
      title: "Shipped",
      description: "This is a Description",
      timestamp: "2023-02-16 10:30 AM",
      icon: {},
    },
    {
      title: "In Transit",
      description: "This is a Description",
      timestamp: "2023-02-17 2:00 PM",
    },
    {
      title: "Preparing your commodities",
      description: "This is a Description",
      timestamp: "2023-02-18 4:45 PM",
    },
    {
      title: "Order Placed",
      description: "This is a Description",
      timestamp: "2023-02-19 9:15 AM",
    },
  ];

  return (
    <div className="app-size bg-white ">
      <PageHeader back="farmer/orders?tab=pending" title="Order" />

      {isLoading ? (
        <div className="flex items-center justify-center py-16">
          <Spin tip="Fetching Order Information" />
        </div>
      ) : (
        <>
          <div className="w-full border-b border-t bg-white p-4">
            <ul>
              <li>
                <div className="flex w-full items-center gap-2">
                  <Avatar size={52} src={vendorjpg} />
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

            <div className="mb-2">
              <Descriptions
                title="Order Details"
                size="small"
                bordered
                column={1}
              >
                <Descriptions.Item label="Order Status">
                  {order.status == "pending" && (
                    <span className={"capitalize text-[#ea580c] "}>
                      {order.status}
                    </span>
                  )}

                  {order.status == "confirmed" && (
                    <span className="capitalize text-[#FDE047] ">
                      {order.status}
                    </span>
                  )}

                  {order.status == "shipped" && (
                    <span className="capitalize text-[#2563eb] ">
                      {order.status}
                    </span>
                  )}

                  {order.status == "cancelled" && (
                    <span className="capitalize text-[#dc2626] ">
                      {order.status}
                    </span>
                  )}

                  {order.status == "completed" && (
                    <span className=" capitalize text-[#16a34a]">
                      {order.status}
                    </span>
                  )}
                </Descriptions.Item>
                <Descriptions.Item label="Drop off location">
                  {order.location}
                </Descriptions.Item>
                <Descriptions.Item label="Payment Method">
                  Gcash
                </Descriptions.Item>
                <Descriptions.Item label="Delivery Method">
                  Transportify
                </Descriptions.Item>
                <Descriptions.Item label="Commodity Price">
                  50 per Kilograms
                </Descriptions.Item>
                <Descriptions.Item label="Quantity">
                  {order.quantity} Kilograms
                </Descriptions.Item>
                <Descriptions.Item className="font-bold" label="Total Price ">
                  ₱{order.total}
                </Descriptions.Item>
              </Descriptions>
            </div>
          </div>

          <Link>
            <Card className="mx-4 mt-2 rounded-lg bg-white  shadow">
              <div className="flex">
                <Avatar
                  size={100}
                  className=" rounded-lg"
                  src={mangoJpg}
                ></Avatar>
                <div className="ml-4">
                  <h3 className="text-lg font-bold">Sweet Mango</h3>
                  <p className="text-gray-600">
                    Available now, ready to ship matamis.
                  </p>

                  <p className="text-red-600">*tap to see post</p>
                </div>
              </div>
            </Card>
          </Link>

          {order.status == "pending" && (
            <div className="mt-4 justify-end text-center">
              <button className="align-items-center mt-2 w-10/12 rounded-[4px] bg-[#739559] p-2 font-bold text-white">
                Accept
              </button>
            </div>
          )}

          {order.status == "shipped" && (
            <>
              <div className="mt-2 w-full bg-white">
                {/* Delivery Method */}
                {/* <div className="flex justify-between px-4">
                  <div className="text-lg font-bold text-zinc-400">
                    <p>Delivery Method:</p>
                  </div>

                  <div className="text-lg capitalize">Transportify</div>
                </div> */}

                {/* Payment Method */}
                {/* <div className="flex justify-between px-4">
                  <div className="text-lg font-bold text-zinc-400">
                    <p>Payment Method:</p>
                  </div>

                  <div className="text-lg capitalize">Gcash</div>
                </div> */}

                {/* Tracking */}
                {/* <div className="flex justify-between px-4">
                  <div className="text-lg font-bold text-zinc-400">
                    <p>Tracking #:</p>
                  </div>

                  <div className="text-lg capitalize">1Akw1298DCM5398</div>
                </div> */}
              </div>

              <div
                className="mb-4 h-1"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(45deg, #6fa6d6, #6fa6d6 33px, transparent 0, transparent 41px, #f18d9b 0, #f18d9b 74px, transparent 0, transparent 82px)",
                }}
              ></div>
              <div className="grid w-full justify-center">
                <Steps direction="vertical" current={2} className="w-full ">
                  {items.map((item, index) => (
                    <Step
                      className=""
                      key={index}
                      title={
                        <div>{item.title}</div>
                        // <div className="flex items-center justify-between">

                        // </div>
                      }
                      description={
                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <p>{item.description}</p>
                          </div>
                          <div className="text-right text-sm">
                            {item.timestamp}
                          </div>
                        </div>
                      }
                    />
                  ))}
                </Steps>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}
