import { cashInPaypal } from "@/apis/WalletApi";
import logo from "@/assets/paypal.svg";
import { getErrorMessage } from "@/helpers/Http";
import { useMutation } from "@tanstack/react-query";
import { notification } from "antd";

export default function usePaypalMethod(amount) {
  const return_url =
    window.location.origin + "/farmer/wallet/cash-in/result-paypal";
  const { mutate, isLoading } = useMutation(
    (amount) => cashInPaypal(return_url, amount),
    {
      onSuccess(data) {
        window.location = data.links.find(link => link.rel == "approve").href;
      },

      onError(err) {
        notification.error({ message: getErrorMessage(err) });
      },
    }
  );
  const total = amount;

  const handleSubmit = () => {
    if (amount < 500) {
      notification.error({
        message: "The minimum amount you can cash in is 500PHP",
      });
      return;
    }

    if (isLoading) return;

    mutate(amount);
  };

  return {
    logo,
    title: "Cash in using PayPal",
    amount,
    fees: [],
    total,
    handleSubmit,
    isLoading,
  };
}
