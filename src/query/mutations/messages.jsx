import { fetchThreadMessages } from "@/apis/ThreadApi";
import { MessageFilled } from "@ant-design/icons";
import { useQueryClient } from "@tanstack/react-query";
import { App } from "antd";

export const usePushMessage = () => {
  const queryClient = useQueryClient();

  const push = (conversation_id, message) => {

    queryClient.setQueryData(
      fetchThreadMessages.key(conversation_id),
      (messages = []) => [message, ...messages]
    )

  };

  return {
    push,
  };
};
