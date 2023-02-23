import Account from "@/pages/customer/account/Account";
import { VendorLayout } from "@/pages/vendor/components/VendorLayout/VendorLayout";
import { Home } from "@/pages/vendor/Home/Home";
import Chat from "@/pages/vendor/Messages/Chat";
import PrivateMessage from "@/pages/vendor/Messages/PrivateMessage";
import Notifications from "@/pages/vendor/Notifications/Notifications";
import { PostDetails } from "@/pages/vendor/PostDetails/PostDetails";

export default [
  {
    element: <VendorLayout />,
    children: [
      {
        path: "/",
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
        path: "/account",
        element: <Account />,
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
];
