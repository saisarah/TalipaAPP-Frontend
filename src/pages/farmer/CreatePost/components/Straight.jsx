import { Form, Input } from "antd";

export const Straight = ({ price, setPrice, stock, setStock }) => {
  return (
    <>
      <Form.Item label="Price">
        <Input
          type="number"
          step={0.25}
          size="large"
          value={price}
          prefix="₱"
          min={1}
          required
          onChange={(e) =>
            setPrice(
              parseInt(e.target.value) || (e.target.value === "" ? 0 : price)
            )
          }
        />
      </Form.Item>
      <Form.Item label="Total Stocks">
        <Input
          type="number"
          size="large"
          value={stock}
          min={1}
          required
          onChange={(e) =>
            setStock(
              parseInt(e.target.value) || (e.target.value === "" ? 0 : stock)
            )
          }
        />
      </Form.Item>
    </>
  );
};
