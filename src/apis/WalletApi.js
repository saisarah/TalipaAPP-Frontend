import Http from "@/helpers/Http";

export const PAYMONGO_FEE = 0.025;

export const cashInPaymongo = async (return_url, amount) => {
  const { data } = await Http.post("/wallet/cash-in-paymongo", { amount, return_url });
  return data;
};

export const cashInPaypal = async (return_url, amount) => {
  const { data } = await Http.post("/wallet/cash-in-paypal", { amount, return_url })
  return data
}

export const verifyPayment = async (id) => {
  const { data } = await Http.get(`/payment/${id}`);
  return data;
};

export const fetchTransactions = async () => {
  const { data } = await Http.get("/user/transactions");
  return data;
};