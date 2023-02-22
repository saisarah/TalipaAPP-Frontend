import Account from "@/pages/customer/account/Account";
import { VendorLayout } from "@/pages/vendor/components/VendorLayout/VendorLayout";
import { Home } from "@/pages/vendor/Home/Home";
import Chat from "@/pages/vendor/Messages/Chat";
import PrivateMessage from "@/pages/vendor/Messages/PrivateMessage";
import Notifications from "@/pages/vendor/Notifications/Notifications";
import { PostDetailsPage } from "@/pages/vendor/PostDetails/PostDetailsPage";

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
        path: "vendor/messages/:id",
        element: <PrivateMessage />,
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
    element: <PostDetailsPage />,
  },
];
