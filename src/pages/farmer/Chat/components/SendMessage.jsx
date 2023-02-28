import Http from "@/helpers/Http";
import { SendOutlined } from "@ant-design/icons";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button, Input } from "antd";
import { useState } from "react";

const sendMessage = async function (id, content) {
  const result = await Http.post(`/messages/${id}`, { content });
  return result.data;
};

export default function SendMessage({ id }) {
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation(
    (message) => sendMessage(id, message),
    {
      onSuccess(data) {
        queryClient.setQueryData(["messages", id], (messages) => {
          return [...messages, data];
        });
        setMessage("");
      },
    }
  );

  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (message.length === 0 || isLoading) return;
    mutate(message);
  };

  return (
    <div className="sticky bottom-2 left-0 right-0 bg-white pl-2">
      <div className="flex">
        <Input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className=""
          size="large"
          style={{
            width: "calc(100% - 50px)",
          }}
          placeholder="Type a message..."
          onPressEnter={handleSubmit}
        />
        <Button onClick={handleSubmit} className="border-none" size="large">
          <SendOutlined />
        </Button>
      </div>
    </div>
  );
}
