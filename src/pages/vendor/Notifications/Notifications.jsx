import { LoadingSkeleton } from "@/components/LoadingSkeleton";
import { useTitle } from "@/contexts/VendorContext";
import { NotificationCard } from "@/pages/farmer/notifications/components/NotificationCard";
import { useNotificationsQuery } from "@/query/queries/useNotificationsQuery";
import { Avatar, Empty } from "antd";

export default function Notifications() {
  const { data, isLoading } = useNotificationsQuery();

  if (isLoading)
    return <LoadingSkeleton loading loadingText="Fetching Notifications" />;

  if (data.length === 0)
    return (
      <div className="flex-grow bg-white">
        <div className="py-16">
          <Empty description="You have no notifications" />
        </div>
      </div>
    );

  return (
    <div>
      {data.map((notification) => (
        <NotificationCard
          key={notification.id}
          type={notification.type}
          context={notification.data}
          created_at={notification.created_at}
        />
      ))}
    </div>
  );
}

function Notif({ name, date, description, update, img }) {
  useTitle("Notifications");
  return (
    <div className="mx-5 flex flex-row gap-8 border-b-2 py-2 px-2">
      <div>
        <Avatar size="large" src={img} alt="Avatar" />
      </div>
      <div>
        <span className="font-bold">{name}</span>
        <br />
        <span className="text-xsm text-slate-400">{description}</span>
        <br />
        <span> {date}</span>
      </div>
    </div>
  );
}
