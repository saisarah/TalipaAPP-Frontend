import { useCurrentUserQuery } from "@/query/queries/useCurrentUserQuery";
import { useEffect, useRef } from "react";
import { ReceivedChat, SentChat } from "./ChatItem";

export default function Conversation({ messages, user }) {
  const { data } = useCurrentUserQuery();
  const conversations = useRef();

  useEffect(() => {
    console.log(messages);
    conversations.current.scroll({
      top: conversations.current.scrollTopMax,
      behavior: "smooth",
    });
  }, [messages.length]);

  return (
    <div
      ref={conversations}
      className="conversations talipaapp-scrollbar flex flex-grow flex-col justify-end overflow-y-auto px-2 py-4"
    >
      {messages.map((item, i) =>
        data.id != item.receiver_id ? (
          <SentChat key={item.id} content={item.content} />
        ) : (
          <ReceivedChat
            key={item.id}
            hasAvatar={
              !messages[i + 1] ||
              messages[i + 1].receiver_id !== item.receiver_id
            }
            avatar={user.profile_picture}
            content={item.content}
          />
        )
      )}
    </div>
  );
}
