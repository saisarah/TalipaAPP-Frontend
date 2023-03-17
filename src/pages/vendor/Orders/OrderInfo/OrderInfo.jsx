import { DELIVERY_FEE, TRANSACTION_FEE } from "@/apis/OrderApi";
import PageHeader from "@/components/PageHeader";
import Http from "@/helpers/Http";
import { currency } from "@/helpers/utils";
import { useQuery } from "@tanstack/react-query";
import { Avatar, Button, Card, Descriptions, Spin, Steps } from "antd";
import moment from "moment";
import { Link, useParams } from "react-router-dom";

const fetchOrder = async (id) => {
  const { data } = await Http.get(`/orders/${id}`);
  return data;
};

export default function OrderInfo() {
  const { id } = useParams();

  const { data: order, isLoading } = useQuery(["orders", id], () =>
    fetchOrder(id)
  );

  return (
    <div className="app-size bg-white ">
      <PageHeader back="/orders?tab=pending" title="Order" />

      {isLoading ? (
        <div className="flex items-center justify-center py-16">
          <Spin tip="Fetching Order Information" />
        </div>
      ) : (
        <div className="w-full bg-white p-4">
          <div className="flex w-full items-center gap-2">
            <Avatar size={52} src={order.post.author.profile_picture} />
            <div className="leaing-4 flex h-full flex-grow flex-col">
              <span className=" text-xl font-bold ">
                {order.post.author.fullname}
              </span>
              <span className="">{moment(order.created_at).fromNow()}</span>
            </div>
            <div className="">
              <Link
                to={`/messages/${order.post.author_id}`}
                className=" w-20 rounded-full border-2 border-solid border-[#314026] p-1  text-xs font-bold text-[#314026] "
              >
                Message
              </Link>
            </div>
          </div>

          <div className="my-4">
            <Descriptions
              title="Order Details"
              size="small"
              bordered
              column={1}
            >
              <Descriptions.Item label="Order Status">
                <span className="capitalize">{order.order_status}</span>
              </Descriptions.Item>
              <Descriptions.Item label="Payment Method">
                TalipaAPP Wallet
              </Descriptions.Item>
              <Descriptions.Item label="Delivery Method">
                Transportify
              </Descriptions.Item>
              {!!order.post.is_straight && (
                <>
                  <Descriptions.Item label="Price">
                    {order.quantities[0].price} / {order.post.unit}
                  </Descriptions.Item>
                  <Descriptions.Item label="Quantity">
                    {order.total.quantity} Kilograms
                  </Descriptions.Item>
                  <Descriptions.Item className="font-semibold" label="Subtotal">
                    {currency(order.total.price)}
                  </Descriptions.Item>
                  <Descriptions.Item
                    className="font-semibold"
                    label="Transaction Fee"
                  >
                    {currency(order.total.price * TRANSACTION_FEE)}
                  </Descriptions.Item>
                  <Descriptions.Item
                    className="font-semibold"
                    label="Delivery Fee"
                  >
                    {currency(DELIVERY_FEE)}
                  </Descriptions.Item>
                  <Descriptions.Item
                    className="font-semibold"
                    label="Total Price"
                  >
                    {currency(
                      DELIVERY_FEE + order.total.price * (1 + TRANSACTION_FEE)
                    )}
                  </Descriptions.Item>
                </>
              )}
            </Descriptions>

            {!order.post.is_straight && (
              <Descriptions
                className="mt-4"
                title="Price"
                size="small"
                bordered
                column={1}
              >
                {order.quantities.map((price) => (
                  <Descriptions.Item key={price.id} label={price.variant}>
                    {price.quantity}
                    {order.post.unit} x {currency(parseFloat(price.price))}
                  </Descriptions.Item>
                ))}
                <Descriptions.Item className="font-semibold" label="Subtotal">
                  {currency(order.total.price)}
                </Descriptions.Item>
                <Descriptions.Item
                  className="font-semibold"
                  label="Transaction Fee"
                >
                  {currency(order.total.price * TRANSACTION_FEE)}
                </Descriptions.Item>
                <Descriptions.Item
                  className="font-semibold"
                  label="Delivery Fee"
                >
                  {currency(DELIVERY_FEE)}
                </Descriptions.Item>
                <Descriptions.Item
                  className="font-semibold"
                  label="Total Price"
                >
                  {currency(
                    DELIVERY_FEE + order.total.price * (1 + TRANSACTION_FEE)
                  )}
                </Descriptions.Item>
              </Descriptions>
            )}
          </div>

          <Link className="mt-4" to={`/posts/${order.post_id}`}>
            <Card className="rounded-lg bg-white  shadow">
              <div className="flex">
                <Avatar
                  size={100}
                  className=" flex-shrink-0 rounded-lg"
                  src={order.post.thumbnail.source}
                ></Avatar>
                <div className="ml-4">
                  <h3 className="text-lg font-bold">{order.post.title}</h3>
                  <p className="text-gray-600">{order.post.caption}</p>

                  <p className="text-sm italic text-slate-600">
                    *tap to see post
                  </p>
                </div>
              </div>
            </Card>
          </Link>

          <div className="mt-4">
            {order.order_status == "pending" && (
              <Button danger size="large" type="primary" block>
                Cancel Order
              </Button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
