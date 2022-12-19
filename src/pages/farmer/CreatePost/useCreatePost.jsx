import { useMutation } from "@tanstack/react-query";
import { Modal } from "antd";
import { toFormData } from "axios";
import { useNavigate } from "react-router-dom";
import { createPost } from "../../../apis/Post";
import { getErrorMessage } from "../../../helpers/Http";


const useCreatePostMutation = () => {

    const navigate = useNavigate();

    return useMutation(createPost, {
        onSuccess(data) {
            console.log(data);
            Modal.success({ content: "Post created successfully" });
            navigate("/farmer/home");
        },
        onError(error) {
            Modal.error({ content: getErrorMessage(error) });
            console.log(error);
        },
    });
}

export const useCreatePost = (attachments, sizes) => {

    const { mutate, isLoading } = useCreatePostMutation()

    const handleSubmit = (data) => {
        console.log({ ...data, attachments, sizes });
        if (isLoading) return;
        const formData = toFormData({...data, sizes, attachments});
        // formData.append("attachments", attachments[0]);
        mutate(formData);
    };

    return { handleSubmit, isLoading }
}