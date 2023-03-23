import Http from "@/helpers/Http"


export const fetchNotifications = async () => {
    const { data } = await Http.get('/notifications')
    return data
}