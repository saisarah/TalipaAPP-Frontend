import { Avatar } from "antd";

export default function CommentItem() {
  return (
    <div className="flex items-start gap-2 bg-white p-3 py-0">
      <Avatar src="https://avatars.dicebear.com/api/initials/john+doe.svg" />
      <div className="flex-grow">
        <div className="inline-block rounded-2xl bg-[#EFF3F4] px-3 py-2 text-sm">
          <div className="font-bold">Lenard Mangay-ayam</div>
          <div>Hello world!</div>
        </div>
        <div className="ml-3 text-xs text-slate-400">2 mins ago</div>
      </div>
    </div>
  );
}
