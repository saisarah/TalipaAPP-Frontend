import { currency } from "@/helpers/utils";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Divider } from "antd";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const SetQuantityStraight = ({
  unit,
  isOpen,
  setIsOpen,
  price,
  title,
  caption,
  setOrderQuantities,
}) => {
  const [value, setValue] = useState(1);

  const handleClick = () => {
    if (value < 1 || value > price.stocks) return;

    setOrderQuantities([
      {
        variant: price.variant,
        quantity: value,
      },
    ]);
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-10 bg-black/25"
          ></motion.div>
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            className="inset-x fixed bottom-0 z-20 w-full rounded-lg border bg-white p-4"
          >
            <div className="flex flex-col items-center">
              <h1 className="text-4xl font-black">{title}</h1>
              <p className="whitespace-pre-wrap">{caption}</p>

              <Divider />

              <div className="text-3xl font-bold">
                {currency(price.value)}/{unit}
              </div>

              <div className="mt-4 flex">
                <Button
                  size="small"
                  onClick={() => setValue((i) => Math.max(0, i - 1))}
                  className="shadow"
                  icon={<MinusOutlined />}
                />
                <input
                  onChange={(e) => setValue(e.target.value)}
                  value={value}
                  type="number"
                  className="w-16 appearance-none text-center outline-none"
                  min={0}
                />
                <Button
                  size="small"
                  onClick={() => setValue((i) => Math.min(i + 1, price.stocks))}
                  className="shadow"
                  icon={<PlusOutlined />}
                />
              </div>
            </div>

            <div className="mt-4 flex justify-between">
              <span>Total: </span>
              <span className="text-lg font-bold">
                {currency(value * price.value)}
              </span>
            </div>

            <Button
              onClick={handleClick}
              size="large"
              className="mt-4"
              type="primary"
              block
            >
              Proceed
            </Button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
