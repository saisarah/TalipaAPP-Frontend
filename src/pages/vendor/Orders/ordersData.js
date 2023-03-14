import { sleep } from "@/helpers/utils";

const orders = [
  {
    id: 1,
    name: "Midel Dela Cruz",
    displayphoto: "image",
    timestamp: "3 days ago",
    order_name: "Manga",
    quantity: 100,
    price: 50,
    location: "NCR, CALOOCAN CITY",
    status: "pending",
    total: 5000,
  },

  {
    id: 2,
    name: "Midel Dela Cruz",
    displayphoto: "image",
    timestamp: "3 days ago",
    order_name: "Manga",
    quantity: 100,
    price: 50,
    location: "NCR, CALOOCAN CITY",
    status: "pending",
    total: 5000,
  },

  {
    id: 3,
    name: "Midel Dela Cruz",
    displayphoto: "image",
    timestamp: "3 days ago",
    order_name: "Manga",
    quantity: 100,
    price: 50,
    location: "NCR, CALOOCAN CITY",
    status: "pending",
    total: 5000,
  },
  {
    id: 4,
    name: "Midel Dela Cruz",
    displayphoto: "image",
    timestamp: "3 days ago",
    order_name: "Manga",
    quantity: 100,
    price: 50,
    location: "NCR, CALOOCAN CITY",
    status: "pending",
    total: 5000,
  },
  {
    id: 5,
    name: "Tony Gojar",
    displayphoto: "image",
    timestamp: "3 days ago",
    order_name: "Manga",
    quantity: 100,
    price: 50,
    location: "NCR, CALOOCAN CITY",
    status: "confirmed",
    total: 5000,
  },
  {
    id: 6,
    name: "Ben Bacalla",
    displayphoto: "image",
    timestamp: "3 days ago",
    order_name: "Manga",
    quantity: 100,
    price: 50,
    location: "NCR, CALOOCAN CITY",
    status: "shipped",
    total: 5000,
  },
  {
    id: 7,
    name: "Ben Bacalla",
    displayphoto: "image",
    timestamp: "3 days ago",
    order_name: "Manga",
    quantity: 100,
    price: 50,
    location: "NCR, CALOOCAN CITY",
    status: "cancelled",
    total: 5000,
  },
  {
    id: 8,
    name: "Ben Bacalla",
    displayphoto: "image",
    timestamp: "3 days ago",
    order_name: "Manga",
    quantity: 100,
    price: 50,
    location: "NCR, CALOOCAN CITY",
    status: "completed",
    total: 5000,
  },
];

export const getOrders = async (filter = null) => {
  await sleep(500);
  if (filter === null) {
    return orders;
  }

  return orders.filter((item) => item.status === filter);
};

export const getOrder = async (id) => {
  const orders = await getOrders();
  return orders.find((order) => order.id == id);
};
