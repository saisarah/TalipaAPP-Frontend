import { Avatar } from "antd";
import { Link } from "react-router-dom";
import moment from "moment"
import config from "../../../../config";

export default function PostCard({ author, id, created_at, caption, attachments }) {
  // console.log(props);

  return (
    <div className="border-y border-slate-200 bg-white p-4">
      <div className="flex items-center gap-4">
        {/* <img className="h-12 w-12 rounded-full" src={null} /> */}
        <Avatar size="large" />
        <div className="flex flex-grow flex-col">
          <span className="font-bold">
            {author.firstname} {author.lastname}
          </span>
          <span className="text-xs">Posted {moment(created_at).fromNow()}</span>
        </div>
      </div>

      <p className="whitespace-pre-line py-2">{caption}</p>

      <div className="-mx-4">
        <img className=" aspect-square w-full" src={config('PUBLIC_URL') + "/" + attachments[0].source} />
      </div>

      <div className="mt-2 flex">
        <Link
          to={`/farmer/posts/${id}`}
          className="flex-grow rounded-lg bg-slate-300 py-2 text-center"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
