import { Button, Form, notification, Select } from "antd";
import { useState } from "react";
import { required } from "../rules";
import { NotStraight } from "./NotStraight";
import { Straight } from "./Straight";

export default function Form2({ step, setStep, setData, formData }) {
  const [unit, setUnit] = useState("kg");
  const [straight, setStraight] = useState(1);
  const [prices, setPrices] = useState([
    { variant: null, price: 0, stock: 0, active: false },
    { variant: "Small", price: 0, stock: 0, active: true },
    { variant: "Medium", price: 0, stock: 0, active: false },
    { variant: "Large", price: 0, stock: 0, active: false },
  ]);

  const setPrice = (variant, price) => {
    setPrices((prices) =>
      prices.map((oldPrice) => {
        if (oldPrice.variant === variant) {
          if (typeof price === "function") return price(oldPrice);
          return price;
        }
        return oldPrice;
      })
    );
  };

  const handleSubmit = (data) => {
    const filteredPrice = prices.filter((price) => {
      if (straight) return price.variant === null;
      return price.active;
    });

    if (filteredPrice.length === 0) {
      notification.error({ message: "Please Select atleast 1 size" });
      return;
    }

    setData((oldData) => ({
      ...oldData,
      prices: filteredPrice,
      unit: data.unit,
      is_straight: straight,
    }));

    formData.set("unit", data.unit);
    formData.set("is_straight", straight);

    formData.delete("prices[][variant]");
    formData.delete("prices[][price]");
    formData.delete("prices[][stock]");
    filteredPrice.forEach((price, i) => {
      formData.append("prices[][variant]", price.variant);
      formData.append("prices[][price]", price.price);
      formData.append("prices[][stock]", price.stock);
    });

    setStep(2);
  };

  return (
    <Form
      style={{ transform: `translateX(${-step * 100}%)` }}
      className="w-full flex-shrink-0 flex-grow-0 p-4  transition"
      layout="vertical"
      onFinish={handleSubmit}
    >
      <Form.Item
        name="unit"
        rules={required()}
        label="Unit"
        tooltip="[Update this]"
        initialValue={unit}
      >
        <Select
          value={unit}
          onChange={(unit) => setUnit(unit)}
          className="rounded"
          size="large"
        >
          <Select.Option value="kg">Kilogram</Select.Option>
          <Select.Option value="pc">Piece</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Pricing Type"
        name="is_straight"
        initialValue={straight}
        tooltip="[Update this]"
      >
        <Select
          value={straight}
          onChange={(isStraight) => setStraight(isStraight)}
          className="rounded"
          size="large"
        >
          <Select.Option value={1}>Straight</Select.Option>
          <Select.Option value={0}>Not Straight</Select.Option>
        </Select>
      </Form.Item>

      {straight ? (
        <Straight
          price={prices[0].price}
          stock={prices[0].stock}
          setPrice={(price) =>
            setPrice(null, (oldPrice) => ({ ...oldPrice, price }))
          }
          setStock={(stock) =>
            setPrice(null, (oldPrice) => ({ ...oldPrice, stock }))
          }
        />
      ) : (
        <NotStraight prices={prices} setPrice={setPrice} />
      )}

      <Button
        className="mt-4"
        htmlType="submit"
        type="primary"
        size="large"
        block
      >
        Next
      </Button>
    </Form>
  );
}
