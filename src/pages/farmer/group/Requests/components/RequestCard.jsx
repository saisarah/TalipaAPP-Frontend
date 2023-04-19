import { fetchPendingMembers } from "@/apis/FarmerGroupApi";
import Http, { getErrorMessage } from "@/helpers/Http";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { App, Button } from "antd";

const approveMember = async(user_id) => {
  const { data } = await Http.post(`/farmer-groups/members/${user_id}/accept`);
  return data
}

const useApproveMember = (user_id, option) => {
  const queryClient = useQueryClient()
  return useMutation(() => approveMember(user_id), {
    onSuccess(data) {
      queryClient.resetQueries(fetchPendingMembers.key())
      option?.onSuccess(data)
    }
  })
}

export const RequestCard = ({ user }) => {

  const { modal, notification } = App.useApp()
  const { mutateAsync: approveMember } = useApproveMember(user.id, {
    onSuccess() {
      notification.success({ message: "Member approved successfully" })
    },
    onError(err) {
      notification.error({ message: getErrorMessage(err) })
    }
  })

  const handleApprove = () => {
    modal.confirm({
      content: "Are you sure to approve this farmer?",
      async onOk() {
        await approveMember()
      }
    })
  }

  return (
    <div className="rounded border border-slate-300 bg-white p-3">
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
        <Button type="primary" onClick={handleApprove}>Approve</Button>
        <Button type="default">Ignore</Button>
      </div>
    </div>
  );
};