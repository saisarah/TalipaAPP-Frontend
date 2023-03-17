import { Avatar, Card } from "antd";
import { Link } from "react-router-dom";

export default function PostLink({ post, ...props }) {
  return (
    <Link {...props}>
      <Card className="rounded-lg bg-white  shadow">
        <div className="flex">
          <Avatar
            size={100}
            className=" flex-shrink-0 rounded-lg"
            src={post.thumbnail.source}
          ></Avatar>
          <div className="ml-4">
            <h3 className="text-lg font-bold">{post.title}</h3>
            <p className="text-gray-600">{post.caption}</p>

            <p className="text-sm italic text-slate-600">*tap to see post</p>
          </div>
        </div>
      </Card>
    </Link>
  );
}
