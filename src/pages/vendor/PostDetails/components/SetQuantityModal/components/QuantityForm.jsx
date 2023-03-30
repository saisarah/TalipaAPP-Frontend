import { currency } from "@/helpers/utils";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { useEffect } from "react";
import { totalReducer } from "../SetQuantityModal";


export const QuantityForm = ({ setStep, setModalProps, prices, dispatch }) => {
  const total = prices.reduce(totalReducer, 0)

  useEffect(() => {
    setModalProps({
      okText: 'Next',
      onOk() {
        if (total > 0)
          setStep(step => step + 1)
      }
    });

    return () => {
      setModalProps({})
    }
  }, [prices]);

  return (
    <Form layout="vertical" size="large">
      <div className="font-semibold">Enter Quantity:</div>
      <div className="flex w-full flex-col gap-2">
        {prices.map((price) => (
          <div key={price.id} className="flex items-center justify-between">
            <div
              style={{ display: price.variant ? "block" : "none" }}
              className="min-w-[64px]"
            >
              {price.variant}
            </div>
            <div className="flex items-center rounded border">
              <Button
                className="border-0 border-r"
                icon={<MinusOutlined className="text-slate-600" />}
                onClick={() =>
                  dispatch({ type: "DECREMENT", variant: price.variant })
                }
              />
              <Input
                onChange={(e) =>
                  dispatch({ quantity: e.target.value, variant: price.variant })
                }
                value={price.quantity}
                type="number"
                className="w-16 appearance-none border-0 text-center outline-none"
                min={0}
              />
              <Button
                className="border-0 border-l"
                icon={<PlusOutlined className="text-slate-600" />}
                onClick={() =>
                  dispatch({ type: "INCREMENT", variant: price.variant })
                }
              />
            </div>
            <div className="min-w-[76px] text-right">
              {currency(price.quantity * price.value)}
            </div>
          </div>
        ))}
      </div>
    </Form>
  );
};