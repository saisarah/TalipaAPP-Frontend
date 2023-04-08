import { useAppContext } from "@/contexts/AppContext";

export const ReceivedChat = ({ content }) => {
  return (
    <div className="max-w-[300px] flex-shrink-0 self-start rounded-3xl bg-[#F0F4F5] p-4 py-3 text-md text-[#0F141A]">
      <span>{content}</span>
    </div>
  );
};

export const SentChat = ({ content }) => {
  return (
    <div className="chat-sent first:mt-auto flex-shrink-0">
      <span>{content}</span>
    </div>
  );
};

export default function ChatItem({ message, id, next_message, avatar }) {
  const { userID } = useAppContext();

  if (userID == message.sender_id)
    return <SentChat content={message.content} />;

  return (
    <ReceivedChat
      hasAvatar={!next_message || next_message.sender_id != message.sender_id}
      avatar={avatar}
      content={message.content}
    />
  );
}
