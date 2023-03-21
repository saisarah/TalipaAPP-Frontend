import { verifyPayment } from "@/apis/WalletApi";
import { useQuery } from "@tanstack/react-query";

export const useVerifyPayment = (paymentIntentId) => {
  return useQuery(["payment", paymentIntentId], () =>
    verifyPayment(paymentIntentId)
  );
};
