import { postDemand } from "@/apis/DemandApi";
import { getErrorMessage } from "@/helpers/Http";
import { useMutation } from "@tanstack/react-query";
import { notification } from "antd";
import { useNavigate } from "react-router-dom";

export const usePostDemand = (option) => {

    return useMutation(
        (data) => postDemand(data),
        option
    )
};
