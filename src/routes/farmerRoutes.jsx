import Home from "@/pages/customer/home/Home";
import CreatePost from "@/pages/farmer/CreatePost/CreatePost";
import GroupPosts from "@/pages/farmer/group/components/GroupPosts";
import CreateGroup from "@/pages/farmer/group/CreateGroup/CreateGroup";
import Group from "@/pages/farmer/group/Group";
import GroupInfo from "@/pages/farmer/group/GroupInfo/GroupInfo";
import MainMenu from "@/pages/farmer/MainMenu/MainMenu";
import Conversations from "@/pages/farmer/messages/Conversations";
import PostDetails from "@/pages/farmer/PostDetails/PostDetails";
import Profile from "@/pages/farmer/Profile/Profile";
import CreateDiscussion from "@/pages/farmer/group/CreateDiscussion/CreateDiscussion";
import { PostDetails as GroupPostDetails } from "@/pages/farmer/group/PostDetails/PostDetails";
import Orders from "@/pages/farmer/orders/Orders";
import Notifications from "@/pages/farmer/notifications/Notifications";

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
    path: "orders",
    element: <Orders />,
  },
  {
    path: "messages",
    element: <Conversations />,
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
    path: "groups/CreateDiscussion",
    element: <CreateDiscussion />,
  },
  {
    path: "groups/new",
    element: <CreateGroup />,
  },
  {
    path: "notifications",
    element: <Notifications />,
  },
];
