import { Avatar } from "antd";
import moment from "moment";

export default function CommentItem({ user, content, created_at }) {
  return (
    <div className="flex items-start gap-2 bg-white p-3 py-0">
      <Avatar src={user.profile_picture} />
      <div className="flex-grow">
        <div className="inline-block rounded-2xl bg-[#EFF3F4] px-3 py-2 text-sm">
          <div className="font-bold">{user.fullname}</div>
          <div>{content}</div>
        </div>
        <div className="ml-3 text-xs text-slate-400">{moment(created_at).fromNow()}</div>
      </div>
    </div>
  );
}
