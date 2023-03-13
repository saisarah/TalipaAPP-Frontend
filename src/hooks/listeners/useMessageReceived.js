import { usePushMessage } from "@/query/mutations/messages";
import useSocket from "../useSocket";

export const useMessageReceived = (user_id) => {
  const { push } = usePushMessage();

  useSocket({
    channel: `users.${user_id}`,
    listener: ({ message }) => {
      console.log({ message });
      push(message.sender_id, message);
    },
    event: "MessageReceived",
  });
};
