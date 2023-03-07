import { Avatar } from "antd";

export const ReceivedChat = ({ avatar, content }) => {
  return (
    <div className="flex items-end justify-start gap-2 p-4">
      <Avatar
        size="medium"
        style={{ backgroundColor: "#87d068" }}
        src={avatar}
      />

      <div className="row-end-1 max-w-[300px] rounded border border-[#e5e7eb] p-2 shadow-sm">
        <span>{content}</span>
      </div>
    </div>
  );
};

export const SentChat = ({ content }) => {
  return (
    <div className="row-end-1 flex justify-end p-4">
      <div className="row-end-1 max-w-[300px] rounded bg-blue-500 p-2 text-white shadow-sm">
        <span>{content}</span>
      </div>
    </div>
  );
};
