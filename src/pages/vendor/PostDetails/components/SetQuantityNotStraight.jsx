import { currency } from "@/helpers/utils";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Divider, Input } from "antd";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";

export default function SetQuantityNotStraight({
  prices,
  title,
  caption,
  setOrderQuantities,
  isOpen,
  setIsOpen,
}) {
  const [quantities, setQuantities] = useState(
    prices.map((price) => ({ ...price, quantity: 0 }))
  );
  const total = useMemo(
    () =>
      quantities.reduce((acm, quantity) => {
        return acm + quantity.quantity * quantity.value;
      }, 0),
    quantities
  );

  const setQuantity = (variant, updater) => {
    setQuantities((quantities) =>
      quantities.map((quantity) => {
        if (quantity.variant === variant) {
          return {
            ...quantity,
            quantity:
              typeof updater === "function"
                ? updater(quantity.quantity)
                : updater,
          };
        }
        return quantity;
      })
    );
  };

  const handleSubmit = () => {
    if (total <= 0) return;
    setOrderQuantities(quantities.map(({quantity, variant}) => ({quantity, variant})));
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
          />
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            className="fixed bottom-0 z-20 w-full max-w-md rounded-lg border bg-white p-4"
          >
            <div className="flex flex-col items-center">
              <h1 className="text-4xl font-black">{title}</h1>
              <p className="whitespace-pre-wrap">{caption}</p>

              <Divider />
              <div className="flex w-full flex-col gap-4">
                {quantities.map((price) => (
                  <div key={price.id} className="grid grid-cols-3 items-center">
                    <div>{price.variant}</div>
                    <div className="mx-auto flex items-center rounded border">
                      <Button
                        className="border-0 border-r"
                        icon={<MinusOutlined className="text-slate-600" />}
                        onClick={() =>
                          setQuantity(
                            price.variant,
                            Math.max(0, price.quantity - 1)
                          )
                        }
                      />
                      <Input
                        onChange={(e) =>
                          setQuantity(price.variant, e.target.value)
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
                          setQuantity(
                            price.variant,
                            Math.min(price.stocks, price.quantity + 1)
                          )
                        }
                      />
                    </div>
                    <div className="text-right">
                      {currency(price.quantity * price.value)}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 flex justify-between">
              <span>Total: </span>
              <span className="text-lg font-bold">{currency(total)}</span>
            </div>

            <Button
              onClick={handleSubmit}
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
}
