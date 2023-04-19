import CreateDiscussion from "@/pages/farmer/group/CreateDiscussion/CreateDiscussion";
import CreateGroup from "@/pages/farmer/group/CreateGroup/CreateGroup";
import Group from "@/pages/farmer/group/Group";
import GroupInfo from "@/pages/farmer/group/GroupInfo/GroupInfo";
import ManageGroup from "@/pages/farmer/group/ManageGroup/ManageGroup";
import PendingInvitations from "@/pages/farmer/group/PendingInvitations/PendingInvitations";
import { PostDetails } from "@/pages/farmer/group/PostDetails/PostDetails";
import Requests from "@/pages/farmer/group/Requests/Requests";

export const groups = [
  {
    path: "groups",
    element: <Group />,
  },
  {
    path: "groups/manage",
    element: <ManageGroup />
  },
  {
    path: "groups/requests",
    element: <Requests />,
  },
  {
    path: "groups/invitations",
    element: <PendingInvitations />
  },
  {
    path: "groups/:id",
    element: <GroupInfo />,
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
