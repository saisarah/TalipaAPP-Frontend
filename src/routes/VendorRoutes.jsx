import { VendorLayout } from "@/pages/vendor/components/VendorLayout/VendorLayout";
import Help from "@/pages/vendor/Help/help";
import { Home } from "@/pages/vendor/Home/Home";
import Chat from "@/pages/vendor/Messages/Chat";
import Messages from "@/pages/vendor/Messages/Messages";
import Notifications from "@/pages/vendor/Notifications/Notifications";
import OrderInfo from "@/pages/vendor/Orders/OrderInfo/OrderInfo";
import Orders from "@/pages/vendor/Orders/Orders";
import { PostDetails } from "@/pages/vendor/PostDetails/PostDetails";
import Profile from "@/pages/vendor/Profile/Profile";
import CashIn from "@/pages/vendor/Wallet/CashIn/CashIn";
import CashInMethod from "@/pages/vendor/Wallet/CashIn/CashInMethod";
import CashInResult from "@/pages/vendor/Wallet/CashIn/CashInResult";
import Wallet from "@/pages/vendor/Wallet/Walet";

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
        element: <Messages />,
      },
      {
        path: "notifications",
        element: <Notifications />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
      {
        path: "help",
        element: <Help />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "wallet",
        element: <Wallet />
      }
    ],
  },
  {
    path: "/posts/:id",
    element: <PostDetails />,
  },
  {
    path: "/messages/:id",
    element: <Chat />,
  },
  {
    path: "orders/:id",
    element: <OrderInfo />,
  },
  {
    path: "wallet/cash-in-methods",
    element: <CashInMethod />
  },
  {
    path: "wallet/cash-in",
    element: <CashIn />
  },
  {
    path: "wallet/cash-in/result",
    element: <CashInResult />
  }
];

export default function VendorRoutes() {
  return useRoutes(routes);
}
