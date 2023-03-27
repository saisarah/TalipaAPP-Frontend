import { cancelOrder } from "@/apis/OrderApi";
import { useMutation } from "@tanstack/react-query";

export const useCancelOrder = (id, option) => {
  return useMutation(() => cancelOrder(id), option);
};
