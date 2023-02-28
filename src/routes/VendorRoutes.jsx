import { VendorLayout } from "@/pages/vendor/components/VendorLayout/VendorLayout";
import { Home } from "@/pages/vendor/Home/Home";
import Chat from "@/pages/vendor/Messages/Chat";
import PrivateMessage from "@/pages/vendor/Messages/PrivateMessage";
import Notifications from "@/pages/vendor/Notifications/Notifications";
import OrderInfo from "@/pages/vendor/Orders/OrderInfo/OrderInfo";
import Orders from "@/pages/vendor/Orders/Orders";
import { PostDetails } from "@/pages/vendor/PostDetails/PostDetails";
import { useRoutes } from "react-router-dom";

const routes = [
  {
    path: "",
    element: <VendorLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "messages",
        element: <Chat />,
      },
      {
        path: "notifications",
        element: <Notifications />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
    ],
  },
  {
    path: "/posts/:id",
    element: <PostDetails />,
  },
  {
    path: "/messages/:id",
    element: <PrivateMessage />,
  },
  {
    path: "orders/:id",
    element: <OrderInfo />,
  },
];

export default function VendorRoutes() {
  return useRoutes(routes);
}
