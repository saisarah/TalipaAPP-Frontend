import { cashIn, PAYMONGO_FEE } from "@/apis/WalletApi";
import { getErrorMessage } from "@/helpers/Http";
import { useMutation } from "@tanstack/react-query";
import { notification } from "antd";
import { useState } from "react";
import logo from "../images/gcash_logo.png";

export default function useGcashMethod(option)
{
  const return_url = window.location.origin + "/farmer/wallet/cash-in/result-paymongo";
  const { mutate, isLoading } = useMutation(
    (amount) => cashIn(return_url, amount),
    option
  );
  const [amount, setAmount] = useState(0);
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
    logo,
    title: "Cash in with Gcash",
    amount, 
    setAmount,
    fees,
    total,
    handleSubmit,
    isLoading
  }
}