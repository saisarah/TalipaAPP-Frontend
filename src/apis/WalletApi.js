import Http from "@/helpers/Http";

export const PAYMONGO_FEE = 0.025;

export const cashIn = async (return_url, amount) => {
  const { data } = await Http.post("/wallet/cash-in", { amount, return_url });
  return data;
};

export const verifyPayment = async (id) => {
  const { data } = await Http.get(`/payment/${id}`);
  return data;
};