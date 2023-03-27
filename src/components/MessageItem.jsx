import { Avatar, Space } from "antd";
import { Link } from "react-router-dom";

export default function MessageItem({ to, fullname, avatar }) {
  return (
    <Link to={to} className="flex pt-1">
      <div className="flex grow flex-row rounded-md bg-white shadow-sm">
        <div className="flex justify-center p-4">
          <Space size="middle">
            <Avatar
              className="border border-green-500"
              shape="rounded"
              size="large"
              src={avatar}
            />
          </Space>
          <div className="flex flex-col p-2 text-xs">
            <span className="ml-2 font-bold">{fullname}</span>
            <span className="ml-2">2 minutes ago</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
