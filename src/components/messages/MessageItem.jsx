import { useThreadInfo } from "@/hooks/useThreadInfo";
import { Avatar, Space } from "antd";
import moment from "moment";
import { Link } from "react-router-dom";


export default function MessageItem({ to, thread }) {
  const { avatar, name } = useThreadInfo(thread)
  return (
    <Link to={to} className="p-4 flex text-md text-black">
      <img className="h-12 aspect-square rounded-full mr-3" src={avatar} />
      <div className="flex flex-col">
        <div className="flex items-center">
          <div className="font-bold">{name}</div>
          <div className="mx-1">·</div>
          <div className="text-gray-500">{moment(thread.updated_at).fromNow()}</div>
        </div>
        <div className="text-gray-500">No unread messages</div>
      </div>
    </Link>
  );
}
