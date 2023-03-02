import { fetchConversations, sendMessage } from "@/apis/MessageApi";
import { SendOutlined } from "@ant-design/icons";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button, Input } from "antd";
import { useState } from "react";

const useSendMessage = (id, { onSuccess }) => {
  const queryClient = useQueryClient();

  return useMutation((message) => sendMessage(id, message), {
    onSuccess(data) {
      queryClient.setQueryData(fetchConversations.key(id), (messages) => {
        return [...messages, data];
      });
      if (onSuccess) onSuccess(data);
    },
  });
};

export default function SendMessage({ id }) {
  const [message, setMessage] = useState("");

  const { mutate, isLoading } = useSendMessage(id, {
    onSuccess() {
      setMessage("");
    },
  });

  const handleSubmit = () => {
    if (message.length === 0 || isLoading) return;
    mutate(message);
  };

  return (
    <div className="sticky bottom-0 left-0 right-0 bg-white p-2 shadow">
      <div className="flex rounded-full border">
        <Input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className=""
          bordered={false}
          size="large"
          style={{
            width: "calc(100% - 50px)",
          }}
          placeholder="Type a message..."
          onPressEnter={handleSubmit}
        />
        <Button
          loading={isLoading}
          onClick={handleSubmit}
          className="border-none"
          size="large"
        >
          {!isLoading && message.length > 0 && <SendOutlined />}
        </Button>
      </div>
    </div>
  );
}
