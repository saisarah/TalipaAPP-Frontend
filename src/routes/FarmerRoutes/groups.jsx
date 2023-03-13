import GroupPosts from "@/pages/farmer/group/components/GroupPosts";
import CreateDiscussion from "@/pages/farmer/group/CreateDiscussion/CreateDiscussion";
import CreateGroup from "@/pages/farmer/group/CreateGroup/CreateGroup";
import Group from "@/pages/farmer/group/Group";
import GroupInfo from "@/pages/farmer/group/GroupInfo/GroupInfo";
import { PostDetails } from "@/pages/farmer/group/PostDetails/PostDetails";

export const groups = [
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
    path: "groups/posts/create",
    element: <CreateDiscussion />
  },
  {
    path: "groups/posts/1",
    element: <PostDetails />,
  },
  {
    path: "groups/new",
    element: <CreateGroup />,
  },
];
