import CreatePost from "@/pages/farmer/CreatePost/CreatePost";
import Home from "@/pages/farmer/Home/Home";
import MainMenu from "@/pages/farmer/MainMenu/MainMenu";
import PostDetails from "@/pages/farmer/PostDetails/PostDetails";
import Profile from "@/pages/farmer/Profile/Profile";
import Orders from "@/pages/farmer/orders/Orders";
import Commodities from "@/pages/farmer/Home/demand/Commodities";
import Region from "@/pages/farmer/Home/demand/Region";
import Chat from "@/pages/farmer/Chat/Chat";
import PrivateMessage from "@/pages/farmer/Chat/PrivateMessage";
import Notifications from "@/pages/farmer/notifications/Notifications";
import OrderInfo from "@/pages/farmer/orders/OrderInfo/OrderInfo";
import Reviews from "@/pages/farmer/Profile/components/Reviews";
import Wallet from "@/pages/farmer/Wallet/Wallet";
import { useRoutes } from "react-router-dom";
import { groups } from "./groups";
import { settings } from "./settings";
import CashIn from "@/pages/farmer/Wallet/CashIn/CashIn";

/**
 * All of the path is under farmer route
 * e.g.
 * home => /farmer/home
 * post/create => /farmer/post/create
 */
const routes = [
  {
    path: "",
    element: <MainMenu />,
  },
  {
    path: "home",
    element: <Home />,
  },
  {
    path: "home/commodities/banana",
    element: <Commodities />,
  },
  {
    path: "home/commodities/Banana/Region I (Ilocos Region)",
    element: <Region />,
  },

  {
    path: "posts/create",
    element: <CreatePost />,
  },
  {
    path: "posts/:id",
    element: <PostDetails />,
  },
  {
    path: "profile",
    element: <Profile />,
  },
  {
    path: "profile/reviews",
    element: <Reviews />,
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
    path: "messages",
    element: <Chat />,
  },
  {
    path: "messages/:id",
    element: <PrivateMessage />,
  },
  {
    path: "notifications",
    element: <Notifications />,
  },
  {
    path: "wallet",
    element: <Wallet />,
  },
  {
    path: "wallet/cash-in",
    element: <CashIn />
  },
  ...settings,
  ...groups
];

export default function FarmerRoutes() {
  return useRoutes(routes);
}
