import { cashInPaymongo, PAYMONGO_FEE } from "@/apis/WalletApi";
import { getErrorMessage } from "@/helpers/Http";
import { useMutation } from "@tanstack/react-query";
import { notification } from "antd";

export default function useGcashMethod(amount)
{
  const return_url = window.location.origin + "/farmer/wallet/cash-in/result-paymongo";
  const { mutate, isLoading } = useMutation(
    (amount) => cashInPaymongo(return_url, amount),
    {
      onSuccess(data) {
        window.location = data.redirect.url;
      },
  
      onError(err) {
        notification.error({ message: getErrorMessage(err) });
      },
    }
  );
  const fee = amount * PAYMONGO_FEE;
  const total = amount - fee;

  const fees = [
    {label: "Fee", amount: fee},
  ]

  const handleSubmit = () => {
    if (amount < 500) {
      notification.error({
        message: "The minimum amount you can cash in is 500PHP",
      });
      return;
    }

    if (isLoading) return;

    mutate(amount);
  }

  return {
    amount, 
    fees,
    total,
    handleSubmit,
    isLoading
  }
}