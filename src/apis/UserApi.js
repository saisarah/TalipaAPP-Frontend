import Http from "@/helpers/Http";

export const fetchCurrentUser = async () => {
  const { data } = await Http.get("/user");
  return data;
};
export const currentUserKey = ["user"];

export const fetchCurrentUserBalance = async () => {
  const { data } = await Http.get("/user/balance");
  return data;
};
export const currentUserBalanceKey = ["user", "balance"];
