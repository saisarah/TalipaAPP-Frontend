import { usePushMessage } from "@/query/mutations/messages";
import { useSendMessageMutation } from "@/query/queries/useThreadsQuery";
import { SendOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import { useState } from "react";

export default function SendMessage({ id }) {
  const [message, setMessage] = useState("");
  const { push } = usePushMessage()

  const { mutate, isLoading } = useSendMessageMutation({
    onSuccess(data) {
      setMessage("");
      push(id, data)
    },
  });

  const handleSubmit = () => {
    if (message.length === 0 || isLoading) return;
    mutate({
      thread_id: id,
      content: message
    });
  };

  return (
    <div className="bg-white p-2 shadow">
      <div className="bg-[#EFF3F4] flex overflow-hidden rounded-full border pl-2">
        <Input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="placeholder:text-[#536471] text-[#0F141A] text-base"
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
          type="link"
          size="large"
        />
      </div>
    </div>
  );
}
