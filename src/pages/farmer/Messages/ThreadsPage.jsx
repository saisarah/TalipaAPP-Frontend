import Spinner from "@/components/Spinner";
import { useUserThread } from "@/query/queries/useUsersQuery";
import { MessageOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Navigate, useSearchParams } from "react-router-dom";

export default function ThreadsPage() {

  const [params] = useSearchParams()
  const user_id = params.get("user_id")
  const { data, isLoading, isSuccess } = useUserThread(user_id)

  if (isLoading) {
    return (
      <div className="absolute inset-0 md:static flex-grow flex flex-col bg-white">
        <Spinner tip="Fetching messages" />
      </div>
    )
  }

  if (isSuccess) {
    return <Navigate to={`/farmer/messages/${data.id}`} replace/>
  }

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
