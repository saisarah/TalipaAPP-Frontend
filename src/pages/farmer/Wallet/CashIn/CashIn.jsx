import { cashIn, PAYMONGO_FEE } from "@/apis/WalletApi";
import Page from "@/components/Page";
import PageHeader from "@/components/PageHeader/PageHeader";
import { getErrorMessage } from "@/helpers/Http";
import { currency } from "@/helpers/utils";
import { useMutation } from "@tanstack/react-query";
import { Button, Input, notification } from "antd";
import { useState } from "react";
import gcashLogoImg from "./images/gcash_logo.png";

export default function CashIn() {
  const return_url = window.location.origin + "/farmer/wallet/cash-in/success";
  const { mutate, isLoading } = useMutation(
    (amount) => cashIn(return_url, amount),
    {
      onSuccess(data) {
        window.location = data.redirect.url;
      },

      onError(err) {
        notification.error({ message: getErrorMessage(err) });
      },
    }
  );

  const [amount, setAmount] = useState(0);
  const fee = amount * PAYMONGO_FEE;
  const total = amount - fee;

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

  return (
    <Page className="">
      <PageHeader
        back="/farmer/wallet/cash-in-methods"
        title="Cash in with GCash"
      />

      <div className="bg-white p-2 py-4">
        <div className="mb-2">Input Amount</div>
        <div>
          <Input
            disabled={isLoading}
            onChange={(e) => {
              const val = parseFloat(e.target.value);
              const amount = isNaN(val) ? 0 : val;
              setAmount(amount);
            }}
            value={amount}
            prefix="₱"
            type="number"
            size="large"
            className="rounded text-xl font-medium text-primary"
          />
        </div>
      </div>

      <div className="mt-2 bg-white p-2 py-4">
        <div className="mb-2">Payment</div>
        <div className=" flex items-center gap-4 text-black">
          <div>
            <img src={gcashLogoImg} className="h-8 w-8 rounded" />
          </div>
          <div className="flex-grow text-lg">GCash</div>
        </div>
      </div>

      <div className="mt-2 bg-white p-2 py-4">
        <div className="flex justify-between">
          <span className="text-sm text-slate-600">Cash In</span>
          <span>{currency(amount)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-slate-600">Fee</span>
          <span>{currency(fee)}</span>
        </div>
        <div className="flex justify-between text-base font-bold text-primary">
          <span className="">Total</span>
          <span>{currency(total)}</span>
        </div>

        <Button
          onClick={handleSubmit}
          loading={isLoading}
          size="large"
          type="primary"
          className="mt-4 rounded"
          block
        >
          Pay Now
        </Button>
      </div>
    </Page>
  );
}
