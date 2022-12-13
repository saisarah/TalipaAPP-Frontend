import { Link } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Badge, Space } from "antd";

function Order({
  vendor,
  displayphoto,
  date,
  orderName,
  orderQuntity,
  location,
  status,
  totalPrice,
}) {
  return (
    <div className=" w-full border-b border-t bg-white">
      <ul className="">
        <li className="">
          <a href="#" className="flex w-full items-center gap-2 p-4">
            <span className="">
              <img
                className="rounded-full"
                src={displayphoto}
                alt=""
                height={69}
                width={69}
              />
            </span>
            <div className="flex h-full flex-grow flex-col leading-4">
              <span className="text-xl font-bold">{vendor}</span>
              <span className="">{date}</span>
            </div>
            <div className="">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="h-6 w-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </div>
          </a>
        </li>
      </ul>

      {/* Order name */}
      <div className="flex justify-between px-4">
        <div className="text-lg font-bold text-zinc-500">
          <p>Order Name:</p>
        </div>

        <div className="text-lg">
          <p>{orderName}</p>
        </div>
      </div>

      {/* Order quantity */}
      <div className="flex justify-between px-4">
        <div className="text-lg font-bold text-zinc-500">
          <p>Quantity:</p>
        </div>

        <div className="text-lg">
          <p>{orderQuntity}</p>
        </div>
      </div>

      {/* Order location */}
      <div className="flex justify-between px-4">
        <div className="text-lg font-bold text-zinc-500">
          <p>Location:</p>
        </div>

        <div className="text-lg">
          <p>{location}</p>
        </div>
      </div>

      {/* Order status */}
      <div className="with-full border-b border-t">
        <div className="flex justify-between px-4">
          <div>{status}</div>

          <div className="text-lg">
            <p>Total: {totalPrice}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Orders() {
  return (
    <div className="mx-auto max-w-md bg-slate-50">
      <PageHeader
        left={
          <Link to="/farmer">
            <ArrowLeftOutlined style={{ fontSize: "16px" }} />
          </Link>
        }
        title="Orders"
      />

      <Order
        vendor="ATCOST"
        displayphoto="https://images.unsplash.com/photo-1618556782763-ac991d2fdac8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        date="3 days ago"
        orderName="Manga"
        orderQuntity="100kg"
        location="NCR,Caloocan City"
        status={
          <Space>
            <Badge
              className="text-lg"
              status="success"
              color="#16a34a"
              text={<span className="text-lg text-[#16a34a]">Shipped</span>}
            />
          </Space>
        }
        totalPrice="0.00"
      />

      <Order
        vendor="ATCOST"
        displayphoto="https://images.unsplash.com/photo-1618556782763-ac991d2fdac8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        date="3 days ago"
        orderName="Manga"
        orderQuntity="100kg"
        location="NCR,Caloocan City"
        status={
          <Space>
            <Badge
              className="text-lg"
              status="error"
              color="#dc2626"
              text={<span className="text-lg text-[#dc2626]">Canceled</span>}
            />
          </Space>
        }
        totalPrice="0.00"
      />

      <Order
        vendor="ATCOST"
        displayphoto="https://images.unsplash.com/photo-1618556782763-ac991d2fdac8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        date="3 days ago"
        orderName="Manga"
        orderQuntity="100kg"
        location="NCR,Caloocan City"
        status={
          <Space>
            <Badge
              className="text-lg"
              color="#2563eb"
              status="processing"
              text={<span className="text-lg text-[#2563eb]">Shipped</span>}
            />
          </Space>
        }
        totalPrice="0.00"
      />

      <Order
        vendor="ATCOST"
        displayphoto="https://images.unsplash.com/photo-1618556782763-ac991d2fdac8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        date="3 days ago"
        orderName="Manga"
        orderQuntity="100kg"
        location="NCR,Caloocan City"
        status={
          <Space>
            <Badge
              status="warning"
              color="#ca8a04"
              text={<span className="text-lg text-[#ca8a04]">Confirmed </span>}
            />
          </Space>
        }
        totalPrice="0.00"
      />

      <Order
        vendor="ATCOST"
        displayphoto="https://images.unsplash.com/photo-1618556782763-ac991d2fdac8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        date="3 days ago"
        orderName="Manga"
        orderQuntity="100kg"
        location="NCR,Caloocan City"
        status={
          <Space>
            <Badge
              status="warning"
              color="#ea580c"
              text={<span className="text-lg text-[#ea580c]">Pending</span>}
            />
          </Space>
        }
        totalPrice="0.00"
      />
    </div>
  );
}
