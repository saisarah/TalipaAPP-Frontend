import { fetchMessages } from "@/apis/MessageApi";
import MessageItem from "@/components/MessageItem";
import Page from "@/components/Page";
import PageHeader from "@/components/PageHeader";
import { useQuery } from "@tanstack/react-query";
import { Spin } from "antd";

export default function Messages() {
  const { data, isLoading } = useQuery(fetchMessages.key, fetchMessages);

  if (isLoading)
    return (
      <Page>
        <PageHeader back="/farmer" title="Loading" />
        <div className="flex flex-col items-center py-16">
          <Spin />
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
