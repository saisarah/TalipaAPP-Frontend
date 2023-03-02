import { fetchMessages } from "@/apis/MessageApi";
import MessageItem from "@/components/MessageItem";
import { useTitle } from "@/contexts/VendorContext";
import { useQuery } from "@tanstack/react-query";
import { Spin } from "antd";

export default function Messages() {
  const { data, isLoading } = useQuery(fetchMessages.key, fetchMessages);

  useTitle("Chat");

  if (isLoading)
    return (
      <div className="flex flex-col items-center py-16">
        <Spin />
      </div>
    );

  return (
    <div>
      {data.map((item) => (
        <MessageItem
          to={`/messages/${item.id}`}
          key={item.id}
          fullname={item.fullname}
          avatar={item.profile_picture}
        />
      ))}
    </div>
  );
}
