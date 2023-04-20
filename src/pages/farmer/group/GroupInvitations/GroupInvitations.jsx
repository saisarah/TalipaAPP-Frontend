import { fetchCurrentGroup } from "@/apis/GroupApi";
import FarmerPageHeader from "@/components/PageHeader/FarmerPageHeader";
import Http, { getErrorMessage } from "@/helpers/Http";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { App, Button, Spin } from "antd";
import { Navigate } from "react-router-dom";
import { PendingRequest } from "../PendingRequest/PendingRequest";

const fetchGroupInvitations = async () => {
  const { data } = await Http.get("/farmer-groups/invitations");
  return data;
};

const acceptInvitation = async (group_id) => {
  const { data } = await Http.post(`/farmer-groups/${group_id}/accept`);
  return data;
};

const useAcceptInvitation = (option) => {
  const queryClient = useQueryClient();

  return useMutation(acceptInvitation, {
    ...option,
    onSuccess(data) {
      queryClient.resetQueries(fetchCurrentGroup.key());
      option?.onSuccess(data);
    },
  });
};

const useGroupInvitations = (option) => {
  return useQuery(
    ["farmer-groups", "invitations"],
    fetchGroupInvitations,
    option
  );
};

export const GroupInvitations = () => {
  const { modal, notification } = App.useApp();
  const { data, isLoading } = useGroupInvitations();

  const { mutateAsync: acceptGroup } = useAcceptInvitation({
    onSuccess() {
      notification.success({ message: "Successfully joined the group." });
    },
    onError(err) {
      notification.error({ message: getErrorMessage(err) });
    },
  });

  const handleAccept = (group_id) => {
    modal.confirm({
      content: "Are you sure you to accept this invitation?",
      async onOk() {
        await acceptGroup(group_id);
      },
    });
  };

  if (isLoading)
    return (
      <div className="flex justify-center py-16">
        <Spin tip="Fetching Invitations..." />
      </div>
    );

  if (data.length === 0) return <PendingRequest />;

  const [group] = data;

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <FarmerPageHeader back="/farmer" title="Group" />
      <div className="flex flex-grow flex-col items-center justify-center">
        <div className="text-lg font-bold">Group Invitation</div>
        <div>
          from{" "}
          <span className="font-bold">{group.president.user.fullname}</span>
        </div>
        <img
          className="mt-4 aspect-square w-20 rounded-full"
          src={group.image_url}
        />
        <div className="mt-4 px-8 text-center">
          <span className="font-bold">{group.president.user.fullname}</span> has
          sent you an invitation to join{" "}
          <span className="font-bold">{group.name}</span>
          <div>Do you want to join?</div>
        </div>
        <div className="mt-4 flex justify-center gap-4">
          <Button type="primary" onClick={() => handleAccept(group.id)}>
            Accept
          </Button>
          <Button type="default">Decline</Button>
        </div>
      </div>
    </div>
  );
};
