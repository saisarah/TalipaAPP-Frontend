import { Avatar, Badge, Space } from "antd";
import { Link } from "react-router-dom";

export default function ChatItem({ fullname, id }) {
  return (
    <Link to={`/vendor/messages/${id}`} className="mx-2 flex pt-1">
      <div className="flex grow flex-row rounded-md bg-white shadow-sm">
        <div className="flex justify-center p-4">
          <Space size="middle">
            <Badge className="" count={7}>
              <Avatar
                className="border border-green-500"
                shape="rounded"
                size="large"
              />
            </Badge>
          </Space>
          <div className="flex flex-col p-2 text-xs">
            <span className="ml-2 font-bold">{fullname}</span>
            <span className="ml-2"> 8:14 am</span>
            <span className="ml-2">[Order Confirmation]</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
