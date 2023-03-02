import { Form, Input, Select } from "antd";
import { useState } from "react";
import { required } from "../rules";

export default function Form2({ step, setStep }) {
  const [unit, setUnit] = useState("kg");
  const [straight, setStraight] = useState(1);
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);

  return (
    <Form
      style={{ transform: `translateX(${-step * 100}%)` }}
      className="min-w-full flex-shrink-0 p-4  transition"
      layout="vertical"
      onFinish={() => setStep(2)}
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

      <Form.Item label="Total Stocks" name="stock">
        <Input type="number" size="large" />
      </Form.Item>
      <Form.Item label="Price" name="price">
        <Input type="number" step={0.25} size="large" />
      </Form.Item>
    </Form>
  );
}
