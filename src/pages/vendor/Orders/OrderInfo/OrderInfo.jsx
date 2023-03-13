import Page from "@/components/Page";
import PageHeader from "@/components/PageHeader";
import Http from "@/helpers/Http";
import { useQuery } from "@tanstack/react-query";
import { Avatar, Card, Descriptions, Spin, Steps } from "antd";
import moment from "moment";
import { Link, useParams } from "react-router-dom";
import { getOrder } from "../ordersData";

const { Step } = Steps;

const fetchOrder = async (id) => {
  const { data } = await Http.get(`/orders/${id}`);
  return data;
};

export default function OrderInfo() {
  const { id } = useParams();

  const { data: order, isLoading } = useQuery(["orders", id], () =>
    fetchOrder(id)
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
                  <Avatar size={52} src={order.post.author.profile_picture} />
                  <div className="leaing-4 flex h-full flex-grow flex-col">
                    <span className=" text-xl font-bold ">
                      {order.post.author.fullname}
                    </span>
                    <span className="">
                      {moment(order.created_at).fromNow()}
                    </span>
                  </div>
                  <div className="">
                    <Link to={`/messages/${order.post.author_id}`} className=" w-20 rounded-full border-2 border-solid border-[#314026] p-1  text-xs font-bold text-[#314026] ">
                      Message
                    </Link>
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
                  ₱{order.total.price}
                </Descriptions.Item>
              </Descriptions>
            </div>
          </div>

          <Link>
            <Card className="mx-4 mt-2 rounded-lg bg-white  shadow">
              <div className="flex">
                <Avatar size={100} className=" rounded-lg" src={order.post.thumbnail.source}></Avatar>
                <div className="ml-4">
                  <h3 className="text-lg font-bold">{order.post.title}</h3>
                  <p className="text-gray-600">
                    {order.post.caption}
                  </p>

                  <p className="text-slate-600 text-sm italic">*tap to see post</p>
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
              <div className="mt-2 w-full bg-white"></div>

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
