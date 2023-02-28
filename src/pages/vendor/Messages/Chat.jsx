import Page from "@/components/Page";
import { useTitle } from "@/contexts/VendorContext";
import Http from "@/helpers/Http";
import { useQuery } from "@tanstack/react-query";
import { Spin } from "antd";
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
      <div className="flex flex-col items-center py-16">
        <Spin />
      </div>
    );

  return (
    <Page className="bg-gray-100">
      {data.map((item) => (
        <ChatItem key={item.id} {...item} />
      ))}
    </Page>
  );
}
