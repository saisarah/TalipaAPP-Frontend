import { usePushMessage } from "@/query/mutations/messages";
import { MessageTwoTone } from "@ant-design/icons";
import { App } from "antd";
import { useLocation } from "react-router-dom";
import useSocket from "../useSocket";

export const useMessageReceived = (user_id) => {
  const { push } = usePushMessage(true);
  const { pathname } = useLocation()
  const { notification } = App.useApp()

  const listener = ({ message }) => {
    push(message.thread_id, message);

    if (
      message.sender_id !== user_id &&
      pathname != `/messages/${message.thread_id}` && 
      pathname != `/farmer/messages/${message.thread_id}`
    ) {
      notification.info({ icon: <MessageTwoTone />, message: "New message received" })
    }
  }

  useSocket({
    channel: `users.${user_id}`,
    listener,
    event: "MessageReceived",
  }, [pathname]);
};
