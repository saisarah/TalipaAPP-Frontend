import { Avatar, Badge, Space } from "antd";

function Order({
  vendor,
  displayphoto,
  date,
  orderName,
  orderQuantity,
  location,
  status,
  totalPrice,
}) {
  return (
    <div className="w-full border-b border-t bg-white">
      <ul className="">
        <li className="">
          <a href="#" className="flex w-full items-center gap-2 p-4">
            <Avatar size={52} src={displayphoto} />
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
          <p>{orderQuantity}</p>
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
      <div className="with-full border-b border-t pt-4">
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

export const Confirmed = () => {
  return (
    <>
      <Order
        vendor="ATCOST"
        displayphoto="https://images.unsplash.com/photo-1618556782763-ac991d2fdac8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        date="3 days ago"
        orderName="Manga"
        orderQuantity="100kg"
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
        totalPrice="1000.00"
      />
      <Order
        vendor="ATCOST"
        displayphoto="https://images.unsplash.com/photo-1618556782763-ac991d2fdac8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        date="3 days ago"
        orderName="Manga"
        orderQuantity="100kg"
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
        totalPrice="1000.00"
      />
    </>
  );
};
