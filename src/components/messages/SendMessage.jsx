import { sendMessage } from "@/apis/MessageApi";
import { usePushMessage } from "@/query/mutations/messages";
import { SendOutlined } from "@ant-design/icons";
import { useMutation } from "@tanstack/react-query";
import { Button, Input } from "antd";
import { useState } from "react";

const useSendMessage = (id, { onSuccess }) => {
  const { push } = usePushMessage();

  return useMutation((message) => sendMessage(id, message), {
    onSuccess(data) {
      push(id, data);

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
    <div className="bg-white p-2 shadow">
      <div className="flex overflow-hidden rounded-full border">
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
          icon={!isLoading && <SendOutlined className="text-primary" />}
          className="border-none"
          size="large"
        />
      </div>
    </div>
  );
}
