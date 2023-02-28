import { useTitle } from "@/contexts/VendorContext";
import { Avatar } from "antd";

export default function Notifications() {
  return (
    <div className="bg-white">
      <h1 className="px-4 pt-4">Today</h1>
      <Notif
        name="Joshua Villanueva"
        date="1 minute ago"
        description="Liked your post"
      />

      <Notif
        name="Ruel Almonia"
        date="5 hours ago"
        description="invited you into a group"
      />

      <h1 className="px-4 pt-4">This Week</h1>
      <Notif
        name="Lenard"
        date="5 hours ago"
        description="invited you into a group"
      />
      <Notif
        name="Jhunriz Lalata"
        date="2 days ago"
        description="order your item"
      />
      <Notif
        name="Sarah Grace Oben"
        date="5 hours ago"
        description="commented on your post"
      />
    </div>
  );
}

function Notif({ name, date, description }) {
  useTitle("Notifications");
  return (
    <div className="mx-4 flex flex-row gap-2 border-b-2 py-2 px-2">
      <Avatar size="large" />
      <div>
        <span className="font-bold">{name}</span>
        <span> {description}</span>

        <br />
        <span className="text-xsm text-slate-400">{date}</span>
      </div>
    </div>
  );
}
