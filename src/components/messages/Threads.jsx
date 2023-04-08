import { useThreadsQuery } from "@/query/queries/useThreadsQuery";
import PageHeader from "../PageHeader/PageHeader";
import Spinner from "../Spinner";
import MessageItem from "./MessageItem";

export default function Threads({ children, className = "" }) {
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
              <MessageItem
                key={thread.id}
                to={`/farmer/messages/${thread.id}`}
                thread={thread}
              />
            ))}
          </div>
        )}
      </div>

      <div className="relative hidden flex-grow flex-col md:flex">
        {children}
      </div>
    </div>
  );
}
