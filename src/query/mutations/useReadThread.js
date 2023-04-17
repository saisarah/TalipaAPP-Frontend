import { fetchThread, readThread } from "@/apis/ThreadApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { useThreadQuery } from "../queries/useThreadsQuery";

export default function useReadThread(thread_id) {
  const queryClient = useQueryClient();
  const { data: thread } = useThreadQuery(thread_id);
  const { mutate } = useMutation(() => readThread(thread_id), {
    onSuccess(data) {
      queryClient.setQueryData(fetchThread.key(thread_id), data);
      queryClient.setQueryData(["threads"], (threads) => {
        return threads.map((thread) => {
          if (thread.id === data.id) return data;
          return thread;
        });
      });
    },
  });

  useEffect(() => {
    if (thread?.unread_messages_count) {
      mutate();
    }
  }, [thread?.unread_messages_count]);
}
