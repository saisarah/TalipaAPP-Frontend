import { fetchNotifications } from "@/apis/NotificationApi"
import { useQuery } from "@tanstack/react-query"


export const useNotificationsQuery = () => {
    return useQuery(['notifications'], fetchNotifications)
}