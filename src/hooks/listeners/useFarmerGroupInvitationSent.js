import { fetchGroupInvitations } from "@/apis/FarmerGroupApi"
import { useQueryClient } from "@tanstack/react-query"
import { App } from "antd"
import useSocket from "../useSocket"


export const useFarmerGroupInvitationSent = (user_id) => {
  const queryClient = useQueryClient()
  const { notification } = App.useApp()
  useSocket({
    channel: `users.${user_id}`,
    event: 'FarmerGroupInvitationSent',
    listener: () => {
      notification.info({ message: "You have been invited to join a group." })
      queryClient.resetQueries(fetchGroupInvitations.key())
    }
  })
}