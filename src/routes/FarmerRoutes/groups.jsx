import GroupPosts from "@/pages/farmer/group/components/GroupPosts";
import SuggestedGroups from "@/pages/farmer/group/components/SuggestedGroups";
import CreateDiscussion from "@/pages/farmer/group/CreateDiscussion/CreateDiscussion";
import CreateGroup from "@/pages/farmer/group/CreateGroup/CreateGroup";
import Group, { GroupInvitations } from "@/pages/farmer/group/Group";
import GroupInfo from "@/pages/farmer/group/GroupInfo/GroupInfo";
import { PendingRequest } from "@/pages/farmer/group/PendingRequest/PendingRequest";
import { PostDetails } from "@/pages/farmer/group/PostDetails/PostDetails";

export const groups = [
  {
    path: "groups",
    element: <Group />,
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
