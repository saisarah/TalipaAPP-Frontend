import Page from "@/components/Page";
import PageHeader from "@/components/PageHeader";
import Http from "@/helpers/Http";
import { useQuery } from "@tanstack/react-query";
import { Spin } from "antd";
import { useTitle } from "../components/VendorLayout/VendorLayout";
import ChatItem from "./components/ChatItem";

const fetchMessages = async () => {
  const result = await Http.get("/messages");
  return result.data;
};

export default function Chat() {
  useTitle("Chat");
  const { data, isLoading } = useQuery(["messages"], fetchMessages);

  if (isLoading)
    return (
      <Page>
        <PageHeader back="/farmer/chat" title="Loading" />
        <div className="flex flex-col items-center py-16">
          <Spin />
        </div>
      </Page>
    );

  return (
    <Page className="bg-gray-100">
      {data.map((item) => (
        <ChatItem key={item.id} {...item} />
      ))}
    </Page>
  );
}
