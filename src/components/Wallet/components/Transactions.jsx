import { currency } from "@/helpers/utils";
import { useTransactions } from "@/query/queries/useTransactions";
import { CreditCardOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import moment from "moment";

export default function Transactions() {
  const { data, isLoading } = useTransactions();

  if (isLoading)
    return (
      <div className="flex justify-center py-16">
        <Spin tip="Fetching transactions" />
      </div>
    );

  if (data.length === 0)
    return (
      <div className="py-16 text-center italic text-slate-500">
        You don't have any transactions
      </div>
    );

  return (
    <div className="divide-y bg-white">
      {data.map((transaction) => {
        switch (transaction.type) {
          case "cash in":
            return (
              <div
                key={transaction.id}
                className="flex items-center gap-4 px-4 py-2"
              >
                <div className="bg-slate-50 p-4 text-slate-500">
                  <CreditCardOutlined style={{ fontSize: "24px" }} />
                </div>
                <div className="grid flex-grow grid-cols-2">
                  <span className="font-semibold">GCash</span>
                  <span className="text-right font-semibold text-green-500">
                    {currency(parseFloat(transaction.amount))}
                  </span>

                  <span className="text-sm text-slate-500">Deposit</span>
                  <span className="text-right text-sm text-slate-500">
                    {moment(transaction.created_at).fromNow()}
                  </span>
                </div>
              </div>
            );
        }
      })}
    </div>
  );
}
