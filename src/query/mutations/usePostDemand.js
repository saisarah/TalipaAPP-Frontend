import { postDemand } from "@/apis/DemandApi";
import { getErrorMessage } from "@/helpers/Http";
import { useMutation } from "@tanstack/react-query";
import { notification } from "antd";
import { useNavigate } from "react-router-dom";

export const usePostDemand = () => {

    const navigate = useNavigate()

    return useMutation(
        (data) => postDemand(data),
        {
            onError(err){
                notification.error({ message: getErrorMessage(err) })
            },
            onSuccess(){
                notification.success({ message: "Demands posted successfully" })
                navigate("/?tab=demands")
            }
        }
    )
};
