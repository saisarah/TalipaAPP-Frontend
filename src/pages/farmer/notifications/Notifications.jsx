import Page from "@/components/Page";
import PageHeader from "@/components/PageHeader/PageHeader";
import { useNotificationsQuery } from "@/query/queries/useNotificationsQuery";
import { Avatar, Spin } from "antd";
import { NotificationCard } from "./components/NotificationCard";

export default function Notifications() {
  const { data, isLoading } = useNotificationsQuery();

  console.log(data)

  return (
    <Page className="bg-white">
      <PageHeader back="/" title="Notifications" />
      {isLoading ? (
        <div className="flex justify-center py-16">
          <Spin tip="Fetching notifications..." />
        </div>
      ) : (
        <div>
          <h1 className="px-4 pt-4">Recent</h1>
          {data.map((notification) => (
            <NotificationCard
              key={notification.id}
              type={notification.type}
              context={notification.data}
              created_at={notification.created_at}
            />
          ))}
        </div>
      )}
    </Page>
  );
}

function Notif({ name, date, description }) {
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
