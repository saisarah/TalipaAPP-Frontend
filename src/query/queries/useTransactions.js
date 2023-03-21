import { fetchTransactions } from "@/apis/WalletApi";
import { useQuery } from "@tanstack/react-query";

export const useTransactions = () => {
  return useQuery(["user", "transactions"], fetchTransactions);
};
