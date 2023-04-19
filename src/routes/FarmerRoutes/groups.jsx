import GroupPosts from "@/pages/farmer/group/components/GroupPosts";
import CreateDiscussion from "@/pages/farmer/group/CreateDiscussion/CreateDiscussion";
import CreateGroup from "@/pages/farmer/group/CreateGroup/CreateGroup";
import Group from "@/pages/farmer/group/Group";
import GroupInfo from "@/pages/farmer/group/GroupInfo/GroupInfo";
import { GroupInvitations } from "@/pages/farmer/group/GroupInvitations/GroupInvitations";
import Manage from "@/pages/farmer/group/Manage/Manage";
import { PendingRequest } from "@/pages/farmer/group/PendingRequest/PendingRequest";
import { PostDetails } from "@/pages/farmer/group/PostDetails/PostDetails";
import Requests from "@/pages/farmer/group/Requests/Requests";
import SuggestedGroups from "@/pages/farmer/group/SuggestedGroups/SuggestedGroups";

export const groups = [
  {
    path: "groups",
    element: <Group />,
  },
  {
    path: "groups/requests",
    element: <Requests />,
  },
  {
    path: "groups/suggested",
    element: <SuggestedGroups />
  },
  {
    path: "groups/pending-request",
    element: <PendingRequest />
  },
  {
    path: "groups/invitations",
    element: <GroupInvitations />,
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
