import CreatePost from "@/pages/farmer/CreatePost/CreatePost";
import Help from "@/pages/farmer/Help/help";
import Commodities from "@/pages/farmer/Home/demand/Commodities";
import Region from "@/pages/farmer/Home/demand/Region";
import Home from "@/pages/farmer/Home/Home";
import MainMenu from "@/pages/farmer/MainMenu/MainMenu";
import Chat from "@/pages/farmer/Messages/Chat";
import Messages from "@/pages/farmer/Messages/Messages";
import Notifications from "@/pages/farmer/notifications/Notifications";
import OrderInfo from "@/pages/farmer/orders/OrderInfo/OrderInfo";
import Orders from "@/pages/farmer/orders/Orders";
import PostDetails from "@/pages/farmer/PostDetails/PostDetails";
import Reviews from "@/pages/farmer/Profile/components/Reviews";
import Profile from "@/pages/farmer/Profile/Profile";
import { useRoutes } from "react-router-dom";
import { groups } from "./groups";
import { settings } from "./settings";
import { wallet } from "./wallet";

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
    element: <Messages />,
  },
  {
    path: "messages/:id",
    element: <Chat />,
  },
  {
    path: "notifications",
    element: <Notifications />,
  },
  {
    path: "help",
    element: <Help />,
  },
  ...wallet,
  ...settings,
  ...groups,
];

export default function FarmerRoutes() {
  return useRoutes(routes);
}
