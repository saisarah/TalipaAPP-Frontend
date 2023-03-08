import { useMutation } from "@tanstack/react-query";
import { Modal } from "antd";
import { toFormData } from "axios";
import { useNavigate } from "react-router-dom";
import { createPost } from "../../../apis/Post";
import { getErrorMessage } from "../../../helpers/Http";

const SUCCESS_REDIRECT = "/farmer/home?feed=sale";

const useCreatePostMutation = () => {
  const navigate = useNavigate();

  return useMutation(createPost, {
    onSuccess(data) {
      console.log(data);
      Modal.success({ content: "Post created successfully" });
      navigate(SUCCESS_REDIRECT);
    },
    onError(error) {
      Modal.error({ content: getErrorMessage(error) });
      console.log(error);
    },
  });
};

export const useCreatePost = (attachments, not_straight_sizes) => {
  const { mutate, isLoading } = useCreatePostMutation();

  const handleSubmit = (data) => {
    const sizes = data.is_straight
      ? [{ size: "N/A", price: data.price, stock: data.stock }]
      : not_straight_sizes;

    if (isLoading) return;
    const formData = toFormData({ ...data, attachments, sizes });
    // formData.append("attachments", attachments[0]);
    mutate(formData);
  };

  return { handleSubmit, isLoading };
};
