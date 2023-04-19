import { LikeOutlined, MessageOutlined } from "@ant-design/icons";
import { Button } from "antd";
import moment from "moment";

export const GroupPostCard = ({ author, created_at, description }) => {
  return (
    <div className="mt-3 border-y border-slate-300 bg-white p-3 pb-0">
      <div className="flex">
        <img
          className="aspect-square w-10 rounded-full"
          src={author.profile_picture}
        />
        <div className="ml-3">
          <div className="text-sm font-bold">{author.fullname}</div>
          <div className="text-xs text-slate-500">
            {moment(created_at).fromNow()}
          </div>
        </div>
      </div>
      <div className="border-b border-slate-400 py-3 text-sm">
        {description}
        <div className="mt-3 hidden">5 likes</div>
      </div>
      <div>
        <Button size="large" type="link" icon={<LikeOutlined />} />
        <Button size="large" type="link" icon={<MessageOutlined />} />
      </div>
    </div>
  );
};
