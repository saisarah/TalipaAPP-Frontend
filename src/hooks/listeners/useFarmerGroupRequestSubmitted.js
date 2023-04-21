import { fetchPendingMembers } from "@/apis/FarmerGroupApi";
import { useQueryClient } from "@tanstack/react-query";
import { App } from "antd";
import useSocket from "../useSocket";

export const useFarmerGroupRequestSubmitted = (user_id) => {
  const { notification } = App.useApp();
  const queryClient = useQueryClient();

  useSocket({
    channel: `users.${user_id}`,
    event: "FarmerGroupRequestSubmitted",
    listener: () => {
      notification.info({ message: "Someone wants to join your group" })
      queryClient.invalidateQueries(fetchPendingMembers.key())
    },
  });
};
