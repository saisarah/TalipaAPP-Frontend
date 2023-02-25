import Page from "@/components/Page";
import PageHeader from "@/components/PageHeader";
import { Button, Input } from "antd";
import gcashLogoImg from "./images/gcash_logo.png";
import { currency } from "@/helpers/utils";
import { useState } from "react";
import Http from "@/helpers/Http";
import { useMutation } from "@tanstack/react-query";

const PAYMONGO_FEE = 0.02;

const cashIn = async (amount) => {
  const return_url = window.location.origin + "/farmer/wallet/cash-in/success";
  const { data } = await Http.post("/wallet/cash-in", { amount, return_url });
  return data;
};

export default function CashIn() {
  const { mutate, isLoading } = useMutation(cashIn, {
    onSuccess(data) {
      window.location = data.redirect.url
    },
  });

  const [amount, setAmount] = useState(0);
  const total = amount / (1 - PAYMONGO_FEE);
  const fee = total - amount;

  const handleSubmit = () => {
    if (total < 500) {
      console.log("500 minimum");
      return;
    }

    if (isLoading) return;

    mutate(total);
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
          disabled={isLoading}
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
