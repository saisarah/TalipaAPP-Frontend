import Http from "@/helpers/Http";

export const TRANSACTION_FEE = 0.08;
export const DELIVERY_FEE = 200;

export const fetchOrders = async (status) => {
  const { data } = await Http.get(`/orders`, {
    params: { status },
  });
  return data;
};
fetchOrders.key = (status) => ["orders", { status }];
fetchOrders.fetcher = (status) => () => fetchOrders(status);

export const fetchOrder = async (id) => {
  const { data } = await Http.get(`/orders/${id}`);
  return data;
};
fetchOrder.key = (id) => ['orders', parseInt(id)]

export const acceptOrder = async (id) => {
  const { data } = await Http.post(`/orders/${id}`)
  return data
}

export const cancelOrder = async (id) => {
  const { data } = await Http.delete(`/orders/${id}`)
  return data;
}