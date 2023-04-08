import { useConversationsQuery } from "@/query/queries/useMessagesQuery";
import { useThreadMessagesQuery } from "@/query/queries/useThreadsQuery";
import { Spin } from "antd";
import { useEffect, useRef } from "react";
import Spinner from "../Spinner";
import ChatItem from "./ChatItem";

const ScrollToBottom = ({ children, dependency, ...props }) => {
  const container = useRef();

  useEffect(() => {
    container.current.scroll({
      top: container.current.scrollTopMax,
      behavior: "smooth",
    });
  }, [dependency]);

  return (
    <div ref={container} {...props}>
      {children}
    </div>
  );
};

export default function Conversation({ id, avatar = null }) {
  const { data: messages, isLoading } = useThreadMessagesQuery(id);

  if (isLoading) return <Spinner className="flex-grow" tip="Fetching messages" />;

  return (
    <ScrollToBottom
      dependency={messages}
      className="conversations talipaapp-scrollbar flex flex-grow flex-col-reverse overflow-y-auto px-2 py-4"
    >
      {messages.map((item, i) => (
        <ChatItem
          key={item.id}
          avatar={avatar}
          id={id}
          message={item}
          next_message={messages[i + 1]}
        />
      ))}
    </ScrollToBottom>
  );
}
