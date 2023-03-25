import { VendorLayout } from "@/pages/vendor/components/VendorLayout/VendorLayout";
import Help from "@/pages/vendor/Help/help";
import AddDemand from "@/pages/vendor/Home/components/AddDemand";
import { Home } from "@/pages/vendor/Home/Home";
import Chat from "@/pages/vendor/Messages/Chat";
import Messages from "@/pages/vendor/Messages/Messages";
import Notifications from "@/pages/vendor/Notifications/Notifications";
import OrderInfo from "@/pages/vendor/Orders/OrderInfo/OrderInfo";
import Orders from "@/pages/vendor/Orders/Orders";
import { PostDetails } from "@/pages/vendor/PostDetails/PostDetails";
import Posting from "@/pages/vendor/PostDetails/Posting";
import Profile from "@/pages/vendor/Profile/Profile";
import ChangeEmail from "@/pages/vendor/Settings/Forms/form/ChangeEmail";
import ChangeName from "@/pages/vendor/Settings/Forms/form/ChangeName";
import ChangeNumber from "@/pages/vendor/Settings/Forms/form/ChangeNumber";
import Settings from "@/pages/vendor/Settings/Settings";
import CashInPage from "@/pages/vendor/Wallet/CashIn/CashInPage";
import ChooseMethodPage from "@/pages/vendor/Wallet/CashIn/ChooseMethodPage";
import CashInResult from "@/pages/vendor/Wallet/CashIn/CashInResult";
import WalletPage from "@/pages/vendor/Wallet/WaletPage";

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
        element: <WalletPage />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
  {
    path: "demands/create",
    element: <AddDemand />,
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
    element: <ChooseMethodPage />,
  },
  {
    path: "wallet/cash-in",
    element: <CashInPage />,
  },
  {
    path: "wallet/cash-in/result",
    element: <CashInResult />,
  },
  // settings
  {
    path: "settings/change-name",
    element: <ChangeName />,
  },

  {
    path: "settings/change-number",
    element: <ChangeNumber />,
  },

  {
    path: "settings/change-email",
    element: <ChangeEmail />,
  },
];

export default function VendorRoutes() {
  return useRoutes(routes);
}
