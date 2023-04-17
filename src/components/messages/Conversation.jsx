import { useThreadMessagesQuery } from "@/query/queries/useThreadsQuery";
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

export default function Conversation({ id }) {
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
          message={item}
          nextMessage={messages[i + 1]}
          prevMessage={messages[i - 1]}
        />
      ))}
    </ScrollToBottom>
  );
}
