import PageHeader from "@/components/PageHeader";
import { useQuery } from "@tanstack/react-query";
import { Avatar, Card, Spin } from "antd";
import { useParams } from "react-router-dom";
import { getOrder } from "../ordersData";

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
              <div className="text-lg font-bold text-zinc-500">
                <p>Order Name:</p>
              </div>

              <div className="text-lg capitalize">
                <p>{order.status}</p>
              </div>
            </div>

            {/* Order name */}
            <div className="flex justify-between px-4">
              <div className="text-lg font-bold text-zinc-500">
                <p>Order Name:</p>
              </div>

              <div className="text-lg capitalize">
                <p>{order.order_name}</p>
              </div>
            </div>

            {/* Unit Price */}
            <div className="flex justify-between px-4">
              <div className="text-lg font-bold text-zinc-500">
                <p>Unit Price:</p>
              </div>

              <div className="text-lg capitalize">
                <p>{order.price}</p>
              </div>
            </div>

            {/* Quantity */}
            <div className="flex justify-between px-4">
              <div className="text-lg font-bold text-zinc-500">
                <p>Quantity:</p>
              </div>

              <div className="text-lg capitalize">
                <p>{order.quantity}</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex justify-between px-4">
              <div className="text-lg font-bold text-zinc-500">
                <p>Quantity:</p>
              </div>

              <div className="text-lg capitalize">
                <p>{order.location}</p>
              </div>
            </div>
          </div>

          <div className="mt-2 w-full border-b bg-white">
            {/* Delivery Method */}
            <div className="flex justify-between px-4">
              <div className="text-lg font-bold text-zinc-500">
                <p>Delivery Method:</p>
              </div>

              <div className="text-lg capitalize">
                {/* <p>{order.location}</p> */}
                Transportify
              </div>
            </div>

            {/* Payment Method */}
            <div className="flex justify-between px-4">
              <div className="text-lg font-bold text-zinc-500">
                <p>Payment Method:</p>
              </div>

              <div className="text-lg capitalize">
                {/* <p>{order.location}</p> */}
                Gcash
              </div>
            </div>
          </div>

          <Card className="mt-2 rounded-lg bg-white  shadow">
            <div className="flex">
              <Avatar size={100} className=" rounded-lg"></Avatar>
              <div className="ml-4">
                <h3 className="text-lg font-bold">Title</h3>
                <p className="text-gray-600">Description</p>
              </div>
            </div>
          </Card>

          <div className="justify-end text-center">
            <button class="align-items-center mt-2 w-10/12 rounded-[4px] bg-[#739559] p-2 font-bold text-white">
              Accept
            </button>
          </div>
        </>
      )}
    </div>
  );
}
