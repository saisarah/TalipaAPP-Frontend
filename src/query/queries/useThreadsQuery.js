import { fetchThread, fetchThreadMessages, fetchThreads, sendMessage } from "@/apis/ThreadApi"
import { useMutation, useQuery } from "@tanstack/react-query"


export const useThreadsQuery = () => {
  return useQuery(
    ['threads'],
    fetchThreads
  )
}

export const useThreadQuery = (thread_id, option) => {
  return useQuery(
    ['threads', thread_id],
    () => fetchThread(thread_id),
    option
  )
}

export const useThreadMessagesQuery = (thread_id) => {
  return useQuery(
    fetchThreadMessages.key(thread_id),
    () => fetchThreadMessages(thread_id),
    {
      select: (messages) => messages.reverse()
    }
  )
}

export const useSendMessageMutation = (option) => {
  return useMutation(
    ({ thread_id, content }) => sendMessage(thread_id, content),
    option
  )
}