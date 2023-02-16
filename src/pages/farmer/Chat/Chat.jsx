import Page from "@/components/Page";
import PageHeader from "@/components/PageHeader";
import Http from "@/helpers/Http";
import { useQuery } from "@tanstack/react-query";
import ChatItem from "./components/ChatItem";

const fetchMessages = async () => {
  const result = await Http.get("/messages");
  return result.data;
};

export default function Chat() {
  const { data, isLoading } = useQuery(["messages"], fetchMessages);

  if (isLoading) return "Loading...";

  return (
    <Page className="bg-gray-100">
      <PageHeader back="/farmer" title="Chat" />

      {data.map((item) => (
        <ChatItem key={item.id} {...item} />
      ))}
    </Page>
  );
}
