import { cashInPaypal } from "@/apis/WalletApi";
import { useAppContext } from "@/contexts/AppContext";
import { getErrorMessage } from "@/helpers/Http";
import { useMutation } from "@tanstack/react-query";
import { notification } from "antd";

export const useReturnUrl = () => {
  const { context, getFullPath } = useAppContext()
  if (context === "farmer")
    return getFullPath(`/farmer/wallet/cash-in/result-paypal`);
  return getFullPath(`/wallet/cash-in/result-paypal`);
}

export default function usePaypalMethod(amount) {
  const returnUrl = useReturnUrl()
  const { mutate, isLoading } = useMutation(
    (amount) => cashInPaypal(returnUrl, amount),
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
    amount,
    fees: [],
    total,
    handleSubmit,
    isLoading,
  };
}
