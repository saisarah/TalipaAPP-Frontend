import Http from "@/helpers/Http";

export const fetchOrders = async (status) => {
  const { data } = await Http.get(`/orders`, {
    params: { status },
  });
  return data;
};

fetchOrders.key = (status) => ["orders", { status }];
fetchOrders.fetcher = (status) => () => fetchOrders(status);
