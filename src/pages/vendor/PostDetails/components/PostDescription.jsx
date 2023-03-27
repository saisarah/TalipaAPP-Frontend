import { currency } from "@/helpers/utils";
import { Descriptions, Divider } from "antd";

export const PostDescription = ({
  paymentOption,
  deliveryOption,
  isStraight,
  prices,
  unit,
  caption,
}) => {
  return (
    <>
      <Descriptions
        className="mt-4"
        title="Product Details"
        size="small"
        bordered
        column={1}
      >
        <Descriptions.Item label="Location">
          Sta. Rosa City Laguna
        </Descriptions.Item>
        <Descriptions.Item label="Payment Method">
          {paymentOption}
        </Descriptions.Item>
        <Descriptions.Item label="Delivery Method">
          {deliveryOption}
        </Descriptions.Item>

        {isStraight && (
          <Descriptions.Item label="Available">
            {prices[0].stocks}
            {unit}
          </Descriptions.Item>
        )}
      </Descriptions>

      {!isStraight && (
        <Descriptions
          className="mt-4"
          title="Prices"
          size="small"
          bordered
          column={1}
        >
          {prices.map((price) => (
            <Descriptions.Item key={price.id} label={price.variant}>
              {currency(price.value)} / {unit}
            </Descriptions.Item>
          ))}
        </Descriptions>
      )}


      <Descriptions className="mt-4" title="Description" size="small">
        <p className="whitespace-pre-line">{caption}</p>
      </Descriptions>

      <Divider />
    </>
  );
};
