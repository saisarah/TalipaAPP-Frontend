import { fetchThread, fetchThreadMessages, fetchThreads, sendMessage } from "@/apis/ThreadApi"
import { useMutation, useQuery } from "@tanstack/react-query"


export const useThreadsQuery = () => {
  return useQuery(
    ['threads'],
    fetchThreads
  )
}

export const useThreadQuery = (thread_id) => {
  return useQuery(
    ['threads', thread_id],
    () => fetchThread(thread_id)
  )
}

export const useThreadMessagesQuery = (thread_id) => {
  return useQuery(
    ['threads', thread_id, 'messages'],
    () => fetchThreadMessages(thread_id)
  )
}

export const useSendMessageMutation = (option) => {
  return useMutation(
    ({ thread_id, content }) => sendMessage(thread_id, content),
    option
  )
}