import { fetchConversations } from "@/apis/MessageApi";
import { useQueryClient } from "@tanstack/react-query";

export const usePushMessage = () => {
  const queryClient = useQueryClient();

  const push = (conversation_id, message) => {
    queryClient.setQueryData(
      fetchConversations.key(conversation_id),
      (conversations) => {
        return Array.isArray(conversations)
          ? [...conversations, message]
          : [message];
      }
    );
  };

  return {
    push,
  };
};
