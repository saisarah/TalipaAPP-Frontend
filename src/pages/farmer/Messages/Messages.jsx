import MessageItem from "@/components/MessageItem";
import Page from "@/components/Page";
import PageHeader from "@/components/PageHeader";
import { useMessagesQuery } from "@/query/queries/useMessagesQuery";
import { Spin } from "antd";
import ReactLogo from "./img/mobile.svg";

export default function Messages() {
  const { data, isLoading } = useMessagesQuery()

  if (isLoading)
    return (
      <Page>
        <PageHeader back="/farmer" title="Messages" />
        <div className="flex flex-col items-center py-16">
          <Spin />
        </div>
      </Page>
    );

  if (data.length == 0)
    return (
      <Page>
        <PageHeader back="/farmer" title="Messages" />
        <div className="flex flex-col items-center py-40">
          <img width="200" height="100" src={ReactLogo} alt="" />
          <span className="px-24 text-center text-sm">
            You have no messages.
          </span>
        </div>
      </Page>
    );

  return (
    <Page className="bg-gray-100">
      <PageHeader back="/farmer" title="Messages" />

      {data.map((item) => (
        <MessageItem
          key={item.id}
          to={`/farmer/messages/${item.id}`}
          avatar={item.profile_picture}
          fullname={item.fullname}
        />
      ))}
    </Page>
  );
}
