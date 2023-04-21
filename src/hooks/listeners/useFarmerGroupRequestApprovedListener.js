import { fetchCurrentGroup } from "@/apis/GroupApi";
import { useQueryClient } from "@tanstack/react-query";
import { App } from "antd";
import useSocket from "../useSocket"


export const useFarmerGroupRequestApprovedListener = (user_id) => {
    
    const { notification } = App.useApp()
    const queryClient = useQueryClient()

    useSocket({
        channel: `users.${user_id}`,
        event: 'FarmerGroupRequestApproved',
        listener: () => {
            queryClient.resetQueries(fetchCurrentGroup.key());
            notification.info({ message: "Your request to join group has been approved." });
        }
    });
}