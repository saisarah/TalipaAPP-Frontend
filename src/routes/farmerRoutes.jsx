import CreatePost from "@/pages/farmer/CreatePost/CreatePost";
import { Posts as GroupPosts } from "@/pages/farmer/group/Posts/Posts";
import Group from "@/pages/farmer/group/Group";
import GroupInfo from "@/pages/farmer/group/GroupInfo/GroupInfo";
import Home from "@/pages/farmer/Home/Home";
import MainMenu from "@/pages/farmer/MainMenu/MainMenu";
import Conversations from "@/pages/farmer/messages/Conversations";
import PostDetails from "@/pages/farmer/PostDetails/PostDetails";
import Profile from "@/pages/farmer/Profile/Profile";
import { PostDetails as GroupPostDetails } from "@/pages/farmer/group/PostDetails/PostDetails";
import CreateGroup from "@/pages/farmer/group/CreateGroup/CreateGroup";
import Orders from "@/pages/farmer/orders/Orders";
import Commodities from "@/pages/farmer/Home/demand/Commodities";
import Region from "@/pages/farmer/Home/demand/Region";
import Chat from "@/pages/farmer/Chat/Chat";
import PrivateMessage from "@/pages/farmer/Chat/PrivateMessage";
import Notifications from "@/pages/farmer/notifications/Notifications";
import Settings from "@/pages/farmer/settings/Settings";
import ChangePassword from "@/pages/farmer/settings/form/ChangePassword";
import ChangeName from "@/pages/farmer/settings/form/ChangeName";
import ChangeUsername from "@/pages/farmer/settings/form/ChangeUsername";
import ChangeNumber from "@/pages/farmer/settings/form/ChangeNumber";
import ChangeEmail from "@/pages/farmer/settings/form/ChangeEmail";
import ChangeEmailVerification from "@/pages/farmer/settings/form/ChangeEmailVerification";
import ChangeAddress from "@/pages/farmer/settings/form/ChangeAddress";
import AccountDeletion from "@/pages/farmer/settings/form/AccountDeletion";
import OrderInfo from "@/pages/farmer/orders/OrderInfo/OrderInfo";
import Reviews from "@/pages/farmer/Profile/components/Reviews";

/**
 * All of the path is under farmer route
 * e.g.
 * home => /farmer/home
 * post/create => /farmer/post/create
 */
export default [
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
    path: "groups",
    element: <Group />,
  },
  {
    path: "groups/:id",
    element: <GroupInfo />,
  },
  {
    path: "groups/posts",
    element: <GroupPosts />,
  },
  {
    path: "groups/posts/1",
    element: <GroupPostDetails />,
  },
  {
    path: "groups/new",
    element: <CreateGroup />,
  },
  {
    path: "notifications",
    element: <Notifications />,
  },
  {
    path: "settings",
    element: <Settings />,
  },
  {
    path: "settings/change-name",
    element: <ChangeName />,
  },
  {
    path: "settings/change-username",
    element: <ChangeUsername />,
  },
  {
    path: "settings/change-number",
    element: <ChangeNumber />,
  },
  {
    path: "settings/change-email",
    element: <ChangeEmail />,
  },
  {
    path: "settings/change-email/verification",
    element: <ChangeEmailVerification />,
  },
  {
    path: "settings/change-address",
    element: <ChangeAddress />,
  },
  {
    path: "settings/account-deletion",
    element: <AccountDeletion />,
  },
  {
    path: "settings/change-password",
    element: <ChangePassword />,
  },
  {
    path: "/wallet",
    element: <Wallet />,
  },
];
