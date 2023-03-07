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
          <Descriptions.Item label="Large">
            {currency(120)} / {unit}
          </Descriptions.Item>
          <Descriptions.Item label="Extra Large">
            {currency(155)} / {unit}
          </Descriptions.Item>
        </Descriptions>
      )}

      <Divider />

      <p className="whitespace-pre-line">{caption}</p>
    </>
  );
};
