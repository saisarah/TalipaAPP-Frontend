import { TRANSACTION_FEE } from "@/apis/OrderApi";
import { currency } from "@/helpers/utils";
import { LinkOutlined } from "@ant-design/icons";
import { Button, Descriptions } from "antd";
import moment from "moment";

export default function OrderDescriptions({ order, ...props }) {
  return (
    <div {...props}>
      <Descriptions title="Order Details" size="small" bordered column={1}>
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
            <Descriptions.Item className="font-semibold" label="Delivery Fee">
              {currency(order.delivery_option.total_fees)}
            </Descriptions.Item>
            <Descriptions.Item className="font-semibold" label="Total Price">
              {currency(
                order.delivery_option.total_fees +
                  order.total.price * (1 + TRANSACTION_FEE)
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
          <Descriptions.Item className="font-semibold" label="Transaction Fee">
            {currency(order.total.price * TRANSACTION_FEE)}
          </Descriptions.Item>
          <Descriptions.Item className="font-semibold" label="Delivery Fee">
            {currency(order.delivery_option.total_fees)}
          </Descriptions.Item>
          <Descriptions.Item className="font-semibold" label="Total Price">
            {currency(
              order.delivery_option.total_fees +
                order.total.price * (1 + TRANSACTION_FEE)
            )}
          </Descriptions.Item>
        </Descriptions>
      )}

      {order.delivery_status && (
        <Descriptions
          className="mt-4"
          title="Delivery Status"
          size="small"
          bordered
          column={1}
        >
          <Descriptions.Item label="Booking ID">
            #{order.delivery_status.id}
          </Descriptions.Item>
          <Descriptions.Item label="Vehicle Type">
            {order.delivery_status.vehicle_type}
          </Descriptions.Item>
          <Descriptions.Item label="Status">
            {order.delivery_status.status}
          </Descriptions.Item>
          <Descriptions.Item label="Driver">
            {order.delivery_status.driver?.name ?? "Pending"}
          </Descriptions.Item>
          {order.delivery_status.tracking_url && (
            <Descriptions.Item label="Tracking Url">
              <a href={order.delivery_status.tracking_url}>
                <Button size="small" icon={<LinkOutlined />}>Open Link</Button>
              </a>
            </Descriptions.Item>
          )}
        </Descriptions>
      )}
    </div>
  );
}
