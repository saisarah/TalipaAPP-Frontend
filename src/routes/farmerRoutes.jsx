import CreatePost from "../pages/farmer/CreatePost/CreatePost";
import Feed from "../pages/farmer/Feed/Feed";
import Group from "../pages/farmer/group/Group";
import GroupInfo from "../pages/farmer/group/GroupInfo/GroupInfo";
import { Posts as GroupPosts } from "../pages/farmer/group/Posts/Posts";
import { PostDetails as GroupPostDetails } from "../pages/farmer/group/PostDetails/PostDetails";
import FarmerHome from "../pages/farmer/home/FarmerHome";
import PostDetails from "../pages/farmer/PostDetails/PostDetails";
import Profile from "../pages/farmer/Profile/Profile";
import Conversations from "../pages/messages/Conversations";
import Orders from "../pages/orders/Orders";

export default [
  {
    path: "",
    element: <FarmerHome />,
  },
  {
    path: "home",
    element: <Feed />,
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
];
