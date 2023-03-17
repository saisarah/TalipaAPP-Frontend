import { Avatar, Button } from "antd";
import moment from "moment";
import { Link } from "react-router-dom";

export default function OrderProfile({ user, label, messageLink }) {
  return (
    <div className="flex w-full items-center gap-2">
      <Avatar size={52} src={user.profile_picture} />
      <div className="leaing-4 flex h-full flex-grow flex-col">
        <span className=" text-xl font-bold ">
          {user.fullname}
        </span>
        <span className="">{label}</span>
      </div>
      <div className="">
        <Link to={messageLink}>
          <Button shape="round">Message</Button>
        </Link>
      </div>
    </div>
  );
}
