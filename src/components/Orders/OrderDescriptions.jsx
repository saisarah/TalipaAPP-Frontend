import { DELIVERY_FEE, TRANSACTION_FEE } from "@/apis/OrderApi";
import { currency } from "@/helpers/utils";
import { Descriptions } from "antd";

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
              {currency(DELIVERY_FEE)}
            </Descriptions.Item>
            <Descriptions.Item className="font-semibold" label="Total Price">
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
          <Descriptions.Item className="font-semibold" label="Transaction Fee">
            {currency(order.total.price * TRANSACTION_FEE)}
          </Descriptions.Item>
          <Descriptions.Item className="font-semibold" label="Delivery Fee">
            {currency(DELIVERY_FEE)}
          </Descriptions.Item>
          <Descriptions.Item className="font-semibold" label="Total Price">
            {currency(DELIVERY_FEE + order.total.price * (1 + TRANSACTION_FEE))}
          </Descriptions.Item>
        </Descriptions>
      )}
    </div>
  );
}
