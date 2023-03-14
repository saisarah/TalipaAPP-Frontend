export const ReceivedChat = ({ avatar, content, hasAvatar }) => {
  return (
    <div className={`mt-[1px] first:mt-auto flex items-end justify-start gap-2`}>
      <img
        className={`${
          avatar && hasAvatar ? "h-8" : "h-0"
        } avatar w-8 rounded-full bg-[#545753]`}
        src={avatar}
      />
      <div className="max-w-[300px] rounded-3xl border border-[#e5e7eb] p-4 py-2 text-base shadow-sm">
        <span>{content}</span>
      </div>
    </div>
  );
};

export const SentChat = ({ content }) => {
  return (
    <div className="chat-sent first:mt-auto">
      <span>{content}</span>
    </div>
  );
};

export default function ChatItem({ message, id, next_message, avatar}) {
  if (id == message.receiver_id)
    return <SentChat content={message.content} />;

  return (
    <ReceivedChat
      hasAvatar={!next_message || next_message.sender_id != message.sender_id}
      avatar={avatar}
      content={message.content}
    />
  );
}
