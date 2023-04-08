import { MessageOutlined } from "@ant-design/icons";
import { Button } from "antd";

export default function ThreadsPage() {
  return (
    <div className="hidden md:flex flex-grow flex-col items-center justify-center text-gray-400">
      <span className="text-6xl">
        <MessageOutlined />
      </span>
      <span className="mt-4 text-xl">Your Messages</span>
      <span>Send a private message to others.</span>
      <Button shape="round" type="primary" className="mt-4">
        Send Message
      </Button>
    </div>
  );
}
