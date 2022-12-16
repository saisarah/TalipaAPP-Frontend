import { useMutation } from "@tanstack/react-query";
import { Modal } from "antd";
import { useNavigate } from "react-router-dom";
import { farmerRegister } from "../../apis/AuthApi";


export const useFarmerRegistration = () => {

    const navigate = useNavigate()

    return useMutation(farmerRegister, {
        onSuccess() {
          Modal.success({ content: "Registered Successfully" });
          navigate("/login");
        },
        onError(e) {
          Modal.error({ content: "An error occured while registering" });
          console.log(e)
        },
    });
}