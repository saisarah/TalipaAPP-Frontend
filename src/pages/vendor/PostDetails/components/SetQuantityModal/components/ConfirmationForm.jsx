import { currency } from "@/helpers/utils";
import { Descriptions } from "antd";
import { useEffect } from "react";
import { totalQuantityReducer, totalReducer } from "../SetQuantityModal";


export const ConfirmationForm = ({ prices, delivery, setModalProps, setOrder, setOpen, post_id }) => {

  useEffect(() => {
    setModalProps(() => ({
      okText: "Proceed",
      cancelText: "Back",
      onOk() {
        setOpen(false)
        setOrder({
          quantities: prices, 
          post_id: post_id, 
          address: delivery.address, 
          address_note: delivery.note, 
          quote: delivery.quote,
        })
      }
    }))
  }, [])

  const total = prices.reduce(totalReducer, 0)
  const totalQuantity = prices.reduce(totalQuantityReducer, 0)
  return (
    <div>
      <Descriptions title="Confirm Order" size="small" bordered column={1}>
        <Descriptions.Item label="Quantity">{totalQuantity}kg</Descriptions.Item>
        <Descriptions.Item label="Vehicle">{delivery.quote.vehicle_type.name}</Descriptions.Item>
        <Descriptions.Item label="Amount">{currency(total)}</Descriptions.Item>
        <Descriptions.Item label="Delivery Fee">
          {currency(delivery.quote.total_fees)}
        </Descriptions.Item>
      </Descriptions>
    </div>
  );
};
