import Page from "@/components/Page";
import PageHeader from "@/components/PageHeader/PageHeader";
import { useNotificationsQuery } from "@/query/queries/useNotificationsQuery";
import { Avatar, Spin } from "antd";
import { NotificationCard } from "./components/NotificationCard";

export default function Notifications() {
  const { data, isLoading } = useNotificationsQuery();

  console.log(data);

  return (
    <Page className="bg-white w-full max-w-screen-md mx-auto lg:my-4 lg:rounded-lg lg:border lg:border-slate-300 overflow-hidden lg:flex-grow">
      <PageHeader className="block md:hidden" back="/" title="Notifications" />
      {isLoading ? (
        <div className="flex justify-center py-16">
          <Spin tip="Fetching notifications..." />
        </div>
      ) : (
        <div>
          <h1 className="font-bold text-2xl px-4 pt-4 hidden md:block">Notifications</h1>
          <h4 className="px-4 pt-4">Recent</h4>
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