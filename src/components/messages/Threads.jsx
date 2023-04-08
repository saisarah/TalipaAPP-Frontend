import { useThreadsQuery } from "@/query/queries/useThreadsQuery";
import { MessageOutlined } from "@ant-design/icons";
import { Button } from "antd";
import PageHeader from "../PageHeader/PageHeader";
import Spinner from "../Spinner";
import ThreadItem from "./ThreadItem";

export default function Threads({ children, threadLink, className = "" }) {
  const { data: threads, isLoading } = useThreadsQuery();

  return (
    <div className="flex flex-grow overflow-hidden border-slate-200 bg-white md:rounded-lg md:border">
      <div
        className={`w-full border-r border-slate-200 md:w-[40%] ${className}`}
      >
        <div className="hidden md:block">
          <PageHeader title="Conversations" />
        </div>
        {isLoading ? (
          <Spinner />
        ) : (
          <div className="flex flex-col">
            {threads.map((thread) => (
              <ThreadItem
                key={thread.id}
                to={threadLink(thread.id)}
                thread={thread}
              />
            ))}
          </div>
        )}
      </div>

      {/* <div className="relative hidden flex-grow flex-col md:flex"> */}
      {children}
      {/* </div> */}
    </div>
  );
}
