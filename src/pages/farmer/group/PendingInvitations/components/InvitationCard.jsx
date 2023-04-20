import { fetchPendingInvitations } from "@/apis/FarmerGroupApi";
import Http, { getErrorMessage } from "@/helpers/Http";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { App, Button } from "antd";

const cancelInvitation = async (user_id) => {
  const { data } = await Http.delete(`/farmer-groups/members/${user_id}/cancel`)
  return data
}

const useCancelInvitation = (option = {}) => {
  const queryClient = useQueryClient()
  return useMutation(cancelInvitation, {
    ...option,
    onSuccess(data) {
      queryClient.resetQueries(fetchPendingInvitations.key())
      option?.onSuccess(data)
    }
  });
}

export const InvitationCard = ({ user }) => {

  const { modal, notification } = App.useApp()
  const { mutateAsync: cancelInvitation } = useCancelInvitation({
    onSuccess() {
    },
    onError(err) {
      notification.error({ message: getErrorMessage(err) })
    }
  })

  const handleCancel = () => {
    modal.confirm({ 
      content: "Are you sure to cancel invitation for this user?",
      async onOk() {
        await cancelInvitation(user.id)
      }
    })
  }

  return (
    <div className="rounded border border-slate-300 bg-white p-3 mt-3">
      <div className="flex items-center">
        <img
          className="aspect-square w-10 rounded border border-slate-200"
          src={user.profile_picture}
        />
        <div className="ml-3 flex flex-col">
          <div className="text-sm font-bold">{user.fullname}</div>
          <div className="text-xs text-slate-500">{user.address.municipality} {user.address.province}</div>
        </div>
      </div>

      <div className="mt-3 flex justify-end gap-3">
        <Button onClick={handleCancel} type="default">Cancel Invite</Button>
      </div>
    </div>
  );
}