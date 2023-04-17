import Http, { hasAuthorization } from "@/helpers/Http";

export const fetchCurrentUser = async () => {
  if (!hasAuthorization()) return null;

  const { data } = await Http.get("/user");
  return data;
};
export const currentUserKey = ["user"];

export const fetchCurrentUserBalance = async () => {
  const { data } = await Http.get("/user/balance");
  return data;
};
export const currentUserBalanceKey = ["user", "balance"];

export const fetchCurrentUserCompleteAddress = async () => {
  const { data } = await Http.get("/user/address/complete");
  return data;
};

export const fetchCurrentUserAddress = async () => {
  const { data } = await Http.get("/user/address");
  return data;
};
export const currentUserCompleteAddressKey = ["user", "address", "complete"];

export const fetchUser = async (id) => {
  const { data } = await Http.get(`/users/${id}`);
  return data;
};
fetchUser.key = (id) => ["users", id];
fetchUser.fetcher = (id) => () => fetchUser(id);
//test


export const fetchUserThread = async(user_id) => {
  const { data } = await Http.get(`/users/${user_id}/thread`)
  return data
}