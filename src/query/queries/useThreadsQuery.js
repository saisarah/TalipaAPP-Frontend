import { fetchThread, fetchThreadMessages, fetchThreads, sendMessage } from "@/apis/ThreadApi"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"


export const useThreadsQuery = () => {
  return useQuery(
    ['threads'],
    fetchThreads
  )
}

export const useThreadQuery = (thread_id, option) => {
  const queryClient = useQueryClient()
  return useQuery(
    fetchThread.key(thread_id),
    () => fetchThread(thread_id),
    option
  )
}

export const useThreadMessagesQuery = (thread_id) => {
  return useQuery(
    fetchThreadMessages.key(thread_id),
    () => fetchThreadMessages(thread_id)
  )
}

export const useSendMessageMutation = (option) => {
  return useMutation(
    ({ thread_id, content }) => sendMessage(thread_id, content),
    option
  )
}