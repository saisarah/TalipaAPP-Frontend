import { useReducer } from "react";

const quantityReducer = function (prices, action) {
  return prices.map((price) => {
    if (price.variant !== action.variant) return price;

    if (action.type === "INCREMENT")
      return { ...price, quantity: Math.min(price.stocks, price.quantity + 1) };

    if (action.type === "DECREMENT")
      return { ...price, quantity: Math.max(0, price.quantity - 1) };

    return { ...price, quantity: action.quantity };
  });
};

export const useQuantityReducer = (prices) => {
  return useReducer(
    quantityReducer,
    prices.map((price) => ({ ...price, quantity: 0 }))
  );  
}