export const ReceivedChat = ({ avatar, content, hasAvatar }) => {
  return (
    <div className={`mt-[1px] flex items-end justify-start gap-2`}>
      <img
        className={`${
          hasAvatar ? "h-8" : "h-0"
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
    <div className="chat-sent">
      <span>{content}</span>
    </div>
  );
};