import { VendorLayout } from "@/pages/vendor/components/VendorLayout/VendorLayout";
import Help from "@/pages/vendor/Help/Help";
import AddDemand from "@/pages/vendor/Home/components/AddDemand";
import { Home } from "@/pages/vendor/Home/Home";
import Notifications from "@/pages/vendor/Notifications/Notifications";
import OrderInfo from "@/pages/vendor/Orders/OrderInfo/OrderInfo";
import Orders from "@/pages/vendor/Orders/Orders";
import { PostDetails } from "@/pages/vendor/PostDetails/PostDetails";
import Profile from "@/pages/vendor/Profile/Profile";
import ChangeEmail from "@/pages/vendor/Settings/Forms/form/ChangeEmail";
import ChangeName from "@/pages/vendor/Settings/Forms/form/ChangeName";
import ChangeNumber from "@/pages/vendor/Settings/Forms/form/ChangeNumber";
import Settings from "@/pages/vendor/Settings/Settings";
import CashInPage from "@/pages/vendor/Wallet/CashIn/CashInPage";
import CashInResultPage from "@/pages/vendor/Wallet/CashIn/CashInResultPage";
import ChooseMethodPage from "@/pages/vendor/Wallet/CashIn/ChooseMethodPage";
import WalletPage from "@/pages/vendor/Wallet/WaletPage";

import ConversationPage from "@/pages/vendor/Messages/ConversationPage";
import Messages from "@/pages/vendor/Messages/Messages";
import ThreadsPage from "@/pages/vendor/Messages/ThreadsPage";
import { useRoutes } from "react-router-dom";

const routes = [
  {
    path: "",
    element: <VendorLayout />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "posts/:id",
        element: <PostDetails />,
      },
      {
        path: "messages",
        element: <Messages />,
        children: [
          {
            path: "",
            element: <ThreadsPage />
          },
          {
            path: ":id",
            element: <ConversationPage />,
          },
        ]
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
        path: "orders/:id",
        element: <OrderInfo />,
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
        path: "wallet/cash-in-methods",
        element: <ChooseMethodPage />,
      },
      {
        path: "wallet/cash-in",
        element: <CashInPage />,
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
    path: "wallet/cash-in/result-paymongo",
    element: <CashInResultPage type="paymongo"/>,
  },
  {
    path: "wallet/cash-in/result-paypal",
    element: <CashInResultPage type="paypal"/>,
  },
  {
    path: "wallet/cash-in/result-bux/:id",
    element: <CashInResultPage type="bux"/>,
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
