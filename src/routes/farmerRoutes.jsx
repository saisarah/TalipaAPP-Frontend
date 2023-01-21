import CreatePost from "../pages/farmer/CreatePost/CreatePost";
import Home from "../pages/farmer/Home/Home";
import Group from "../pages/farmer/group/Group";
import GroupInfo from "../pages/farmer/group/GroupInfo/GroupInfo";
import { Posts as GroupPosts } from "../pages/farmer/group/Posts/Posts";
import { PostDetails as GroupPostDetails } from "../pages/farmer/group/PostDetails/PostDetails";
import MainMenu from "../pages/farmer/MainMenu/MainMenu";
import PostDetails from "../pages/farmer/PostDetails/PostDetails";
import Profile from "../pages/farmer/Profile/Profile";
import Conversations from "../pages/farmer/messages/Conversations";
import Orders from "../pages/farmer/orders/Orders";


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
];
