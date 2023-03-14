import { Button } from "antd";
import { Straight } from "./Straight";

export const NotStraight = ({ prices, setPrice }) => {
  const toggleVariant = (variant) => {
    setPrice(variant, (oldPrice) => ({
      ...oldPrice,
      active: !oldPrice.active,
    }));
  };

  return (
    <>
      <div className="mb-4">
        Available Sizes
        <div className="mt-2 flex gap-2">
          {prices.map(
            (price) =>
              price.variant && (
                <Button
                  type={price.active ? "primary" : "default"}
                  key={price.variant}
                  shape="round"
                  onClick={() => toggleVariant(price.variant)}
                >
                  {price.variant}
                </Button>
              )
          )}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {prices.map(
          (price) =>
            price.active && (
              <div
                key={price.variant}
                className="rounded-xl border border-slate-100 bg-slate-50 p-4 pb-0 text-slate-600"
              >
                <div className="font-medium">{price.variant}</div>

                <div className="mt-2 grid grid-cols-2 gap-2">
                  <Straight
                    price={price.price}
                    stock={price.stock}
                    setPrice={(newPrice) =>
                      setPrice(price.variant, (oldPrice) => ({
                        ...oldPrice,
                        price: newPrice,
                      }))
                    }
                    setStock={(stock) =>
                      setPrice(price.variant, (oldPrice) => ({
                        ...oldPrice,
                        stock,
                      }))
                    }
                  />
                </div>
              </div>
            )
        )}
      </div>
    </>
  );
};
