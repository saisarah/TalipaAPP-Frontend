import { useAppContext } from "@/contexts/AppContext";

export const ReceivedChat = ({ message, nextMessage, prevMessage }) => {
  return (
    <div className={`
        max-w-[300px] mt-1 flex-shrink-0 self-start rounded-3xl bg-[#F0F4F5] p-3 py-2 text-md text-black 
        ${message.sender_id === prevMessage?.sender_id ? 'rounded-bl ': ''}
        ${message.sender_id === nextMessage?.sender_id ? 'rounded-tl' : ''}
      `}>
      <span>{message.content}</span>
    </div>
  );
};

export const SentChat = ({ content }) => {
  return (
    <div className="mt-1 max-w-[300px] self-end rounded-3xl bg-blue-500 p-4 py-2 text-md text-white shadow-sm flex-shrink-0">
      <span>{content}</span>
    </div>
  );
};

export default function ChatItem({ message, nextMessage, prevMessage }) {
  const { userID } = useAppContext();

  return (
    <div className={`chat 
        ${userID == message.sender_id ? 'chat-sent':'chat-received'}
        ${message.sender_id === prevMessage?.sender_id ? 'chat-hasnext': ''}
        ${message.sender_id === nextMessage?.sender_id ? 'chat-hasprev': ''}
      `}>
      {message.content}
    </div>
  )
  // if (userID == message.sender_id)
  //   return <SentChat content={message.content} />;

  // return (
  //   <ReceivedChat
  //     message={message}
  //     nextMessage={nextMessage}
  //     prevMessage={prevMessage}
  //   />
  // );
}
