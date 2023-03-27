import { verifyPayment } from "@/apis/WalletApi";
import { useQuery } from "@tanstack/react-query";

export const useVerifyPayment = (paymentIntentId, type) => {
  const id = `${type}_${paymentIntentId}`
  return useQuery(["payment", id], () =>
    verifyPayment(id)
  );
};
